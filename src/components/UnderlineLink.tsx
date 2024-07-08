import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const UnderlineLink = ({text}:{text:string}) => {
    return (
        <div className="mt-4 text-center flex justify-center gap-3">
                <Link className="font-medium underline" href={``}>
                    {text}
                </Link>
                <span>
                    <FaArrowRight/>
                </span>
            </div>
    );
}

export default UnderlineLink;