"use client"
// Carousel.tsx
import { useEffect, useRef, useState, FC } from "react"
import { motion } from "framer-motion"
import { FaReact, FaGitAlt, FaNodeJs, FaHtml5 } from "react-icons/fa"
import { RiNextjsLine, RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandTypescript, TbBrandVite } from "react-icons/tb"
import { SiStrapi, SiRedux, SiExpress, SiDart } from "react-icons/si"
import { SiStorybook } from "react-icons/si"
import { SiGithubactions } from "react-icons/si"
import { DiMongodb } from "react-icons/di"

interface Stack {
  icon: JSX.Element
  title: string
}

const initialStacks: Stack[] = [
  { icon: <FaReact />, title: "React" },
  { icon: <TbBrandTypescript />, title: "TypeScript" },
  { icon: <RiJavascriptLine />, title: "JavaScript" },
  { icon: <RiNextjsLine />, title: "NextJS" },
  { icon: <RiTailwindCssFill />, title: "TailwindCSS" },
  { icon: <FaGitAlt />, title: "Git" },
  { icon: <SiRedux />, title: "Zustand" },
  { icon: <SiStrapi />, title: "Strapi" },
  { icon: <TbBrandVite />, title: "Vite" },
  { icon: <FaNodeJs />, title: "NodeJS" },
  { icon: <SiExpress />, title: "Express" },
  { icon: <SiDart />, title: "Dart" },
  { icon: <FaHtml5 />, title: "Html5" },
  { icon: <SiStorybook />, title: "StoryBook" },
  { icon: <SiGithubactions />, title: "Github Actions" },
  {
    icon: <DiMongodb />,
    title: "MongoDB",
  },
]

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5)
}

interface CarouselProps {
  direction: "left" | "right"
}

const Carousel: FC<CarouselProps> = ({ direction }) => {
  const [stacks, setStacks] = useState<Stack[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const extendedStacks = shuffleArray([...initialStacks, ...initialStacks]) // Дублирование для бесшовного перехода
    setStacks(extendedStacks)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.style.transition = "transform 0.5s ease-in-out"
        if (direction === "right") {
          carouselRef.current.style.transform = "translateX(-100%)"
        } else {
          carouselRef.current.style.transform = "translateX(100%)"
        }

        const transitionEnd = () => {
          carouselRef.current!.style.transition = "none"
          if (direction === "right") {
            const firstChild = carouselRef.current!.firstChild as ChildNode
            carouselRef.current!.appendChild(firstChild)
          } else {
            const lastChild = carouselRef.current!.lastChild as ChildNode
            carouselRef.current!.insertBefore(lastChild, carouselRef.current!.firstChild)
          }
          carouselRef.current!.style.transform = "translateX(0)"
          carouselRef.current!.removeEventListener("transitionend", transitionEnd)
        }

        carouselRef.current.addEventListener("transitionend", transitionEnd)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [direction, stacks])

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={carouselRef} className="flex gap-4">
        {stacks.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-row items-center gap-3 text-nowrap rounded-lg border border-[#1d1f2e] bg-black px-4 py-2 align-middle text-white dark:bg-slate-950 dark:text-white"
          >
            <div className="h-full w-full py-2 text-white">{item.icon}</div>
            <div className="title">{item.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
