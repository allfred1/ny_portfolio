"use client"
import { useEffect, useState, FC, useRef } from "react"
import { motion } from "framer-motion"
import { FaReact, FaGitAlt, FaNodeJs, FaHtml5 } from "react-icons/fa"
import { RiNextjsLine, RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandTypescript, TbBrandVite } from "react-icons/tb"
import { SiStrapi, SiRedux, SiExpress, SiDart } from "react-icons/si"
import { SiStorybook, SiGithubactions } from "react-icons/si"
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
  { icon: <DiMongodb />, title: "MongoDB" },
]

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

const Carousel: FC<{ direction: "left" | "right"; speed?: number }> = ({ direction, speed = 50 }) => {
  const [stacks, setStacks] = useState<Stack[]>([])
  const [width, setWidth] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const shuffledStacks = shuffleArray(initialStacks)
    setStacks([...shuffledStacks, ...shuffledStacks])
  }, [])

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth / 2)
    }
  }, [stacks])

  const variants = {
    animate: {
      x: direction === "left" ? [-width, 0] : [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: width / speed,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={carouselRef}
        className="flex cursor-pointer select-none gap-2"
        initial={false}
        animate="animate"
        variants={variants}
      >
        {stacks.map((item, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 flex-row items-center gap-3 text-nowrap rounded-lg border border-[#1d1f2e] bg-black px-4 py-2 align-middle text-white dark:bg-slate-950 dark:text-white"
          >
            {item.icon}
            <span>{item.title}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Carousel
