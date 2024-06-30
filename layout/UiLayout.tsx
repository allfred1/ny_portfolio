"use server"
import { ReactNode } from "react"
import Navbar from "@/components/HandleNavbar/Navbar"
import { FaGithub } from "react-icons/fa"
import Loader from "@/components/Framer/Loader"
import Error from "@/app/Error"
import Link from "next/link"
import { Suspense } from "react"

interface IIProps {
  children: React.ReactNode
}

export default async function UiLayout({ children }: IIProps) {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {" "}
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
      <footer className="contain mx-auto my-6 flex flex-row items-center justify-between rounded-[80px] bg-black px-4 py-2 text-[18px] text-white dark:bg-white dark:text-black">
        <div className="copyright"> © {new Date().getFullYear()} All rights reserved.</div>
        <div className="title text-2xl font-semibold text-white dark:text-black">oldiberezko</div>
        <div className="github">
          <Link href="https://github.com/allfred1" target="_blank">
            <FaGithub size={32} />
          </Link>
        </div>
      </footer>
    </>
  )
}
