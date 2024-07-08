"use client"

import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const NewsLetter = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      setTimeout(()=>
        setShow(true)
    , 2000) 
    //   return () => {
    //     second
    //   }
    // eslint-disable-next-line
    }, [])
    
    return (
    <>
    {
        show&&
        <div style={{position:"fixed", right:0, bottom:0 }} className="w-1/3 bg-primary text-white p-10">
            <div className="flex justify-between items-center">
                <h2 className="text-5xl">
                        Newsletter
                </h2>
                <div>
                    <IoMdClose className="text-5xl cursor-pointer border-white hover:border-2 rounded-lg p-2" onClick={()=>setShow(false)} />

                </div>
            </div>
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
        }
        </>
    );
}

export default NewsLetter;