"use server";
import LLogo from "@/assets/light_logo.svg";
import Logo from "@/assets/logo.svg";
import Image, { StaticImageData } from "next/image";

interface ICardProps {
    imageSrc: StaticImageData;
}

const cardsData = [
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
    {
        imageSrc: LLogo,
    },
    {
        imageSrc: Logo,
    },
];

const Card: React.FC<ICardProps> = async ({ imageSrc }) => (
    <div className="block p-2 bg-slate-200 dark:bg-slate-800">
        <Image src={imageSrc} alt="Logo" className="m-12 h-12" />
    </div>
);

const Carousel: React.FC = async () => (
    <div className=" py-1 px-4 overflow-hidden flex flex-row items-center gap-2 rounded-[80px]">
        {cardsData.map((item, index) => (
            <Card key={index} imageSrc={item.imageSrc} />
        ))}
        <p>123123</p>
    </div>
);

export default Carousel;
