import React from 'react'
import { AccordionComponent } from './ac'
export default function faq() {

  var data=[
    {
      "question": "How does the AI Teacher work?",
      "answer": "The AI Teacher uses real-time interaction to guide you through lessons. If you don’t understand a topic, it offers examples, alternative explanations, or additional slides to ensure you fully grasp the concept."
    },
    {
      "question": "What is the AI Teacher?",
      "answer": "The AI Teacher is an interactive learning platform designed to teach programming through real-time voice commands, hands-on coding exercises, and engaging presentations."
    },
    {
      "question": "Is the AI Teacher free?",
      "answer": "We offer a free trial to get you started. After that, you can choose from affordable subscription plans tailored to your learning needs."
    },
    {
      "question": "Who is the AI Teacher for?",
      "answer": "The AI Teacher is perfect for students, coding beginners, and professionals looking to enhance their skills. Whether you're new to programming or want to advance, the AI adapts to your level."
    },
    {
      "question": "Do I need coding skills?",
      "answer": "Not at all! The AI Teacher is beginner-friendly and provides step-by-step guidance, making it easy for anyone to start learning programming."
    },
    {
      "question": "What languages are supported?",
      "answer": "Currently, the AI Teacher focuses on Python and JavaScript, with plans to include more topics like digital marketing in the future."
    },
    {
      "question": "How is my progress tracked?",
      "answer": "The AI Teacher tracks your progress, identifies areas for improvement, and customizes lessons to suit your learning pace."
    },
    {
      "question": "Can I interact with it live?",
      "answer": "Yes! The AI Teacher responds to your voice commands, answers your questions, and adjusts the lessons based on your needs."
    },
    {
      "question": "How is my privacy ensured?",
      "answer": "We prioritize your privacy with secure data storage and strict compliance with data protection laws. Your information is always safe with us."
    },
    {
      "question": "How do I access the platform?",
      "answer": "You can access the AI Teacher through our web-based platform (and soon a mobile app). Simply sign up, and you're ready to start learning."
    },
    {
      "question": "What kind of support is offered?",
      "answer": "Our AI Teacher offers real-time assistance during lessons, and our customer support team is available to help with technical or account-related issues."
    }
  ]
  







  return (
    <div id='faq' className='w-screen  h-auto px-[7vw] flex flex-col gap-[8vh] lg:gap-[4vh] lg:justify-center lg:items-center lg:px-[7vw]    overflow-auto'>
      <div>
      <h1 className="font-light font-heading text-center text-white text-[3.5vw] lg:text-[2vw]">Frequently Asked Questions :</h1>
      </div>

      <div className='w-full lg:w-[70vw] h-auto pt-[5vw] text-left  flex flex-col gap-[4vh] md:gap-[5vh] overflow-hidden lg:gap-[4vh] lg:grid lg:text-[3vw]  lg:grid-flow-row lg:grid-cols-2 '>
      {data.map((data, index) => (
            <AccordionComponent key={index} title={data.question} description={data.answer} />
          ))}

      </div>

    </div>
  )
}
