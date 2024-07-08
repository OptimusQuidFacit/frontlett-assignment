import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaMedium, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    const columns= [
        {
            name: "Platforms",
            items: ["Kofoundme", "InResidency", "Service Market", 
                    "Founder's School", "Metty", "Grantty", "Boldtell", "Chekwa"]
        },
        {
            name: "Initiatives",
            items: ["Jabi Plains", "Local Pricing Initiative", "Scholarship Program", 
                    "SSMN Pricing", "University STEM", "University InResidency",
                     // eslint-disable-next-line
                    <span>1M Nigeria 
                        <span className=" w-[30px] h-[20px] inline-block relative">
                        <Image className="object-contain" src={'/icons/flag.png'} fill alt="Nigerian Flag"/>
                        </span> 
                        Products
                    </span>, "Founder's Festival"]
        },
        {
            name: "About Us",
            items: ["Who WE Are", "Our People", "Concept Innovations", 
                    "Our Process", "Investors Network", "CSR & Events", 
                    "Career", "Contact"]
        },
        {
            name: "More",
            items: ["Services", "Equity Jobs", "EIR Program", 
                    "Offers", "Innovation News", "FAQ ", 
                    "Blog & Resources", "Press"]
        },
    ]
    return (
        <div className="text-white  box-border">
            <div className="px-20 py-10 my-5 w-1/2">
                <h2 className="text-5xl">
                    Newsletter
                </h2>
                <p className="mt-5">
                    Get the latest about SINC Partners, our startup Incubator program, Portfolio company offerings - straight into your inbox.
                </p>
                <div className="mt-10 relative w-[400px]">
                    <input className="bg-primary border-0 border-[1px] border-white p-3 w-full rounded-full" type="text" name="email" id="email" 
                    placeholder= "Enter your email address" />
                    <button className="text-black border-[1px] border-white absolute right-0 top-0 p-3  bg-white rounded-full" type="submit">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="mt-10  border-y-[1px]">
                <div className="flex gap-5">
                    <div className="w-1/5 flex flex-col ps-20 pe-5 py-10">
                        <div className="relative w-[107px] h-[60px]">
                            <Image src={`/icons/LOGO.png`} fill alt="Company logo"/>
                        </div>
                        <p className="mt-5 font-light">
                            SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%)
                        </p>
                    </div>
                    {
                    columns.map((item, index)=>
                    <div className="pt-10 flex-1 flex flex-col" key={index}>
                        <h3 className="font-semibold">
                            {item.name}
                        </h3>
                        <ul className="list-none mt-5 font-light leading-loose">
                            {
                                item.items.map((item, index)=>
                                    <li key={index}>
                                        <Link href={''}>
                                            {item}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        
                    </div>
                    )
                    
                    }
                    
                    <div className="w-1/4 border-l-[1px] px-10 pt-10">
                        <h3 className="font-semibold">
                            Locations
                        </h3>
                        <ul className="list-none mt-5 font-light">
                                {
                                    ['Abuja, Nigeria', 'Lagos, Nigeria', 
                                        'Philadelphia, USA'].map((item, index)=>
                                        <li key={index}>
                                            <Link href={''}>
                                                {item}
                                            </Link>
                                        </li>
                                    )
                                }
                        </ul>
                        <div className="flex gap-7 items-end">
                            <div className="mt-5">
                                <div className=" relative w-[176px] h-[65px]">
                                        <Image className="rounded-lg" src={`/icons/aplus.png`} fill alt="A plus logo"/>
                                </div>
                                <p className="mt-5">Trusted Business</p>       
                            </div>
                            <div className="">
                                <div className="relative w-[40px] h-[40px]">
                                    <Image fill src={`/icons/whatsaapicon.png`} alt="Whtasaap icon"/>
                                </div>
                                <p className="mt-5">
                                    Chat with Us
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="px-20 my-10 flex items-center justify-between">
                <p className="w-1/2">
                    Guaranteed 2x on your service or cash investment, usually been the first to invest. 
                    <span className="ms-2 font-semibold">
                        Get in early and SINC your guaranty!
                    </span>
                </p>
                <div className="flex w-1/3 gap-3 items-center justify-center">
                    <div className="relative w-[120px] h-[38px]">
                        <Image src={`/icons/gasus.png`} fill alt="GASUS Logo"/>
                    </div>
                    <p className="font-light text-md">
                        We are a business built on the foundation of Christian values and belief
                    </p>
                </div>
            </div>
            <div className="px-20 py-5 flex justify-between">
                <p>
                    &copy;2023 SINC Partners Ltd. All rights reserved
                </p>
                <div>
                    <div className="flex gap-3 justify-center">
                        {
                            ['Privacy Policy', 'Terms of Service', 
                            'Security'].map((link, index)=>
                            <Link className="underline" key={index} href={``}>
                                {link}
                            </Link>
                        )
                        }
                    </div>
                    <p className="text-center mt-2">
                        Web In Nigeria 
                        <span className="ms-1 inline-block relative w-[30px] h-[20px]">
                            <Image src={'/icons/flag.png'} fill alt="Nigerian flag"/>
                        </span>
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href={``}>
                        <FaFacebook className="text-2xl"/>
                    </Link>
                    <Link href={``}> 
                        <FaTwitter className="text-2xl"/>
                    </Link>
                    <Link href={``}>       
                        <FaInstagram className="text-2xl"/>
                    </Link>
                    <Link href={``}> 
                        <FaLinkedin className="text-2xl"/>
                    </Link>
                    <Link href={``}>
                        <FaMedium className="text-2xl"/>
                    </Link>
                    <Link href={``}>
                        <FaYoutube className="text-2xl"/>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Footer;