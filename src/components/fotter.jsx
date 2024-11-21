import React from 'react'

export default function fotter() {
  return (


<footer className="bg-[#000101] text-[#7456F1] font-thin rounded-lg shadow m-4 font-body_font pt-[10vw]">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between">
      <span className="text-[3vw] text-center md:text-[2vw] lg:text-[1vw] text-white font-heading">© 2024 <a href="#w" className="hover:underline">Nxtpie</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap justify-center items-center mt-3  font-thin  text-[3vw] sm:mt-0">
        <li>
            <a href="#s" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#s" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#s" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#s" className="hover:underline text-[2.5vw] lg:text-[1vw]">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  )
}
