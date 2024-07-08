"use client";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./styles/equityTransitions.css"; 

const EquityJobs = () => {
    const [loaded, setLoaded] = useState(false);
    const cards = [
        {
            photo: "/icons/skimake.png",
            intro: "This company is a SAAS Startup that builds AI copy generator...",
            location: "Abuja, Nigeria",
            title: "Chief Executive Officer",
            industry: "On-demand print",
      equity: "1.2%",
      stipend: "NGN 200,000/mth",
      deadline: "24th, January 2024",
      role: "Full-time",
    },
    {
        photo: "/icons/kreeca.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "UX Strategist",
        industry: "E-commerce",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/krowdback.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "CTO & Head of innovations",
        industry: "Fintech",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/wetta.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "Backend Developer",
        industry: "Transportation",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/remanno.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "Backend Developer",
        industry: "Real Estate",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/SBO.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "Backend Developer",
        industry: "Verification",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/frontlett.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "Chief People Officer",
        industry: "Human Resource",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
    {
        photo: "/icons/servicestock.png",
        intro: "This company is a SAAS Startup that builds AI copy generator...",
        location: "Abuja, Nigeria",
        title: "Mobile App Developer",
        industry: "Fintech",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        role: "Full-time",
    },
];

const slides = [cards.slice(0, 4), cards.slice(4, 8)];
const [activeIndex, setActiveIndex] = useState(0);
const intervaltime= 5000
useEffect(() => {
    const interval = setInterval(() => {
        handleNext();
    }, intervaltime); // Change slide every 3 seconds
    
    return () => clearInterval(interval);
     // Cleanup interval on component unmount
     // eslint-disable-next-line
}, []);

// const handleTrans = () => {
//   setLoaded(true)
// }
useEffect(
    ()=>{
        const interval = setInterval(()=>{
            setLoaded(prev=>!prev)
        }, intervaltime)
        return () => clearInterval(interval)
    }
    ,
    []
)

const handleNext = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
};

return (
    <div className="mx-10 py-10">
      <SectionHeading
        title="Equity jobs"
        subtitle="See companies and startups offering equity or a mix of cash and equity for very important positions in their company"
        />
      <div className="mt-5 relative">
        <div className="carousel w-full overflow-hidden">
            <div className="my-10 flex gap-[24px] justify-center items-center">
            {slides[1].map((card, index) => (
                  <div
                    key={index}
                    className={`text-sm w-[278px] p-5 bg-white rounded-xl ${
                      index < 2 ? `slideinitial  ${loaded && 'slideanimate'}` : `fadeinitial ${loaded && 'fadeanimate'}`
                    }`}
                  >
                    <div className="relative w-3/5 h-[35px]">
                      <Image
                        src={card.photo}
                        layout="fill"
                        alt={`This is a ${card.industry} industry and this is their logo. Representing job card for ${card.title}`}
                      />
                    </div>
                    <div className="mt-5">
                      <p>{card.intro}</p>
                      <h3 className="mt-3 font-semibold">{card.title}</h3>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400">LOCATION</h4>
                          <p className="font-semibold">{card.location}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">INDUSTRY</h4>
                          <p className="font-semibold">{card.industry}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400 text-end">EQUITY</h4>
                          <p className="font-semibold">{card.equity}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">STIPEND</h4>
                          <p className="font-semibold">{card.stipend}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400">DEADLINE</h4>
                          <p className="font-semibold">{card.deadline}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">ROLE TYPE</h4>
                          <p className="font-semibold">{card.role}</p>
                        </div>
                      </div>
                      <div className="text-center mt-10">
                        <Link
                          className="px-10 py-3 bg-primary rounded-full text-white mx-auto"
                          href={``}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

        </div>
        <div className="carousel w-full overflow-hidden absolute top-0 left-[50%] -translate-x-[50%]">
            <div className="my-10 flex gap-[24px] justify-center items-center">
            {slides[0].map((card, index) => (
                  <div
                    key={index}
                    className={`text-sm w-[278px] p-5 bg-white rounded-xl ${
                     `fadeinitial ${!loaded && 'fadeanimate'}`
                    }`}
                  >
                    <div className="relative w-3/5 h-[35px]">
                      <Image
                        src={card.photo}
                        layout="fill"
                        alt={`This is a ${card.industry} industry and this is their logo. Representing job card for ${card.title}`}
                      />
                    </div>
                    <div className="mt-5">
                      <p>{card.intro}</p>
                      <h3 className="mt-3 font-semibold">{card.title}</h3>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400">LOCATION</h4>
                          <p className="font-semibold">{card.location}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">INDUSTRY</h4>
                          <p className="font-semibold">{card.industry}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400 text-end">EQUITY</h4>
                          <p className="font-semibold">{card.equity}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">STIPEND</h4>
                          <p className="font-semibold">{card.stipend}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex justify-between">
                        <div>
                          <h4 className="text-gray-400">DEADLINE</h4>
                          <p className="font-semibold">{card.deadline}</p>
                        </div>
                        <div>
                          <h4 className="text-gray-400 text-end">ROLE TYPE</h4>
                          <p className="font-semibold">{card.role}</p>
                        </div>
                      </div>
                      <div className="text-center mt-10">
                        <Link
                          className="px-10 py-3 bg-primary rounded-full text-white mx-auto"
                          href={``}
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

        </div>
      </div>
    </div>
  );
};

export default EquityJobs;
