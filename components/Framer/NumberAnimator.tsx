"use client"

import { useEffect, useState } from "react"

interface NumberAnimatorProps {
  target: number
  className?: string
}

const NumberAnimator: React.FC<NumberAnimatorProps> = ({ target, className }) => {
  const [currentNumber, setCurrentNumber] = useState(0)

  useEffect(() => {
    const increment = target / 200
    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        const updatedValue = prev + increment
        if (updatedValue >= target) {
          clearInterval(interval)
          return target
        }
        return Math.min(updatedValue, target)
      })
    }, 20)

    return () => clearInterval(interval)
  }, [target])

  return (
    <span className={`text-3xl font-bold text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl ${className}`}>
      {Math.floor(currentNumber)}
    </span>
  )
}

export default NumberAnimator
