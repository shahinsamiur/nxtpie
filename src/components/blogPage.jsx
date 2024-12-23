// src/BlogDetails.js
import React from "react";
import { useParams,Link } from "react-router-dom";


const BlogDetails = () => {


  const blogs = [{
    id: 1,
    title: "Enhanced Features and New Release Date",
    description:
      "We want to share an important update regarding our app’s release timeline. Originally scheduled to launch this month, we’ve decided to extend the timeline by one month to ensure we deliver the best possible experience for our users. This extra time will allow us to enhance key features, improve overall performance, and thoroughly test the app to ensure it meets our high standards. While we understand this may be disappointing, we believe this decision will ultimately result in a better product. Thank you for your patience and support as we work hard to make this app exceptional.",
  }]
  








  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="p-6 bg-red-100 rounded shadow">
        <h2 className="text-2xl font-semibold text-red-600">Blog not found!</h2>
      </div>
    );
  }

  return (
    <div className="p-6 h-screen bg-[#000101] flex flex-col items-center justify-center  text-white">
      <h2 className="text-[6vw] md:text-[5vw] lg:text-[3vw] text-[#7456F1] w-[80%] font-heading mb-4">{blog.title}</h2>
      <p className="text-[4vw] md:text-[3vw] lg:text-[2vw] lg:leading-[3vw] md:leading-[4vw] leading-[8vw] flex-1 w-[80%]">{blog.description}</p>
      <Link to="/" className="bg-[#7456F1] w-[70%] md:w-[50%] h-[8vw] md:h-[5vw] lg:w-[30%] lg:h-[3vw]  rounded-md flex items-center justify-center font-body_font">
      <button >Back</button>
      </Link>
    </div>
  );
};

export {BlogDetails} ;
