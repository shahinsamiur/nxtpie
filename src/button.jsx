import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const PulseButton = () => {
  return (
    <div className=" w-screen h-auto flex justify-center">
      <Link to="/signup">

     
      {/* <div className="bg relative w-[30vw] h-[10vw] rounded-xl
      lg:w-[10vw]
      lg:h-[3vw]
      lg:text-[1vw]
      "></div> */}
      <div className="button cursor-pointer relative w-[30vw] h-[10vw] text-[4vw] flex justify-center items-center font-postnobills rounded-lg 
      
      lg:w-[10vw]
      lg:h-[3vw]
      lg:text-[1vw]
      ">
        Pre Signup now
      </div>
      </Link>
    </div>
  );
};

export default PulseButton;
