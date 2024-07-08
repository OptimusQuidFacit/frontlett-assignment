import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Network = () => {
    return (
        <div className="px-20 py-10">
            <h2 className="leading-relaxed mx-auto text-center text-5xl font-semibold w-3/5">
                Network of builders helping startup scale
            </h2>
            <div className="mt-10 flex flex-row-reverse gap-5 ">
                <div className="bg-white rounded-xl flex-1 p-5 flex flex-col h-[400px]">
                    <h3 className="mb-5 font-medium text-xl leading-relaxed">
                        Access funding after your mvp is validated                     
                    </h3>
                    <div className="leading-relaxed text-xl">
                        Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
                    <p className="font-medium text-xl mt-3 leading-relaxed">
                        Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months
                    </p>
                    </div>
                    <div className='text-xl font-bold flex items-center mt-auto'>
                        <Link className="underline" href={``}>
                            Learn More
                        </Link>
                        <span className=" ms-3">
                            <FaArrowRight/>
                        </span>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex-1 p-5 flex flex-col h-[400px]">
                    <h3 className=" font-medium text-xl leading-relaxed mb-5">
                        Work with Service Incubators to expedite your time-to-market 
                    </h3>
                    <p className="leading-relaxed text-xl">
                        Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
                    </p>
                    <p className="font-medium text-xl mt-3 leading-relaxed">
                        For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.
                    </p>
                    <div className='text-xl font-bold flex items-center mt-auto'>
                        <Link className="underline" href={``}>
                            Learn More
                        </Link>
                        <span className=" ms-3">
                            <FaArrowRight/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Network;