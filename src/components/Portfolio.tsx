import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import UnderlineLink from "./UnderlineLink";

const Portfolio = () => {
    return (
        <div className="px-20 py-10">
            <h2 className="text-5xl text-center font-semibold">
                Our Studio Portfolio
            </h2>
            <p className="mt-5 text-center">
                Our 2024 Service Incubator Portfolio Companies
            </p>
            <div className="relative w-100 h-[700px]">
                <Image src={'/portfolio.png'} alt="Our studio portfolio" fill className="object-contain"/>
            </div>
            <UnderlineLink text="View All Companies"/>
            
        </div>
    );
}

export default Portfolio;