import AuxHero from "@/components/sections/aux-hero"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function FAQ({ className, page, subsection }) {
  return (<>
    <AuxHero title="FAQs" />
    {/* FAQ */}
    <div className={cn("py-20 w-[90%] mx-auto max-w-7xl", className)}>
      <div className="mb-8 subheading text-start">Frequently Asked Questions</div>
      <Accordion type="multiple" collapsible="true" defaultValue={page && ["item-1", "item-2", "item-3"] || null} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="cursor-pointer text-lg/6 font-normal">What diaper size is right for my baby?</AccordionTrigger>
          <AccordionContent className="text-base/6">
            Babies come in all shapes and sizes, which is why our diaper size range is based on weight. Check out our diaper size guide for a recommendation, and to read our top tips on getting the right fit. Tip: If you&apos;re between sizes, try the smaller size first!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="cursor-pointer text-lg/6 font-normal">Are your products safe on sensitive skin?</AccordionTrigger>
          <AccordionContent className="text-base/6">
            Absolutely! Dermatologist tested safe on sensitive skin, Rascals Premium Diapers, Training Pants & Wipes are made with Zero Nasties and contain 0% lotions, latex or fragrance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="cursor-pointer text-lg/6 font-normal">Do you offer sample packs of diapers and training pants?</AccordionTrigger>
          <AccordionContent className="text-base/6">
            We know parents love to try new diapers before switching, which is why we try to offer free samples for new customers. While we don&apos;t currently have individually packaged samples, keep an eye on our socials or website for future updates.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* {!page && <Link href="/faq" className="mx-auto btn">Learn More <ArrowRight size={16} /></Link>} */}
    </div>
  </>
  )
}