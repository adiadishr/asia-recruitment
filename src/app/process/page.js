import RoundedSubheading from "@/components/reusable/rounded-subheading";
import AuxHero from "@/components/sections/aux-hero";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Page() {

  const steps = [
    { number: 1, title: "Advertisements", active: true },
    { number: 2, title: "Pre Screening", active: false },
    { number: 3, title: "Final Interview", active: false },
    { number: 4, title: "Medical Checkup", active: false },
    { number: 5, title: "Documentation Head", active: false },
    { number: 6, title: "Pre-Departure Orientation", active: false },
    { number: 7, title: "Departure", active: false },
  ]

  return (<>
    <AuxHero title="Process" />
    {/* Steps */}
    <div className="w-[90%] md:w-[85%] container mx-auto py-20 md:pt-30">
      <h1 className="mb-10 text-center heading md:mb-15">
        Peace of mind at <span className="gradient-text">every step</span>
        <br />
        of your journey place
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-5 sm:gap-15 md:gap-10">
        {steps.map((step, index) => (
          <div key={step.number} className="relative text-center">
            {/* <div className={cn("h-px w-10 bg-neutral-700  absolute -right-0 translate-x-1/1 top-1/3",
              index === steps.length - 1 && "hidden",
              steps.length - 1 !== index && "md:block hidden")}
            /> */}
            <div className="mb-5">
              <div
                className={`size-15 lg:size-20 mx-auto rounded-full flex items-center justify-center text-xl font-medium ${step.active ? "gradient-bg text-white" : "bg-gray-200 text-gray-600"
                  }`}
              >
                {step.number}
              </div>
            </div>
            <h3 className="font-normal sm:text-lg md:text-xl">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
    {/* Some Text */}
    {/* <div className="w-[90%] md:w-[85%] container mx-auto pb-20">
      In our endeavor to find perfect candidates and officer candidates a good career opportunity based on past achievements and demonstrated potential we have a rigorous selection process which can be adopted to selection at various levels.
      We are authorized by the Government of Nepal to recruit employees for employment on behalf of overseas employers against vacancies identified by hem.
    </div> */}
    {/* Requirements */}
    <div className="w-[90%] md:w-[85%] container mx-auto pb-20">
      <RoundedSubheading className="mb-10">Requirements</RoundedSubheading>
      <div className="grid md:grid-cols-2 gap-15 md:gap-20">
        <div className="relative p-10 overflow-hidden text-white md:pr-20 text-4xl h-max rounded-2xl">
          What documents do you need?
          <Image fill src="/gradient.avif" alt="Gradient" className="object-cover object-center -z-10" />
        </div>
        <ol className="list-decimal flex flex-col gap-2.5">
          <li className="font-normal sm:text-lg md:text-xl">Demand Letter</li>
          <li className="font-normal sm:text-lg md:text-xl">Power of Attorney</li>
          <li className="font-normal sm:text-lg md:text-xl">Agreement of Management Mobilization</li>
          <li className="font-normal sm:text-lg md:text-xl">Inter Party Agreement</li>
          <li className="font-normal sm:text-lg md:text-xl">Employment Agreement</li>
          <li className="font-normal sm:text-lg md:text-xl">Guarantee Letter</li>
        </ol>
      </div>
    </div>
  </>)
}