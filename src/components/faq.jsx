import React from 'react'
import { AccordionComponent } from './ac'
export default function faq() {

  var data = [
    {
      "question": "What is Lili?",
      "answer": "Lili is an AI-powered teacher that makes learning interactive and personalized, guiding you step-by-step through various topics like programming, digital marketing, and more."
    },
    {
      "question": "How does Lili teach?",
      "answer": "Lili uses real-time voice commands, interactive examples, and hands-on activities to help you learn effectively. If you struggle with a topic, Lili provides additional explanations or examples to ensure you understand."
    },
    {
      "question": "Who can use Lili?",
      "answer": "Lili is designed for everyone—students, professionals, or anyone eager to learn new skills, regardless of their technical expertise."
    },
    {
      "question": "What subjects does Lili cover?",
      "answer": "Currently, Lili focuses on programming languages like Python and JavaScript. We’re expanding to include topics like digital marketing and other in-demand skills."
    },
    {
      "question": "Do I need prior experience to use Lili?",
      "answer": "No! Lili is perfect for beginners and adapts to your learning pace, making it easy for anyone to get started."
    },
    {
      "question": "Is Lili available 24/7?",
      "answer": "Yes, Lili is accessible anytime, allowing you to learn at your own convenience."
    },
    {
      "question": "What makes Lili different from other learning tools?",
      "answer": "Lili focuses on personalized learning, adapting to your needs and offering real-time support to ensure you fully grasp every concept."
    },
    {
      "question": "Is Lili free to use?",
      "answer": "We offer both free and premium plans, so you can start learning without any cost and upgrade for more advanced features as needed."
    }
  ];
  







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
