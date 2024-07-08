"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Featured = () => {
    const data= [
        {
            image: '/cheerfulpeople.jpeg',
            icon: '/qntec.png',
        },
        {
            image: '/ladyandtab.jpeg',
            icon: '/bujnews.jpeg',
        },
        {
            image: '/ladyonsystem.jpeg',
            icon: '/punch.png',
        },
    ]
    const [position, setPosition] = useState(3);
    useEffect(()=>{
        let increment= setInterval(()=>{
            setPosition(prev=>(prev+1)%3)
        }, 5000);

        return ()=> clearInterval(increment);
    }, 
    [])

    return (
        <div className="mx-20 my-20">
            <h2 className="text-3xl font-bold text-center">
                As Featured in
            </h2>
            <div className="mt-5 gap-[32px] flex justify-center overflow-hidden">
                {data.map((item, index)=>
                    <div key={index} className={`w-[894px]  flex bg-white`} style={{order: -`${(index+position)%3}`}}>
                        <div className="relative min-w-[622px] h-[393px]">
                            <Image className="object-cover" src={item.image} fill alt="Newspaper features"/>    
                        </div> 
                        <div className="p-5 min-w-[272px] flex flex-col text-md">
                            <div className="relative w-[71px] h-[30px]">
                                <Image src={item.icon} fill alt="Logo of BUJ News platform"/>
                            </div>
                            <p className="font-medium mt-5">
                                SINC Partners invests  over 200 million naira in 5 startups
                            </p>
                            <p className="mt-5">
                                SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....
                            </p>
                            <div className="mt-auto">
                                <p>
                                REPORTED BY:
                                </p>
                                <p>
                                Rema Viel
                                </p>
                            </div>
                        </div>  
                    </div>
                )}
            </div>

        </div>
    );
}

export default Featured;