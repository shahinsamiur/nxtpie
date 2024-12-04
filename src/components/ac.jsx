
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
      <AccordionItem value="value-1" className=' w-[90vw] flex flex-col text-left lg:gap-[2vw] leading-[1vh]  font-heading font-light text-white text-[3vw] lg:text-[1.5vw] '>
        <AccordionAction>
          <AccordionTitle className="first-letter:text-[#7456F1] text-left text-[3.5vw] md:text-[2.5vw] lg:text-[1.5vw]  font-heading font-light leading-[4vh] lg:w-[35vw]">
            Q. {title}
          </AccordionTitle>
          <AccordionIcon />
        </AccordionAction>
        <AccordionContent className=' w-[90vw]  font-heading  px-[5vw] text-white text-[2vw] font-light leading-[3vh] lg:text-[1vw] lg:leading-[1.5vw] lg:px-[1vw] lg:w-[35vw]'>
          {description}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
