import React from 'react';
import logo from '../asset/logo_black_with_bg.svg';
export default function Blog_components({ title, description }) {
  return (
    <div className="flex flex-row gap-[3%] w-[90vw] h-[15vh] lg:h-[18vh] lg:gap-[5%] cursor-pointer rounded-lg bg-[#151515]/50 font-padyakke font-thin p-[1vw] lg:w-[70vw] ">
      {/* <div
        className="w-[3.9rem] h-[3.5rem] lg:w-[5.3rem] lg:h-auto  overflow-hidden  rounded-md border-2"
        style={{ backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
      }}
      >
    
      </div> */}
    <img src="/logo.svg" alt="error" className=" lg:w-[8%] " />
      <div className="flex flex-col justify-between lg:w-full overflow-hidden gap-[0.1vh] pt-[1vh] pr-[1vh] ">
        <h1 className="text-[3vw] leading-[2vh] font-heading md:leading-[3vh] h-auto lg:leading-[4vh] lg:text-[1.5vw]">
          {title}
        </h1>
        {/* Ensure proper truncation */}
        <p className="block w-full max-w-[full] text-[2vw] h-[50%] md:text-[2.5vw] font-body_font whitespace-nowrap lg:text-[1vw]">
          {description}
        </p>
        <p className="text-[1.5vw] text-right lg:text-[1vw]">12/11/2024</p>
      </div>
    </div>
  );
}
