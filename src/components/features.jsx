import React from 'react';
import FeaturesCom from './features_com';

const featuresData = [
  { 
    header: "Real-Time Voice Guidance",
    description: "Receive instant voice instructions and answers to your queries, making every step of the learning process smooth and interactive."
  },
  { 
    header: "Immediate Feedback & Progress Tracking",
    description: "Track your progress and get real-time feedback to improve your understanding and skills efficiently."
  },
  { 
    header: "Hands-On Coding with Feedback",
    description: "Write and test code directly, with immediate feedback to help you correct mistakes and learn effectively."
  },
  { 
    header: "Learn Anytime, Anywhere",
    description: "Access lessons and resources on-demand, so you can learn at your own pace, whenever and wherever it suits you."
  },
  { 
    header: "Engaging Visual Presentations",
    description: "Experience dynamic slides and visuals that simplify complex concepts and make learning enjoyable."
  },
  { 
    header: "Skill Assessments",
    description: "Evaluate your knowledge with quizzes and tasks tailored to test and strengthen your skills."
  },
  { 
    header: "Multiple Examples for Clarity",
    description: "Benefit from various examples and case studies to ensure complete understanding of each topic."
  },
  { 
    header: "Voice Command Navigation",
    description: "Control your learning journey using voice commands, keeping the experience hands-free and intuitive."
  },
  { 
    header: "Customized Learning Paths",
    description: "Follow a personalized curriculum designed to suit your unique learning goals and preferences."
  },
  { 
    header: "Personalized Support",
    description: "Receive one-on-one assistance tailored to your needs, ensuring a seamless and efficient learning experience."
  },
];


export default function Features() {
  return (
    <div id='features' className="w-screen h-auto bg-[#000101] flex flex-col gap-[5vh] justify-center items-center ">
      <h1 className="font-light font-heading text-white  text-2xl lg:text-[2vw]">Why Choose LiLy:</h1>
      <div className="w-[90vw]  py-[2vh] h-auto flex lg:grid lg:grid-flow-row lg:grid-cols-2 lg:gap-[3vw] flex-col items-center gap-[4vh] lg:gap-y-[8vh] font-thin  lg:w-[70vw] lg:justify-center">
        {featuresData.map((feature, index) => (
          <FeaturesCom key={index} header={feature.header} description={feature.description} />
        ))}
      </div>
    </div>
  );
}
