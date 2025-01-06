import Comming from "./components/comming"
import Navbar from "./nav";
import Home from "./components/home"
import Features from "./components/features"
import { daysLeftFromToday } from "./date_calculate"
import Blog from "./components/blog"
import Faq from "./components/faq";
import Fotter from "./components/fotter";
import { useLayoutEffect, useState } from "react";
import "./App.css"
const App = () => {
  const [daysLeft, setdaysLeft] = useState(null)
  useLayoutEffect(() => {
    setdaysLeft(daysLeftFromToday("20/1/2025")) // DD/MM/YYYY


  }, [])


  return (
    <div className="scroll-smooth w-[100vw]  h-auto overflow-auto bg-[#000101] text-white no-scrollbar">
      <Navbar />
      <div className=" w-full h-screen   text-black text-2xl font-bold pt-[10vh]">


        <div className=" w-full h-[100vh] bg-[#000101]">
          <Comming daysLeft={daysLeft} />
          <Home />
          <Features />
          < Blog />
          <Faq />
          < Fotter />
        </div>


      </div>




    </div>
  );
};
export default App;