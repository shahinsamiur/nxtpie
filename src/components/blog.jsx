import React from 'react'
import PulseButton from '../button'
import { Link } from "react-router-dom";
import BlogDetails from './Blog_components'
export default function Blog() {

  const featuresData = [
    {
      id: 1,
      title: "Enhanced Features and New Release Date",
      description: "We wanted to update you on our app’s launch timeline. To ensure the best experience poss.......",
    }
  ];
  



  return (
    <>

      <div id='blog' className='flex flex-col pt-[5vh] lg:py-[20vh] items-center gap-[3vh] w-screen h-[auto] bg-[#000101] font-body_font text-white overflow-auto pb-[10vh]'>


        <h1 className='w-[70vw] text-[7vw]   font-heading leading-snug lg:text-[2vw] lg:w-full lg:text-center lg:leading-tight 
            '>Progress Updates
        </h1>



        <div className='flex flex-col  items-center gap-[2vh] '>

          {featuresData.map((feature, index) => (
            <Link
              to={`/blog/${feature.id}`}>
              <BlogDetails key={index} title={feature.title} description={feature.description} />
            </Link>
          ))}

        </div>




        <PulseButton />
      </div>
    </>
  )
}
