import React from 'react';

export default function Blog_components({ title, description }) {
  return (
    <div className="flex flex-row w-[90vw] lg:w-[75vw] h-[15vh] rounded-lg bg-[#151515]/50 font-padyakke font-thin p-[1vw] lg:h-[18vh]">
      <img src="./logo.svg" alt="error" className="w-[30%] h-auto lg:w-[15%]" />
      <div className="flex flex-col justify-between  overflow-hidden gap-[0.1vh] pt-[1vh] pr-[1vh]">
        <h1 className="text-[3vw] leading-[2vh] md:leading-[3vh] lg:leading-[4vh] lg:text-[2vw]">{title}</h1>
        {/* Ensure proper truncation */}
        <p className="w-full max-w-[full] text-[2vw] md:text-[2.5vw] overflow-hidden text-ellipsis whitespace-nowrap lg:text-[1vw]">
          {description}
        </p>
        <p className="text-[1.5vw] text-right lg:text-[1vw]">12/11/2024</p>
      </div>
    </div>
  );
}
