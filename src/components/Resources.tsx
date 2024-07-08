import Image from "next/image";
import SectionHeading from "./SectionHeading";
import UnderlineLink from "./UnderlineLink";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import { SlClock } from "react-icons/sl";

const Resources = () => {
    const data = [
        {
            image: '/youtubeImage.jpeg',
            small: '/annualreport.jpeg',
        },
        {
            image: '/yout.jpeg',
            small: '/createBusiness.jpeg',
        },
        {
            image: '/yout.jpeg',
            small: '/savesas.jpeg',
        },
    ]
    return (
        <div className="mx-20 my-10">
            <SectionHeading title="Blog and Resources"  subtitle=""/>
            <div className="mt-10 flex justify-center gap-[32px]">
                {
                    data.map((item, index)=>
                        <div key={index} className="rounded-xl w-[378px]">
                            <div className="relative w-full h-[235px]">
                                <Image className="object-cover" src={item.image} fill alt="Our blog stories on Youtube"/>
                                <Link href={`#`} className="absolute 
                                border border-1 bg-[#DF0707] -translate-y-1/2 -translate-x-1/2 flex items-center justify-center rounded-full h-[46.67px] w-[46.67px] top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
                                        <FaPlay className="text-white"/>
                                </Link>
                                <div className="w-full flex justify-center gap-[20px] absolute bottom-[10px] left-1/2 -translate-x-1/2">
                                    <p className=" text-white drop-shadow-lg">
                                        Top Ten Most Powerful Startup 
                                    </p>
                                    <p className="flex items-center gap-[7px] text-white font-light">
                                    <SlClock />
                                    <span className="font-light">
                                        <span className="text-sm">2</span> Min
                                    </span>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between">
                                <div>
                                    <h3 className="font-medium">
                                        Top Ten Most Powerful Startup
                                    </h3>
                                    <p className="mt-2">
                                        Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup
                                    </p>
                                </div>
                                <div className="relative w-[85px] h-[79px]">
                                    <Image src={item.small} fill alt="Annual Report icon"/>
                                    
                                </div>
                            </div>

                        </div>
                    )
                }

            </div>
            <div className="mt-5">            
                <UnderlineLink text="See More Blogs & Resources"/>
            </div>
        </div>
    );
}

export default Resources;