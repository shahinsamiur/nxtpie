import React from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
export default function FeaturesCom({header,P}) {
    return (
        <div className='w-[80vw] h-auto flex  flex-col gap-[0.1vh] text-white'>
            <div className='w-auto h-auto  flex flex- gap-[1vh]  justify-start items-start lg:gap-[0.5vh]'>
                <IoCheckmarkDoneCircle className='text-[#7456F1] lg:text-[2vw] '/> 
                <h1 className='font-thin  font-heading text-[3vw] w-full h-full lg:text-[1vw]'>{header}</h1>
                {/* <div className='h-[0.1vh] -mt-[0.4vh] bg-gradient-to-r from-[#7456F1] to-[rgba(255,255,255,0.08)] w-full'></div> */}
            </div>
            {/* <p className='font-thin font-padyakke text-[2.5vw]  leading-tight'>
                {P}
            </p> */}
        </div>
    )
}
