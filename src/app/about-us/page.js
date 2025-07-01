import AuxHero from "@/components/sections/aux-hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Page() {

  const steps = [
    { number: 1, title: "Discover Place", active: true },
    { number: 2, title: "Schedule to visit", active: false },
    { number: 3, title: "Hassle free purchase", active: false },
    { number: 4, title: "Buy back guarantee", active: false },
  ]

  return (<>
    <AuxHero title="About Us" />
    {/* People */}
    <div className="w-[90%] mx-auto pt-20">
      <div className="rounded-md relative pt-[5%] md:mb-5 overflow-hidden">
        <Image fill src="/gradient.avif" alt="Gradient background for recruitment company" className="-z-10 opacity-25 object-cover" />
        <div className="grid grid-cols-1 lg:grid-cols-4 mx-auto">
          <div className="col-span-1 w-full relative overflow-hidden md:h-auto h-100">
            <Image fill src="/man.png" className="object-cover object-[0%_5%] -scale-x-100 translate-x-5 md:object-[0%_-15%] md:scale-y-110 md:-scale-x-110 md:translate-x-5" alt="Man" />
          </div>
          <div className="col-span-2 w-full p-10 bg-white md:rounded-t-2xl">
            <div className="gradient-text heading text-center mb-7.5">Managing Team</div>
            <div className="text-center paragraph">
              At the heart of our company is a seasoned leadership team with deep expertise in international recruitment and workforce solutions. Together, they oversee every aspect of our operations — from identifying the right talent in Nepal to ensuring seamless placement and support for employers abroad.
            </div>
            <div className="text-center flex flex-col pt-5 gap-2.5">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="underline cursor-pointer">View message from the CEO</div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you&apos;re
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <div className="btn">Close</div>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="underline cursor-pointer">View message from the Director</div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you&apos;re
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <div className="btn">Close</div>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="col-span-1 w-full relative overflow-hidden md:h-auto h-100">
            <Image fill src="/man.png" className="object-cover object-[0%_-5%] -translate-x-5 md:object-[0%_-15%] md:scale-y-110 md:scale-x-110 md:-translate-x-5" alt="Man" />
          </div>
        </div>
      </div>
      <div className="md:flex w-full justify-between items-center hidden">
        <div className="">
          <div className="text-lg md:text-2xl">Shambhu Dayal Agrawal</div>
          <div className="text-base md:text-lg">Chie Executive Officer</div>
        </div>
        <div className="text-right">
          <div className="text-lg md:text-2xl">Sahil Ansari</div>
          <div className="text-base md:text-lg">Director</div>
        </div>
      </div>
    </div>
    {/* Steps */}
    <div className="w-[90%] mx-auto py-20">
      <h1 className="heading text-center mb-15">
        Peace of mind at <span className="gradient-text">every step</span>
        <br />
        of your journey place
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-15 md:gap-10">
        {steps.map((step, index) => (
          <div key={step.number} className="text-center relative">
            <div className={cn("h-px w-10 bg-neutral-700  absolute -right-0 translate-x-1/1 top-1/3",
              index === steps.length - 1 && "hidden",
              steps.length - 1 !== index && "md:block hidden")}
            />
            <div className="mb-5">
              <div
                className={`size-15 lg:size-20 mx-auto rounded-full flex items-center justify-center text-xl font-medium ${step.active ? "gradient-bg text-white" : "bg-gray-200 text-gray-600"
                  }`}
              >
                {step.number}
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-normal">{step.title}</h3>
          </div>
        ))}
      </div>
    </div>
    {/* Mission and Vision */}
    <div className="py-20 mx-auto w-[90%]">
      <div className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6">Our Mission and Vision</div>
      <div className="mb-15 heading">At Asia Recruitment Nepal, we believe that talent is the key to success in the global marketplace.</div>
      <div className="grid w-full md:grid-cols-2 gap-10">
        <div className="col-span-1 w-[90%] rounded-md overflow-hidden h-80 relative">
          <Image fill src="/hero-5.jpg" alt="Card" className="object-cover" />
        </div>
        <div className="col-span-1 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="subheading gradient-text">Mission</div>
            <div className="paragraph">
              To connect hardworking, skilled and unskilled Nepali talent with reputable employers across the globe — providing reliable, ethical, and seamless recruitment services that benefit both workers and businesses.
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="subheading gradient-text">Vision</div>
            <div className="paragraph">
              To be the leading bridge between Nepal and the international workforce, setting the standard for trust, quality, and integrity in global manpower recruitment.
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
}