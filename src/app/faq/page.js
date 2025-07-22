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
        <Accordion type="multiple" collapsible="true" defaultValue={["item-1"]} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-normal cursor-pointer text-lg/6">What diaper size is right for my baby?</AccordionTrigger>
            <AccordionContent className="text-base/6">
              Babies come in all shapes and sizes, which is why our diaper size range is based on weight. Check out our diaper size guide for a recommendation, and to read our top tips on getting the right fit. Tip: If you&apos;re between sizes, try the smaller size first!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-normal cursor-pointer text-lg/6">Are your products safe on sensitive skin?</AccordionTrigger>
            <AccordionContent className="text-base/6">
              Absolutely! Dermatologist tested safe on sensitive skin, Rascals Premium Diapers, Training Pants & Wipes are made with Zero Nasties and contain 0% lotions, latex or fragrance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-normal cursor-pointer text-lg/6">Do you offer sample packs of diapers and training pants?</AccordionTrigger>
            <AccordionContent className="text-base/6">
              We know parents love to try new diapers before switching, which is why we try to offer free samples for new customers. While we don&apos;t currently have individually packaged samples, keep an eye on our socials or website for future updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </>
  )
}