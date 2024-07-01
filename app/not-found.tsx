"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Custom404() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [router])

  return (
    <>
      <div className="contain mx-auto flex min-h-[70dvh] flex-col items-center justify-center gap-12 border-2 border-black p-4 dark:border-white">
        <div className="title block text-[20dvh] font-semibold leading-8 dark:text-white">404</div>
        <div className="desc mt-4 block font-bold dark:text-white">Page not found. Check the URL and try again.</div>
      </div>
    </>
  )
}
