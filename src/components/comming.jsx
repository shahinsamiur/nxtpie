import React from 'react'
// import Navbar from '../nav'
import PulseButton from "../button"
export default function comming() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#000101]">
      <div className="flex flex-row justify-center">
        <img
          src="./cy.svg"
          alt="err"
          className="w-[70vw] h-[70vw] lg:w-[30vw] lg:h-[20vw]"
        />
      </div>
      <div className="flex flex-col items-center gap-[1vh] relative -top-[8vh] lg:z-40">
        <h1 className="text-center text-[7vw]  tracking-[0.5vw] lg:text-[3vw] lg:tracking-[1.5vw] font-postnobills ">
          Coming Soon
        </h1>
        <p className="text-center text-[3vw] tracking-[2.5vw] lg:text-[2vw] lg:tracking-[3.5vw] font-heading">
          Nxtpie
        </p>
      </div>
      <div className="flex flex-col items-center gap-[2vh]">
        <div className="flex flex-row justify-center items-center gap-[0.5vw]">
          <h1 className="text-[10vw] font-postnobills lg:text-[3vw]">27</h1>
          <p className="text-[2vw] font-thin font-body_font lg:text-[1vw]">Days Left</p>
        </div>
        <p className="text-[3vw] font-body_font font-extralight w-[70vw] text-center leading-tight  lg:text-[1vw]">
          Join the Revolution in Education—Sign Up Early!
        </p>
        <PulseButton />
      </div>
    </div>
  )
}
