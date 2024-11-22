import React from 'react'
// import { IoCheckmarkDoneCircle } from "react-icons/io5";
export default function FeaturesCom({header,description}) {
    return (
        <div  className='w-[80vw] h-10vh  flex  flex-col gap-[1vh] text-white lg:w-[30vw] lg:gap-[2vh]'>
            <div className='w-full h-auto  flex flex-col gap-[0.1vh]  justify-start items-start lg:gap-[1vh]'>
                {/* <IoCheckmarkDoneCircle className='text-[#7456F1] lg:text-[2vw] '/>  */}
                <h1 className='font-thin   font-heading text-[3vw] w-full h-[4vh]  md:text-[2.5vw] lg:text-[1.1vw] '>{header}</h1>
                <div className='h-[0.2vh]  bg-gradient-to-r from-[#7456F1] to-[rgba(255,255,255,0.08)] w-full '></div>
            </div>
            <p className='font-thin font-body_font text-[2.5vw]  h-[4vh] md:text-[2vw] leading-tight lg:text-[1vw]'>
                {description}
            </p>
        </div>
    )
}
