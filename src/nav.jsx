import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute w-full bg-[#000101] text-white font-padyakke z-50">
      {/* Header */}
      <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">MyApp</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-[10vw]">
            <a href="#ss" className="hover:text-[#7456F1] text-[1vw]">
              Home
            </a>
            <a href="#ss" className="hover:text-[#7456F1] text-[1vw]">
              About
            </a>
            <a href="#ss" className="hover:text-[#7456F1] text-[1vw]">
              Services
            </a>
            <a href="#ss" className="hover:text-[#7456F1] text-[1vw]">
              Contact
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
        <div className=" relative top-0 left-0 w-full h-[40vh] bg-[#151515] z-50">
          <div className="px-4 space-y-2 ">
            <a
              href="#aa"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#7456F1]"
            >
              Home
            </a>
            <a
              href="#aa"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#7456F1]"
            >
              About
            </a>
            <a
              href="#aa"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#7456F1]"
            >
              Services
            </a>
            <a
              href="#aa"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#7456F1]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
