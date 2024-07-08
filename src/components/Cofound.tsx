import SectionHeading from "./SectionHeading";

const Cofound = () => {
    const points= [
        {
            color: "bg-primary",
            title:"We Ideate",
            body: "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions of the product that we take to the market."
        },
        {
            color: "bg-orange",
            title:"You Validate",
            body: "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions "
        },
        {
            color: "bg-purple",
            title:"You Co-own",
            body: "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture."
        },
    ];
    return (
        <div className="px-20 py-10">
           <SectionHeading title="Co-found With Us" 
           subtitle="We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed "/>
            <div className="flex gap-[24px]">
                {
                    points.map((point, index)=>
                       <div key={index} className="rounded-xl bg-white flex-1 p-10">
                            <span className={`px-[20px] py-[15px] ${point.color} text-white rounded-[50%]`}>                               
                                    {index+1}
                            </span>
                            <div className="mt-7">
                                <h3 className="font-semibold text-lg">
                                    {point.title}
                                </h3>
                                <p className="text-md">
                                    {point.body}
                                </p>
                            </div>
                       </div> 
                    )
                }
            </div>
        </div>
    );
}

export default Cofound;