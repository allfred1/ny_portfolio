"use server"
import { TbLoader3 } from "react-icons/tb"

export default async function Loader() {
  return (
    <div className="fixed left-0 top-0 z-50 h-full max-h-full w-full max-w-full p-6">
      <div className="animate-infinite animate-ease-in flex animate-pulse flex-row items-center justify-center border-2 border-black align-middle text-black dark:border-white dark:text-white">
        <div className="icon animate-infinite animate-ease-linear animate-spin">
          <TbLoader3 size={24} className="text-black dark:text-white" />
        </div>
        <div className="title text-2xl font-bold text-black dark:text-white">Loading...</div>
      </div>
    </div>
  )
}
