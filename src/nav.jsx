import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full bg-[#000101] text-white font-padyakke z-50">
      {/* Header */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex  items-center ">
            <img src="./logo.svg" alt="error" className="w-[15vw] lg:w-[5vw]" />
            <div className="h-[8vh]  flex  items-end">
              <h3 className="text-[white] text-[4vw] font-thin font-body_font lg:text-[1.5vw]">Nxtpie</h3>
            </div>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-[10vw]">
            <a href="#home" className="hover:text-[#7456F1] font-thin font-body_font text-[1vw]">
              Home
            </a>
            <a href="#features" className="hover:text-[#7456F1] font-thin font-body_font text-[1vw]">
            Features
            </a>

            <a href="#blog" className="hover:text-[#7456F1] font-thin font-body_font text-[1vw]">
            Blog
            </a>

            <a href="#faq" className="hover:text-[#7456F1] font-thin font-body_font text-[1vw]">
            FAQ
            </a>
         
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" relative flex flex-col  items-center justify-center top-0 left-0 w-full h-[40vh] bg-[#000101] z-50">
          <div className="px-4 space-y-2 ">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-heading font-thin hover:text-[#7456F1]"
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-heading font-thin hover:text-[#7456F1]"
            >
              Features
            </a>


            <a
              href="#blog"
              className="block px-3 py-2 rounded-md text-base font-heading font-thin hover:text-[#7456F1]"
            >
              Blog
            </a>


            <a
              href="#faq"
              className="block px-3 py-2 rounded-md text-base font-heading font-thin hover:text-[#7456F1]"
            >
              FAQ
            </a>
      
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
