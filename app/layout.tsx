import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import UiLayout from "@/layout/UiLayout"
const poppins = Poppins({ subsets: ["latin-ext"], weight: ["400", "700", "600"], preload: true })

export const metadata: Metadata = {
  title: "oldiberezko - portfolio",
  description: "personal website  a web dev",
  keywords: "nextjs, tailwindcss, typescript, javascript, css, html, git, github, github actions",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} dark:border-white dark:bg-black dark:text-white`}>
        <UiLayout>{children}</UiLayout>
      </body>
    </html>
  )
}
