"use client";

import { usePathname } from "next/navigation";

import Image from "next/image";
import logo from "@/assets/logo.svg";
import LightLogo from "@/assets/light_logo.svg";

import useGenerator from "@/utils/useGenerator";
import NavbarItems from "./NavbarItem";
import { useEffect, useState } from "react";
import useThemeStore from "@/store/storeTheme";
interface INavbar {
    id: number;
    title: string;
    href: string;
    active?: boolean;
}
export default function Navbar() {
    const { darkTheme, toggleTheme } = useThemeStore();
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", darkTheme);
    }, [darkTheme]);

    // const [darkTheme, setDarkTheme] = useState<boolean>(false);

    // useEffect(() => {
    //     const savedTheme = localStorage.getItem("theme");
    //     if (savedTheme === "dark") {
    //         setDarkTheme(true);
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         setDarkTheme(false);
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, []);

    // useEffect(() => {
    //     const root = document.documentElement;
    //     if (darkTheme) {
    //         root.classList.add("dark");
    //         localStorage.setItem("theme", "dark");
    //     } else {
    //         root.classList.remove("dark");
    //         localStorage.setItem("theme", "light");
    //     }
    // }, [darkTheme]);

    const currentPath = usePathname();
    const items: INavbar[] = useGenerator(["About", "Wadad", "WADawd", "Projects"], currentPath);

    return (
        <div className="contain  p-6 flex flex-row items-center justify-between align-middle rounded-xl">
            <div className="logo flex flex-row items-center gap-2">
                {darkTheme ? (
                    <Image src={LightLogo} width={48} height={48} alt="oldiberezko logo" priority={true} />
                ) : (
                    <Image src={logo} width={48} height={48} alt="oldiberezko logo" priority={true} />
                )}

                <h1 className="text-xl font-semibold leading-8">oldiberezko</h1>
            </div>
            <div className="nav flex flex-row items-center align-middle">
                <NavbarItems items={items} currentPath={currentPath} />
            </div>
            <div className="block">
                <button onClick={toggleTheme} className="border-2  border-black p-4 dark:border-white rounded-[80px]">
                    <span className="bg-black p-2 dark:bg-white dark:text-black text-white rounded-[80px]">
                        {darkTheme ? "light theme" : "dark theme"}
                    </span>
                </button>
            </div>
        </div>
    );
}
