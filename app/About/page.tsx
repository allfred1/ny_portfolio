"use server";

import Image from "next/image"
import AmazonGameDay from "@/assets/ava.jpg"
import Link from "next/link"

export default async function About() {
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
  // to always be relevant and self-maintained

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {/* Profile Image */}
        <div className="overflow-hidden rounded-3xl shadow-lg transition-all hover:shadow-xl">
          <div className="relative h-64 md:h-full">
            <Image src={AmazonGameDay} alt="oldiberezko profile" layout="fill" objectFit="cover" className="z-10" />
          </div>
        </div>

        {/* Introduction */}
        <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-purple-100 to-indigo-100 p-6 shadow-lg transition-all hover:shadow-xl">
          <h2 className="mb-2 text-3xl font-bold">Hello👋 I'm</h2>
          <h1 className="mb-4 text-4xl font-extrabold text-red-600">oldiberezko</h1>
          <div className="mb-4 text-2xl font-bold">{HowsOld()} year-old</div>
          <div className="flex flex-wrap gap-2">
            {["Frontend Engineer", "Mobile Developer", "Backend Developer"].map((skill) => (
              <span key={skill} className="rounded-full bg-white px-3 py-1 text-sm font-medium text-indigo-600 shadow">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="rounded-3xl bg-white p-6 shadow-lg md:col-span-2">
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
              <div key={index} className="rounded-2xl bg-gray-50 p-4 transition-all hover:shadow-md">
                <p className="text-sm font-medium text-gray-500">{edu.year}</p>
                <h3 className={`text-xl font-semibold ${edu.strikethrough ? "line-through" : ""}`}>{edu.course}</h3>
                <p className={`text-sm font-medium ${edu.color}`}>
                  {edu.institute} {edu.duration && `~~ ${edu.duration}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
