import React from 'react';
import FeaturesCom from './features_com';

const featuresData = [
  { header: "Real-Time Voice Guidance" },
  { header: "Immediate Feedback & Progress Tracking" },
  { header: "Hands-On Coding with Feedback" },
  { header: "Learn Anytime, Anywhere" },
  { header: "Engaging Visual Presentations" },
  { header: "Skill Assessments" },
  { header: "Multiple Examples for Clarity" },
  { header: "Voice Command Navigation" },
  { header: "Customized Learning Paths" },
  { header: "Personalized Support" },
];

export default function Features() {
  return (
    <div className="w-screen h-screen bg-[#000101] flex flex-col gap-[5vh] justify-center items-center overflow-y-auto">
      <h1 className="font-thin font-heading text-white  text-2xl">Why Choose LiLy:</h1>
      <div className="w-[90vw] flex flex-col items-center gap-[1vh] font-thin lg:gap-[1vh] lg:w-[70vw] lg:justify-center">
        {featuresData.map((feature, index) => (
          <FeaturesCom key={index} header={feature.header} />
        ))}
      </div>
    </div>
  );
}
