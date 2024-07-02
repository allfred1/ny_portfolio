"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaAngleRight, FaStar } from "react-icons/fa"
import { IoStarSharp } from "react-icons/io5"
import { FaCodeFork } from "react-icons/fa6"
import { IoPeopleSharp } from "react-icons/io5"
import { CiCalendarDate } from "react-icons/ci"

interface IRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  created_at: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
}

interface ICardProps {
  repo: IRepo
}

export default function Card({ repo }: ICardProps) {
  const createdDate = new Date(repo.created_at).toLocaleDateString()

  const handleStarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(repo.html_url, "_blank") 
  }

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        className="group relative overflow-hidden rounded-[30px] border-2 border-black bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:border-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-300 opacity-50"
          animate={{ scale: [1, 1.2, 1.3, 1.4, 1.5, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className="relative z-10">
          <div className="mb-4 flex items-center justify-between">
            <motion.h2
              className="text-3xl font-bold capitalize leading-8"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {repo.name}
            </motion.h2>
            <motion.div
              className="rounded-full bg-black p-2 text-white dark:bg-white dark:text-black"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <FaAngleRight size={24} />
            </motion.div>
          </div>
          <motion.p
            className="mb-6 text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {repo.description || "No description available."}
          </motion.p>
          <div className="more flex flex-row items-center justify-between">
            <div className="flex items-center">
              <motion.button
                className="flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1 text-black"
                whileHover={{ scale: 1.1 }}
                onClick={handleStarClick}
              >
                <FaStar size={20} />
              </motion.button>
              <motion.div
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <IoStarSharp size={20} className="text-yellow-500" />
                <span className="font-semibold">{repo.stargazers_count}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <FaCodeFork size={20} className="text-yellow-500" />
                <span className="font-semibold">{repo.forks_count}</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <IoPeopleSharp size={20} className="text-yellow-500" />
                <span className="font-semibold">{repo.watchers_count}</span>
              </motion.div>
            </div>
            <div className="date">
              <motion.div className="flex flex-row items-center gap-2 rounded-full bg-gray-100 px-3 py-1 dark:bg-gray-700">
                <span className="text-[18px] font-semibold">{createdDate}</span>
                <CiCalendarDate size={20} className="text-yellow-500" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  )
}
