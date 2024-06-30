import Title from "@/components/Framer/Title";
import Carousel from "@/components/Framer/Carousel";
export default function Home() {
    return (
        <>
            <div className="contain">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full sm:justify-center ">
                    <div className="rounded-3xl border-2 border-black relative min-h-36 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 row-span-1

                    dark:border-white
                    ">
                        <Title>Stack</Title>
                        <div className="wrapper border-2 dark:border-white  border-black rounded-md">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
