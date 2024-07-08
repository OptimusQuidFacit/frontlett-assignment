import Link from "next/link";
import SectionHeading from "./SectionHeading";

const InvestorsNetwork = () => {

    const items2 = [
        {
            title: "Deal 5",
            body: `
                ✓ Pre-seed Stage: $1.5M for 10% Equity
                ✓ Expected Revenue at This Stage: $50k+/mth
                ✓ Duration of Raise: 6-18mths
                ✓ Who Can Invest: Angel Investors, VCs, PE, Institutions `
        },
        {
            title: "Deal 6",
            body: `
                ✓ Seed Stage: $7.5M for 20% Equity
                ✓ Expected Revenue at This Stage: $250k+/mth
                ✓ Duration of Raise: 12-24mths
                ✓ Who Can Invest: VCs, PE, Institutions `
        },
        {
            title: "Deal 7",
            body: `
                ✓ IPO Stage: $1.5B for 20% Equity
                ✓ Expected Revenue at This Stage: $1M+/mth
                ✓ Duration of Raise: 18-36mths
                ✓ Who Can Invest: The Public`
        },
        {
            text: `Work with Service Incubators (SINC) to expedite your time to market`,
            buttonText: "Join SINC Network"
        }
    ]
    const items = [
        {
            title: "Deal 1",
            body: `
                ✓ Idea Stage: $5k for 5% Equity
                ✓ Expected Revenue at This Stage: $0/mth
                ✓ Duration of Raise: 1mth
                ✓ Who Can Invest: People with Domain Expertise and Advisors`
        },
        {
            title: "Deal 2",
            body: `
                ✓ Build Stage: $25k worth of service for 10%      Equity
                ✓ Expected Revenue at This Stage: $100+/mth
                ✓ Duration of Raise: 1-3mths 
                ✓ Who Can Invest: Developers, Engineers, Growth Marketers`
        },
        {
            title: "Deal 3",
            body: `
                ✓ Validation Stage: $50k for 5% Equity
                ✓ Expected Revenue at This Stage: $1k+/mth
                ✓ Duration of Raise: 3-6mths
                ✓ Who Can Invest: Everyone `
        },
        {
            title: "Deal 4",
            body: `
                ✓ Traction Stage: $125k worth of service for 5% Equity
                ✓ Expected Revenue at This Stage: $5k+/mth
                ✓ Duration of Raise: 6-12mths
                ✓ Who Can Invest: Media, Influencers, Celebrity, Platform Owners`
        },
    ]
    return (
        <div className="px-20 py-10">
            <SectionHeading title="SINC Investors Network"
            subtitle={`Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest.`}/>
            <p className="text-md w-4/5 mx-auto text-center">
                <span className="font-semibold me-2">
                Disclaimer: 
                </span>
                These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest
            </p>
            <div className="mt-10 font-semibold">
                <h3 className="text-2xl my-10">
                    Micro Angel Investors & Service incubators (Invest from $500 & above)
                </h3>
                <div className="flex">

                {
                    items.map((item, index)=>
                        <div key={item.title} className={`flex-1 border-y-2 ${index >0&&"border-l-2"} p-5 `}>
                            <h4 className="text-lg font-semibold">
                                {item.title}
                            </h4>
                            <div className="mt-3 text-md font-light">
                                {item.body.split(/\n/).map(paragraph=>
                                    <>
                                    {paragraph.length>3 &&    
                                    <div>
                                        <span>
                                            {`${paragraph.split(':')[0]}: `}
                                        </span>
                                        <span className="font-semibold">
                                            {paragraph.split(':')[1]}
                                        </span>
                                    </div>
                                        }
                                    </>
                                )}
                            </div>
                        </div>
                    )
                }
                </div>
                {/* second table */}
                <h3 className="text-2xl my-10">
                    Angel Investors & Venture Capital (Invest from $50k and above)                 
                </h3>
                <div className="flex">
                {
                    items2.map((item, index)=>
                        <div key={item.title} className={`flex-1 border-y-2 ${index >0&&"border-l-2"} p-5 `}>
                            {
                                index<3? 
                            <>
                                
                            <h4 className="text-lg font-semibold">
                                {item.title}
                            </h4>
                            <div className="mt-3 text-md font-light">
                                {item?.body?.split(/\n/).map(paragraph=>
                                    <>
                                    {paragraph.length>3 &&    
                                    <div>
                                        <span>
                                            {`${paragraph.split(':')[0]}: `}
                                        </span>
                                        <span className="font-semibold">
                                            {paragraph.split(':')[1]}
                                        </span>
                                    </div>
                                        }
                                    </>
                                )}
                            </div>
                        </>:
                        <div className="flex flex-col justify-around bg-[#303030] m-1 p-5 font-light h-full">
                            <p className="text-white text-md">
                                {item.text}
                            </p>
                            <div className="text-center">
                                <Link  href={``}>
                                    <span className="bg-gray-700 text-center p-3 rounded-full text-white">
                                        {item.buttonText}
                                    </span>
                                </Link>
                            </div>

                        </div>

                            }
                        </div>
                    )
                }
                </div>

            </div>       
        </div>
    );
}

export default InvestorsNetwork;