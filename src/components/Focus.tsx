const Focus = () => {
    const focus=[
        {
            no: "01",
            text: "Business Support & Incubation",
            color:'bg-primary'
        },
        {
            no: "02",
            text: "Business Support & Incubation",
            color: "bg-orange"
        },
        {
            no: "03",
            text: "Marketplace & Crowdsourcing",
            color: "bg-purple"
        },
        {
            no: "04",
            text: "Aggregation & Shared Economy",
            color: "bg-secondary"
        },
        {
            no: "05",
            text: "Decentralized Economy & Digital Assets",
            color: "bg-purple"
        },
    ]
    return (
        <div className="px-20 py-10 ">
            <h2 className="font-semibold text-5xl py-5 text-center">
                Our Area of Focus
            </h2>
            <p className="text-xl py-5 text-center mx-auto w-4/5">
                We have proprietary concept innovations that will support the startup ecosystem, support solution-providers entrepreneurs and ultimately help democratize success;
            </p>
            <div className="flex text-xl">
                {
                    focus.map(item=>
                        <div key={item.no} className={`${item.color} flex-1 h-[200px] flex flex-col  p-10 text-white`}>
                           <p>{item.no}</p> 
                           <p className="mt-auto">{item.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Focus;