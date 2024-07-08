type prop ={
    title: string,
    subtitle: string,
}
const SectionHeading = ({title, subtitle} : prop) => {
    return (
        <div>
             <h2 className="my-5 text-5xl text-center font-semibold">
                {title}         
            </h2>
            <p className="my-5 text-md text-center w-4/5 mx-auto">
                {subtitle}
            </p>
        </div>
    );
}

export default SectionHeading;