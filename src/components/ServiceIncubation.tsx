import Link from "next/link";
import {  BsFillDiamondFill, BsFillPentagonFill, BsFillTriangleFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const ServiceIncubation = () => {
    const services=[
        {
            title: <BsFillTriangleFill className="text-4xl text-purple"/>,
            body: "Most early-stage companies and pre-product startups cannot afford professional services especially those who don't have family and friends' network that can support",
        },
        {
            title: <BsFillDiamondFill className="text-4xl text-secondary"/>,
            body: "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
        },
        {
            title: <BsFillPentagonFill className="text-4xl text-purple"/>,
            body: "Young professionals who don't have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return",
        },
    ]
    return (
        <div className="px-20 py-10">
            <h2 className="my-5 text-5xl text-center font-semibold">
                Our Service Incubation Model
            </h2>
            <p className="my-5 text-lg text-center w-4/5 mx-auto">
                The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12-24 months as been first to invest.
            </p>
            <div>
                <h3 className="text-3xl font-semibold my-3">
                    Hypothesis
                </h3>
                <p className="text-lg">
                    Just a few reasons we know its time for this model within the ecosystem
                </p>

                <div className="mt-10 flex gap-[20px] justify-center">
                {
                    services.map((item, index)=>
                        <div key={index} className=" w-[380px] bg-white rounded-xl p-10 h-[280px]">
                            <h4 className="text-xl font-semibold">
                                {item.title}
                            </h4>
                            <p className="text-md mt-5">
                                {item.body}
                            </p>
                        </div>
                    )
                }
            </div>
            <div className="my-10">
                <h3 className=" py-5 text-3xl font-semibold">
                    Case Study
                </h3>
                <p className="text-md">
                    See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time
                </p>
            </div>
            <div className="mt-10 flex gap-4">
                <div className="px-5 py-3 rounded-full bg-white">
                    Service Incubator Equity
                </div>
                <div className="px-5 py-3 rounded-full bg-white">
                    SEEQ Maths Equation
                </div>
                <div className="px-5 py-3 rounded-full bg-white">
                    Value of my Equity Over Time
                </div>
            </div>
            <Link href={``}>
                <div className="mt-10 flex gap-3 justify-center">
                    <p className="underline font-semibold">
                        Become A Service Incubator
                    </p>
                    <span>
                        <FaArrowRight/>
                    </span>
                </div>
            </Link>

            </div>

        </div>
    );
}

export default ServiceIncubation;