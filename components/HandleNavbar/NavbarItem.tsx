// use client directive
"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// Define a type for individual navigation items
interface INavItem {
    id: string;
    title: string;
    href: string;
}

// Props type for NavbarItems component
interface IIProps {
    items: INavItem[];
    currentPath: string;
}

export default function NavbarItems({ items, currentPath }: IIProps) {
    const [position, setPosition] = useState<{ left: number; width: number; opacity: number }>({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const [activePosition, setActivePosition] = useState<{ left: number; width: number; opacity: number }>({
        left: 0,
        width: 0,
        opacity: 0,
    });
    const listRef = useRef<HTMLUListElement>(null);

    const transition = { type: "spring", stiffness: 300, damping: 20 };

    useEffect(() => {
        if (listRef.current && listRef.current.children.length > 0) {
            const activeIndex = items.findIndex((item) => currentPath === item.href);
            if (activeIndex !== -1) {
                const activeItem = listRef.current.children[activeIndex] as HTMLElement;
                const { left, width } = activeItem.getBoundingClientRect();
                const listLeft = listRef.current.getBoundingClientRect().left;
                const newActivePosition = {
                    left: left - listLeft,
                    width,
                    opacity: 1,
                };
                setPosition(newActivePosition);
                setActivePosition(newActivePosition);
            }
        }
    }, [items, currentPath]);

    return (
        <ul
            ref={listRef}
            className="overflow-hidden relative flex-row items-center gap-1 p-2 rounded-[80px] dark:border-[#EBEBEB] border border-[#141414] sm:flex hidden"
            onMouseLeave={() => setPosition(activePosition)}
        >
            {items.map((item, index) => (
                <li
                    onMouseEnter={() => {
                        if (listRef.current && listRef.current.children[index]) {
                            const node = listRef.current.children[index] as HTMLElement;
                            const { left, width } = node.getBoundingClientRect();
                            const listLeft = listRef.current.getBoundingClientRect().left;
                            setPosition({
                                left: left - listLeft,
                                width,
                                opacity: 1,
                            });
                        }
                    }}
                    className={`p-3 rounded-[80px] leading-5 z-10 cursor-pointer animate ${
                        listRef.current &&
                        listRef.current.children[index] &&
                        position.left ===
                            (listRef.current.children[index] as HTMLElement).getBoundingClientRect().left -
                                listRef.current.getBoundingClientRect().left
                            ? "dark:text-black text-white"  // Ensures text color changes based on the theme
                            : "dark:text-white text-black"
                    }`}
                    key={item.id}
                >
                    <Link href={item.href} className="text-[16px] font-normal">
                        {item.title}
                    </Link>
                </li>
            ))}
            <motion.li
                animate={position}
                transition={transition}
                className="absolute z-0 h-[44px] w-16 rounded-[80px] bg-[#1d1d1d] dark:bg-[#EBEBEB] mx-[4px] animate"
            />
        </ul>
    );
}

