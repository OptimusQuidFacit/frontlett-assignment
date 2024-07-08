"use client"
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { useState } from "react";
import UnderlineLink from "./UnderlineLink";

const EIR = () => {
    const cards= [
        {
            icon: "/icons/application.png",
            title: "Application and Selection",
            body: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.",
        },
        {
            icon: "/icons/meeting.png",
            title: "Alignment Meeting and Proposal Submission",
            body: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies. Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies.",
        },
        {
            icon: "/icons/agreement.png",
            title: "Negotiation and Agreement",
            body: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements. Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
        },
        {
            icon: "/icons/onboard.png",
            title: "Onboarding and Integration",
            body: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members. Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
        },
        {
            icon: "/icons/checkin.png",
            title: "Regular Check-ins and Evaluations",
            body: "To foster ongoing success, we've established a system for regular check-ins. These sessions will allow us to monitor your progress, gather feedback, and collectively work towards continuous improvement. We appreciate your interest in joining our EIR program and contributing to the vibrant SINC Partners community. Start your application process today and be a part of our journey in shaping the future of innovation.",
        },
    ]
    const [pace, setPace]= useState(0);
    console.log(pace);
    const handleForward=()=>{
       pace <744 && setPace(prev=>(prev + 372))
    }
    const handleBack=()=>{
       pace >0 && setPace(prev=>(prev - 372))
    }
  
    return (
        <div className="ps-20 py-10">
            <div className="pe-20">
                <SectionHeading 
                title="Join Our Entrepreneur In Residence (EIR) Program"
                subtitle="Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each."/>
            </div>
            
            <div className={`w-full mt-5 flex justify-start gap-[32px] overflow-hidden`}>
                {
                    cards.map((card,index)=>
                        <div style={{ transform: `translateX(-${pace}px)` }} key={index} className={`p-5 rounded-xl bg-white min-w-[340px] h-[460px]`}>
                            <div className="relative h-[60px] w-[60px]">
                                <Image src={card.icon} fill alt={card.title} className="object-contain"/>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold">
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-md">
                                    {card.body}
                                </p>
                            </div>
                        </div>
                    )
                }

            </div>
            <UnderlineLink text="Support the Future"/>
            <div className="mt-5 flex gap-5 justify-center">
                <span onClick={handleBack}>
                    <IoArrowBackCircleOutline className="text-[100px]"/>
                </span>
                <span onClick={handleForward}>
                    <IoArrowForwardCircleOutline className="text-[100px]"/>
                </span>
            </div>
        </div>
    );
}

export default EIR;