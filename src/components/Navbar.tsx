import Link from "next/link";

const Navbar = () => {
    const menuItems=[
        {
        name: "About",
        href: "/about"
        },
        {
        name: "SIP",
        href: "/sip"
        },
        {
        name: "Studio",
        href: "/studio"
        },
        {
        name: "SEEQ",
        href: "/seeq"
        },
        {
        name: "Platforms",
        href: "/platforms"
        },
        {
        name: "Initiatives",
        href: "/initiatives"
        },
        {
        name: "More",
        href: "/more"
        },
]
    return (
      <div className="md:flex justify-between items-center bg-lightgrey px-20 py-7">
        <div className="md:flex mt-5 w-full items-center gap-10">
            <div>
                <p className="border border-black tracking-[0.3em] text-center 
                    p-2 ring-1 ring-inset ring-black text-4xl">
                  SINC  
                </p>
                <p className="tracking-[0.5em] text-center text-lg">
                    PARTNERS
                </p>
            </div>
            <div className="flex justify-center gap-4 items-center">
                {
                    menuItems.map(menu=>
                        <Link  key={menu.name} className="link text-center font-semibold text-xl" href={menu.href}>
                            {menu.name}
                        </Link>
                    )
                }
            </div>
        </div>
        <div className="flex gap-4">
            <Link href={''} className="font-medium rounded-full p-5 bg-secondary text-xl text-white whitespace-nowrap">
                SINC With us
            </Link>
            <Link href={''} className="font-medium rounded-full bg-primary text-xl text-white p-5 whitespace-nowrap">
                Apply to SIP 1.0
            </Link>
        </div>
      </div>
    );
}

export default Navbar;