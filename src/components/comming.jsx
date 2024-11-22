import React from 'react'
import PulseButton from "../button";
// import {daysLeftFromToday} from "./date_calculate"
export default function comming({daysLeft}) {
  return (
    <div className='w-full   bg-[#000101] font-body_font text-white overflow-hidden'>
      <div className='w-full h-screen pt-[5vh] md:pt-[4vw]  justify-center '>
        {/* design */}
        <div className='flex flex-row justify-center  lg:w-screen lg:h-auto'>
          <img src='./cy.svg' alt='err' className='w-[70vw] h-[70vw]  lg:w-[30vw] lg:h-[20vw] ' />
          {/* <div class=" absolute blur-3xl bg-[#2B2B8A] h-[30vw] w-[30vw]  lg:w-[30vw] lg:h-[5vw] lg:top-[30vh]"></div> */}
        </div>


        <div className='flex flex-col justify-center gap-[2.5vh] relative font-heading font-extralight -top-[8vh] lg:z-40 lg:'>
          <h1 className='text-center text-[4vw] tracking-[3vw] lg:text-[2vw] lg:tracking-[2.5vw]'>comming soon </h1>
          <p className='text-center text-[3vw] tracking-[3vw] lg:text-[1.5vw] lg:tracking-[3.5vw]'>Nxtpie</p>
        </div>



        {/* coundown */}
        <div className=' flex flex-col justify-center items-center gap-[2vh] '>
          <div className=' flex flex-row justify-center items-center gap-[0.5vw] '>
            <h1 className='text-[10vw] font-postnobills lg:text-[3vw]'>{daysLeft}</h1>
            <p className='text-[3vw] font-thin lg:text-[1vw]'>Days Left</p>
          </div>
          <p className='text-[3vw] font-padyakke w-[70vw] text-center leading-tight font-thin lg:text-[1vw]'>Join the Revolution in Education—Sign Up Early!</p>
          <PulseButton />
        </div>

      </div>

    </div>
  )
}
