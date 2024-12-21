import React from 'react'

export default function fotter() {
  return (


<footer id='footer' className="bg-[#000101] text-[white] font-thin rounded-lg shadow m-4 font-body_font pt-[10vw]">
    <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-between">
      <span className="text-[3vw] text-center md:text-[2vw] lg:text-[1vw] text-white font-heading">© 2024 <a href="#w" className="hover:underline">Nxtpie</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap justify-center items-center mt-3 lg:gap-[7vw]  font-thin  text-[3vw] sm:mt-0">
        <li>
            <a href="#home" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#features" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">Features</a>
        </li>
        <li>
            <a href="#blog" className="hover:underline text-[2.5vw] md:text-[2vw] lg:text-[1vw] me-4 md:me-6">Blog</a>
        </li>
        <li>
            <a href="#faq" className="hover:underline text-[2.5vw] lg:text-[1vw]">FAQ</a>
        </li>
    </ul>
    </div>
</footer>

  )
}
