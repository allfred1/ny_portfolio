"use client";
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import AmazonGameDay from "@/assets/ava.jpg"

export default function About() {
  const HowsOld = () => {
    const today = new Date()
    const birthDate = new Date("2007-08-26")
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  // Animation variants for different sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className="container mx-auto p-4 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Profile Image */}
        <motion.div
          className="overflow-hidden rounded-3xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          variants={itemVariants}
        >
          <div className="relative h-64 md:h-full">
            <Image src={AmazonGameDay} alt="oldiberezko profile" layout="fill" objectFit="cover" className="z-10" />
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 p-6 shadow-lg"
          whileHover={{ scale: 1.02 }}
          variants={itemVariants}
        >
          <h2 className="mb-2 text-3xl font-bold">Hello👋 I'm</h2>
          <h1 className="mb-4 text-4xl font-extrabold text-red-600">oldiberezko</h1>
          <div className="mb-4 text-2xl font-bold">{HowsOld()} years-old</div>
          <div className="flex flex-wrap gap-2">
            {["Frontend Engineer", "Mobile Developer", "Backend Developer"].map((skill, index) => (
              <motion.span
                key={index}
                className="rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-600 shadow"
                whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div className="rounded-3xl bg-white p-6 shadow-lg md:col-span-2" variants={itemVariants}>
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Education</h2>
          <div className="space-y-4">
            {[
              {
                year: "2024",
                course: "Dart developer",
                institute: "YouTube",
                duration: "1 month",
                color: "text-red-500",
              },
              {
                year: "2023-2024",
                course: "Frontend Developer",
                institute: "Proweb",
                duration: "10 months",
                color: "text-blue-500",
              },
              {
                year: "2022",
                course: "NodeJS developer",
                institute: "Purple School",
                duration: "4 months",
                color: "text-purple-500",
              },
              {
                year: "2021",
                course: "Python developer",
                institute: "YouTube",
                duration: "6 months",
                color: "text-red-500",
                strikethrough: true,
              },
              { year: "2020", course: "GoLang Engineer", institute: "Slurm", duration: "", color: "text-blue-700" },
              { year: "2019", course: "html/css developer", institute: "Youtube", duration: "", color: "text-red-700" },
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="rounded-2xl bg-gray-50 p-4 transition-all hover:shadow-md"
                variants={itemVariants}
              >
                <p className="text-sm font-medium text-gray-500">{edu.year}</p>
                <h3 className={`text-xl font-semibold ${edu.strikethrough ? "line-through" : ""}`}>{edu.course}</h3>
                <p className={`text-sm font-medium ${edu.color}`}>
                  {edu.institute} {edu.duration && `~~ ${edu.duration}`}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
