export default async function Projects() {
  return (
    <div className="contain p-12">
      <div className="title flex w-full flex-col items-start justify-center gap-4">
        <h1 className="text-5xl font-bold uppercase leading-8">PORTFOLIO</h1>
        <h2 className="text-xl font-medium leading-5">
          Here we have tried to collect all our works to make it easier for you to familiarize with them
        </h2>
      </div>

      <div className="categories mt-10 flex w-full flex-row items-center justify-between gap-4">
        <ul className="flex flex-row items-center gap-4">
          <li className="active relative flex flex-col items-center justify-center">
            <span className="text-[18px] capitalize">projects</span>

            <div className="line absolute bottom-[-8px] right-1/4 h-1 w-[80%] bg-black"></div>
          </li>{" "}
          <li className="active relative flex flex-col items-center justify-center">
            <span className="text-[18px] capitalize">Productions</span>
          </li>
        </ul>

      </div>
    </div>
  )
}
