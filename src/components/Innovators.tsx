const Innovators = () => {
    const innovations= [
        {
            title: "Service Incubator",
            body: "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
        },
        {
            title: "Virtualting",
            body: "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
        },
        {
            title: "Diiming",
            body: "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice",
        },
    ]
    return (
        <div className="px-20 py-10 text-center">
            <h2 className="py-10 text-5xl font-semibold">
                Our Concept Innovations
            </h2>
            <p className="pb-10 text-lg">
                We have proprietary concept innovations that will support the startup ecosystem, support solution-providers entrepreneurs and ultimately help democratize success;
            </p>
            <div className="flex justify-between">
                {
                    innovations.map(item=>
                        <div key={item.title} className=" w-[350px] bg-white rounded-xl p-10 min-h-[200px]">
                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-lg mt-10">
                                {item.body}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Innovators;