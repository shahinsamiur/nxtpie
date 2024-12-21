import React from 'react'
import PulseButton from '../button'
// import Navbar from '../nav'
export default function home() {
    return (
        <>

            <div id='home' className='flex flex-col justify-center items-center gap-[3vh] w-screen h-screen bg-[#000101] font-heading font-normal text-white overflow-auto'>


                <h1 className='w-[70vw] text-[4vw]  font-heading font-normal leading-snug lg:text-[2.7vw] lg:w-[50vw] lg:leading-tight '>Meet Lili, Your AI Teacher</h1>
                <p className='w-[70vw] text-[3.8vw] font-light font-body_font  leading-[5vh] lg:text-[1.5vw] lg:w-[50vw]'>

                    Lili is an innovative AI teacher designed to make learning simple, engaging,
                    and accessible for everyone. Whether you’re a beginner or looking to master new skills,
                    Lili teaches through real-time voice guidance, interactive examples, and hands-on activities.
                    Struggling with a topic? Lili adapts, providing extra examples or breaking it down further until you fully understand.
                    From programming to future courses like digital marketing, Lili is here to empower learners of all ages and backgrounds.
                    Start your journey with Lili today and experience a smarter, personalized way to learn.


                </p>

                <PulseButton />
            </div>
        </>
    )
}
