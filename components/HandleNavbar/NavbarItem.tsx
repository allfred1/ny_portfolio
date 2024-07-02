"use client"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Link from "next/link"

interface INavItem {
  id: string
  title: string
  href: string
}

interface IIProps {
  items: INavItem[]
  currentPath: string
  isMobile?: boolean
}

export default function NavbarItems({ items, currentPath, isMobile = false }: IIProps) {
  const [position, setPosition] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const [activePosition, setActivePosition] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })
  const listRef = useRef<HTMLUListElement>(null)

  const transition = { type: "spring", stiffness: 300, damping: 20 }

  const updateActivePosition = () => {
    if (listRef.current && listRef.current.children.length > 0) {
      const activeIndex = items.findIndex((item) => currentPath === item.href)
      if (activeIndex !== -1) {
        const activeItem = listRef.current.children[activeIndex] as HTMLElement
        const { left, width } = activeItem.getBoundingClientRect()
        const listLeft = listRef.current.getBoundingClientRect().left
        const newActivePosition = {
          left: left - listLeft,
          width,
          opacity: 1,
        }
        setPosition(newActivePosition)
        setActivePosition(newActivePosition)
      }
    }
  }

  useEffect(() => {
    updateActivePosition()
    window.addEventListener("resize", updateActivePosition)
    return () => {
      window.removeEventListener("resize", updateActivePosition)
    }
  }, [items, currentPath])

  if (isMobile) {
    return (
      <ul className="flex w-full flex-col">
        {items.map((item) => (
          <li key={item.id} className="py-2">
            <Link
              href={item.href}
              className={`text-[16px] font-normal ${currentPath === item.href ? "font-bold" : ""}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul
      ref={listRef}
      className="relative hidden flex-row items-center gap-1 overflow-hidden rounded-[80px] border border-[#141414] p-2 dark:border-[#EBEBEB] sm:flex"
      onMouseLeave={() => setPosition(activePosition)}
    >
      {items.map((item, index) => (
        <li
          onMouseEnter={() => {
            if (listRef.current && listRef.current.children[index]) {
              const node = listRef.current.children[index] as HTMLElement
              const { left, width } = node.getBoundingClientRect()
              const listLeft = listRef.current.getBoundingClientRect().left
              setPosition({
                left: left - listLeft,
                width,
                opacity: 1,
              })
            }
          }}
          className={`animate z-10 cursor-pointer rounded-[80px] p-3 leading-5 ${
            listRef.current &&
            listRef.current.children[index] &&
            position.left ===
              (listRef.current.children[index] as HTMLElement).getBoundingClientRect().left -
                listRef.current.getBoundingClientRect().left
              ? "text-white dark:text-black"
              : "text-black dark:text-white"
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
        className="animate absolute z-0 mx-[4px] h-[44px] w-16 rounded-[80px] bg-[#1d1d1d] dark:bg-[#EBEBEB]"
      />
    </ul>
  )
}
