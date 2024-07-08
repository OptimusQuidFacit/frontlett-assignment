import Link from "next/link";

const Letsbuild = () => {
    return (
        <div className="mx-20 py-10">
            <p className="text-6xl text-center w-2/3 mx-auto">
                Let&apos;s build companies that help everyone succeed
            </p>
            <div className="flex mt-10 items-center justify-center gap-[10px] ">
                <Link className="border-2 border-black rounded-full px-10 py-3" href={'/'}>
                    SINC With Us
                </Link>
                <Link className="bg-primary rounded-full text-white px-10 py-3" href={'/'}>
                    Apply to SIP 1.0
                </Link>
            </div>
        </div>
    );
}

export default Letsbuild;