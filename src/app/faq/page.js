import AuxHero from "@/components/sections/aux-hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function FAQ({ className, page, subsection }) {
  return (<>
    <AuxHero title="FAQs" />
    {/* FAQ */}
    <div className={cn("py-20 w-[90%] md:w-[85%] mx-auto container", className)}>
      {/* <div className="text-center mb-15 subheading">Frequently Asked Questions</div> */}
      <div className="grid grid-cols-2 gap-20">
        <div className="relative h-120">
          <Image fill src="/faq.png" alt="Card" className="object-cover object-center" />
        </div>
        <Accordion type="multiple" collapsible="true" defaultValue={['item-1', 'item-2', 'item-3', 'item-4']} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-medium cursor-pointer text-lg/6">
              What types of human resources does Asia Recruitment Nepal supply?
            </AccordionTrigger>
            <AccordionContent className="text-base/6 text-neutral-900">
              We supply skilled, semi-skilled, technical, and professional manpower to meet the specific demands of our clients across various industries globally.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-medium cursor-pointer text-lg/6">
              What is your process for recruiting and deploying workers?
            </AccordionTrigger>
            <AccordionContent className="text-base/6 text-neutral-900">
              Our comprehensive process includes a series of steps: Advertisements, Pre-Screening, Final Interviews, Medical Checkups, Documentation, Pre-Departure Orientation, and finally, Departure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-medium cursor-pointer text-lg/6">
              To which countries do you provide manpower?
            </AccordionTrigger>
            <AccordionContent className="text-base/6 text-neutral-900">
              We primarily provide manpower to Gulf countries such as Saudi Arabia, Qatar, and the U.A.E., and are prepared to send workers to anycountry that provides approved work-permit visas recognized by the Nepal Government.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-medium cursor-pointer text-lg/6">
              How does Asia Recruitment Nepal ensure the quality of its workers?
            </AccordionTrigger>
            <AccordionContent className="text-base/6 text-neutral-900">
              Our workers are highly regarded for their dutiful and loyal nature. We ensure their quality through a rigorous
              process of pre-screening, interviews, and medical checkups to find individuals with the necessary, technical, and physical abilities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </>
  )
}