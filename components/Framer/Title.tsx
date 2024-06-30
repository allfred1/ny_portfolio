"use client"

import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
}

const titleVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 2,
    },
  },
}
const lineVariantsTwo = {
  hidden: { width: 0 },
  visible: {
    width: "2rem",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0,
    },
  },
}

export default function Title({ children }: TitleProps) {
  return (
    <div className="flex flex-row items-center overflow-hidden">
      <motion.div
        className="border-t-2 border-black dark:border-white"
        initial="hidden"
        animate="visible"
        variants={lineVariantsTwo}
        style={{ width: "2rem" }}
      />
      <motion.h2
        className="block whitespace-nowrap rounded-[80px] border border-black px-8 text-2xl font-light leading-10 text-black dark:border-white dark:text-white"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.h2>
      <motion.div
        className="border-t-2 border-black dark:border-white"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        style={{ width: "100%" }}
      />
    </div>
  )
}
