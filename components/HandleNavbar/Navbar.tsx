"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import logo from "@/assets/logo.svg"
import LightLogo from "@/assets/light_logo.svg"
import useGenerator from "@/utils/useGenerator"
import NavbarItems from "./NavbarItem"
import { useEffect, useState } from "react"
import useThemeStore from "@/store/storeTheme"
import { motion, AnimatePresence } from "framer-motion"

interface INavbar {
  id: number
  title: string
  href: string
  active?: boolean
}

export default function Navbar() {
  const { darkTheme, toggleTheme } = useThemeStore()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", darkTheme)
  }, [darkTheme])

  const currentPath = usePathname()
  const items: INavbar[] = useGenerator(["About", "Projects"], currentPath)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="contain relative flex flex-row items-center justify-between rounded-xl p-4 align-middle sm:p-6">
      <div className="logo flex flex-row items-center gap-2">
        {darkTheme ? (
          <Image src={LightLogo} width={48} height={48} alt="oldiberezko logo" priority={true} />
        ) : (
          <Image src={logo} width={48} height={48} alt="oldiberezko logo" priority={true} />
        )}
        <h1 className="text-xl font-semibold leading-8">oldiberezko</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <NavbarItems items={items} currentPath={currentPath} />
      </div>

      {/* Mobile Navigation Button */}
      <button onClick={toggleMenu} className="p-2 md:hidden">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full z-50 rounded-b-xl border-t-2 border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-black md:hidden"
            style={{
              backgroundColor: darkTheme ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
            }}
          >
            <NavbarItems items={items} currentPath={currentPath} isMobile={true} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="hidden rounded-[80px] border-2 border-black p-3 text-sm dark:border-white sm:block sm:p-4 sm:text-base"
      >
        <span className="rounded-[80px] bg-black p-1 text-white dark:bg-white dark:text-black sm:p-2">
          {darkTheme ? "light theme" : "dark theme"}
        </span>
      </button>
    </nav>
  )
}
