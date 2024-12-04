import React from 'react'
import PulseButton from '../button'
// import Navbar from '../nav'
export default function home() {
    return (
        <>
        
        <div id='home' className='flex flex-col justify-center items-center gap-[3vh] w-screen h-screen bg-[#000101] font-heading font-normal text-white overflow-auto'>
           
           
            <h1 className='w-[70vw] text-[4vw]  font-heading font-normal leading-snug lg:text-[2.7vw] lg:w-[50vw] lg:leading-tight '>LiLy: Revolutionizing Learning with AI-Powered Teaching</h1>
            <p className='w-[70vw] text-[3.8vw] font-light font-body_font  leading-[5vh] lg:text-[1.5vw] lg:w-[50vw]'>Elevate your learning with an AI teacher designed for complete understanding.
                Through real-time voice guidance, interactive coding practice, and engaging presentations,
                our AI provides a comprehensive approach to mastering new skills.
                If a topic isn’t clear,
                the AI will offer tailored examples until concepts are fully
                grasped—ensuring every student progresses with confidence</p>

            <PulseButton />
        </div>
        </>
    )
}
