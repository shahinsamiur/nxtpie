import React from 'react';
import FeaturesCom from './features_com';

const featuresData = [
  { header: "Real-Time Voice Guidance" ,
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

  },
  { header: "Immediate Feedback & Progress Tracking",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Hands-On Coding with Feedback" ,
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

  },
  { header: "Learn Anytime, Anywhere",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Engaging Visual Presentations" ,
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

  },
  { header: "Skill Assessments",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Multiple Examples for Clarity",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Voice Command Navigation",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Customized Learning Paths",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
  { header: "Personalized Support",
    description: "Get instant voice support to guide you through each lesson, making learning feel natural and interactive."

   },
];

export default function Features() {
  return (
    <div id='features' className="w-screen h-auto bg-[#000101] flex flex-col gap-[5vh] justify-center items-center ">
      <h1 className="font-thin font-heading text-white  text-2xl lg:text-[2vw]">Why Choose LiLy:</h1>
      <div className="w-[90vw]  py-[2vh] h-auto flex lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-[3vw] flex-col items-center gap-[4vh] lg:gap-y-[8vh] font-thin  lg:w-[70vw] lg:justify-center">
        {featuresData.map((feature, index) => (
          <FeaturesCom key={index} header={feature.header} description={feature.description} />
        ))}
      </div>
    </div>
  );
}
