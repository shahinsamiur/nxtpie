
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from 'keep-react'

export const AccordionComponent = ({title,description}) => {
  return (
    <Accordion flush={true} type="single" collapsible>
      <AccordionItem value="value-1" className=' w-[90vw] flex flex-col text-left leading-[1vh]  font-heading font-thin text-white text-[3vw] lg:text-[1.5vw] '>
        <AccordionAction>
          <AccordionTitle className="first-letter:text-[#7456F1] text-left text-[3.5vw]  font-heading font-thin leading-[4vh]">
            Q. {title}
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent className=' w-[90vw]  font-body_font  px-[5vw] text-white text-[2vw] font-thin leading-[3vh] lg:text-[1vw] lg:px-[2vw] lg:w-[45vw]'>
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
