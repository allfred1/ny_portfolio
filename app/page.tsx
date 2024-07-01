"use client"
import { motion } from "framer-motion"
import Title from "@/components/Framer/Title"
import Carousel from "@/components/Framer/Carousel"
import { BsSend } from "react-icons/bs"
import Typewriter from "@/components/Framer/TypeWriter"
import Image from "next/image"
import Link from "next/link"
import Metalic from "@/assets/Metallic.png"
import Bedrock from "@/assets/Bedrock.png"
import NumberAnimator from "@/components/Framer/NumberAnimator"

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative col-span-4 min-h-36 overflow-hidden rounded-3xl border-2 border-black dark:border-white sm:col-span-2"
          variants={itemVariants}
        >
          <Title>Stack</Title>
          <div className="flex flex-col gap-3 p-2">
            <Carousel direction="right" />
            <Carousel direction="left" />
          </div>
        </motion.div>

        <motion.a
          href="https://oldiberezko.t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 sm:col-span-1"
          variants={itemVariants}
        >
          <div className="group relative flex min-h-36 cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border-2 border-black p-4 dark:border-white">
            <div>
              <Title>
                Say <br />
                Hello 👋
              </Title>
            </div>
            <div className="flex items-center p-6">
              <div className="message rounded-full border border-black bg-black p-2 text-white dark:border-white dark:bg-white dark:text-black">
                <span className="flex items-center px-2 text-[12px]">
                  What&quot;s, oldiberezko <Typewriter />
                </span>
              </div>
              <div className="animated rounded-full border border-white p-3 group-hover:mx-4 group-hover:bg-black dark:border-black dark:group-hover:bg-white">
                <BsSend size={18} className="text-white dark:text-black" />
              </div>
            </div>
          </div>
        </motion.a>

        <motion.div
          className="relative col-span-4 row-span-2 min-h-56 overflow-hidden rounded-3xl border-2 border-black p-6 dark:border-white sm:col-span-1"
          variants={itemVariants}
        >
          <Link href="Projects">
            <motion.div className="absolute z-10 rounded-full px-2 backdrop-blur">
              <span className="text-3xl font-bold text-black dark:text-white">Projects</span>
            </motion.div>
            <Image src={Metalic} alt="Card Image type metalic" className="absolute right-[-3rem] top-[-3rem] -z-10" />
            <Image
              src={Metalic}
              alt="Card Image type metalic"
              className="absolute bottom-[-10rem] left-[-3rem] -z-10"
            />
          </Link>
        </motion.div>

        <motion.div
          className="relative col-span-4 min-h-56 overflow-hidden rounded-3xl border-2 border-black p-6 dark:border-white sm:col-span-1"
          variants={itemVariants}
        >
          <Link href="About">
            <motion.div className="z-40 flex items-center justify-center text-black dark:text-white">
              oldiberezko
            </motion.div>
            {/* <motion.div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="flex flex-col gap-1 items-center">
                                {"about".split("").map((item, index) => (
                                    <span key={index} className="font-bold mix-blend-hard-light text-white">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div> */}
            <Image src={Bedrock} alt="Bedrock card background figure" className="absolute bottom-[-2rem] z-10 blur" />
          </Link>
        </motion.div>

        <motion.div
          className="relative col-span-2 flex min-h-56 flex-col justify-between overflow-hidden rounded-3xl border-2 border-black p-6 dark:border-white"
          variants={itemVariants}
        >
          <Title>Experience</Title>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <NumberAnimator target={7} />
              <span className="text-xl font-bold text-black dark:text-white">The Years</span>
            </div>
            <div className="flex items-center gap-2">
              <NumberAnimator target={6} />
              <span className="text-xl font-bold text-black dark:text-white">The Months</span>
            </div>
            <div className="flex items-center gap-2">
              <NumberAnimator target={30} />
              <span className="text-xl font-bold text-black dark:text-white">The Days</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
