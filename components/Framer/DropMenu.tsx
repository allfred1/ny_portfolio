"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown, FaAngleRight } from "react-icons/fa"

interface IIProps {
  selectedOption: () => void
  setSelectedOption: () => void
}

export default function DropMenu({ selectedOption, setSelectedOption }: IIProps) {
  const [isOpen, setIsOpen] = useState(false)

  const options = ["Relevance", "Date"]

  return (
    <div className="relative">
      <motion.div
        className="group flex cursor-pointer items-center justify-between rounded-[80px] border-2 border-black px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>{selectedOption}</span>
        <motion.div
          className="px-2"
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaAngleRight size={24} /> : <FaChevronDown size={24} />}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-10 mt-2 w-full rounded-lg border border-black bg-white p-2 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option) => (
              <motion.li
                key={option}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedOption(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
