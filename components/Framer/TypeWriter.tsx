"use client"
import { useEffect, useState } from "react"

const Typewriter: React.FC = () => {
  const words = [".", "..", "..."]
  const [currentWord, setCurrentWord] = useState<string>("")
  const [i, setI] = useState<number>(0)
  const [j, setJ] = useState<number>(0)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  useEffect(() => {
    const type = () => {
      const word = words[i]
      if (isDeleting) {
        setCurrentWord(word.substring(0, j - 1))
        setJ(j - 1)
        if (j - 1 === 0) {
          setIsDeleting(false)
          setI((i + 1) % words.length)
        }
      } else {
        setCurrentWord(word.substring(0, j + 1))
        setJ(j + 1)
        if (j + 1 === word.length) {
          setIsDeleting(true)
        }
      }
    }

    const timeout = setTimeout(type, 500)
    return () => clearTimeout(timeout)
  }, [currentWord, i, j, isDeleting])

  return (
    <div className="inline">
      <h1 id="typewriter" className="text-[12px] font-semibold">
        {currentWord}
      </h1>
    </div>
  )
}

export default Typewriter
