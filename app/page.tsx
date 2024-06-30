"use client";
import { motion } from "framer-motion";
import Title from "@/components/Framer/Title";
import Carousel from "@/components/Framer/Carousel";
import { BsSend } from "react-icons/bs";
import Typewriter from "@/components/Framer/TypeWriter";
import Image from "next/image";
import Link from "next/link";
import Metalic from "@/assets/Metallic.png";
import Bedrock from "@/assets/Bedrock.png";
import NumberAnimator from "@/components/Framer/NumberAnimator";

const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
    return (
        <div className="container mx-auto px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="rounded-3xl border-2 border-black dark:border-white relative min-h-36 col-span-1 md:col-span-4 overflow-hidden"
                    variants={itemVariants}
                >
                    <Title>Stack</Title>
                    <div className="flex flex-col gap-3 p-3">
                        <Carousel direction="right" />
                        <Carousel direction="left" />
                    </div>
                </motion.div>

                <motion.a
                    href="https://oldiberezko.t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="col-span-1 sm:col-span-1"
                    variants={itemVariants}
                >
                    <div className="rounded-3xl border-2 border-black dark:border-white relative min-h-36 flex flex-col justify-between group overflow-hidden cursor-pointer p-4">
                        <div>
                            <Title>
                                Say <br />
                                Hello 👋
                            </Title>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="message p-2 border border-black dark:border-white rounded-full bg-black text-white dark:bg-white dark:text-black">
                                <span className="flex items-center text-[12px] px-2">
                                    What&quot;s, oldiberezko <Typewriter />
                                </span>
                            </div>
                            <div className="p-2 border rounded-full border-white dark:border-black group-hover:bg-black dark:group-hover:bg-white">
                                <BsSend size={18} className="text-white dark:text-black" />
                            </div>
                        </div>
                    </div>
                </motion.a>

                <motion.div
                    className="col-span-1 row-span-2 sm:col-span-1 min-h-12 rounded-3xl border-2 border-black dark:border-white relative overflow-hidden p-6"
                    variants={itemVariants}
                >
                    <Link href="projects">
                        <motion.div className="absolute z-10 backdrop-blur rounded-full px-2">
                            <span className="font-bold text-3xl text-black dark:text-white">Projects</span>
                        </motion.div>
                        <Image
                            src={Metalic}
                            alt="Card Image type metalic"
                            className="absolute right-[-3rem] top-[-3rem] -z-10"
                        />
                        <Image
                            src={Metalic}
                            alt="Card Image type metalic"
                            className="absolute left-[-3rem] bottom-[-10rem] -z-10"
                        />
                    </Link>
                </motion.div>

                <motion.div
                    className="col-span-1 min-h-56 rounded-3xl border-2 border-black dark:border-white relative overflow-hidden bg-[#121214] p-6"
                    variants={itemVariants}
                >
                    <Link href="about">
                        <motion.div className="flex items-center justify-center text-white z-40">oldiberezko</motion.div>
                        <motion.div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                            <div className="flex flex-col gap-1 items-center">
                                {"about".split("").map((item, index) => (
                                    <span key={index} className="font-bold mix-blend-hard-light text-white">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <Image
                            src={Bedrock}
                            alt="Bedrock card background figure"
                            className="absolute bottom-[-2rem] blur z-10"
                        />
                    </Link>
                </motion.div>

                <motion.div
                    className="col-span-2 min-h-56 rounded-3xl border-2 border-black dark:border-white relative overflow-hidden flex flex-col justify-between p-6"
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
    );
}
