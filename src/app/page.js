import FAQ from "@/components/sections/faqs";
import { Steps } from "@/components/sections/steps";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (<>
    {/* Hero */}
    <div className="p-1">
      <div className="relative flex flex-col justify-center w-full h-[90dvh] p-4 md:h-[calc(100dvh-8px)] px-8 overflow-hidden text-white rounded-xl">
        <Image data-aos='zoom-in' className="object-cover -z-10 scale-x-[1] md:object-[0%_0%]" src="/pexels.jpg" fill alt="Background" />
        <div className="absolute right-0 top-1/2 text-xs rotate-90">Scroll down to see more</div>
        <div data-aos='zoom-in' className="absolute inset-0 w-full h-full bg-black/50 -z-10"></div>
        <div data-aos='fade-down' data-aos-delay='150' className="relative mx-auto mb-8 size-24">
          <Image
            fill
            alt="logo"
            className="object-contain saturate-0 brightness-200"
            src="/logo.png"
          />
        </div>
        <div data-aos='fade-down' data-aos-delay='250' className="text-center headline">
          Matching Talent,<br />With Opportunity
        </div>
        <div className="absolute bottom-0 flex items-center justify-between w-full py-8 px-[5%] translate-x-[-2.5%]">
          <div>A Forbes Best Recruitment Company <br /> & Trusted Partner <span className="font-bold ">In Your Success</span></div>
          <div className="relative flex items-center justify-center p-4 overflow-hidden text-black bg-white rounded-full hover:animate-spin">
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </div>
    {/* About */}
    <div className="container w-[90%] py-20 mx-auto">
      <div className="relative flex flex-col w-full h-full lg:flex-row gap-x-12 gap-y-12">
        {/* 1st Sibling */}
        <div className="order-2 basis-full lg:basis-1/2 lg:order-1">
          <div data-aos='fade' className="relative w-full overflow-hidden h-96 md:h-[calc(100dvh-90px)] rounded-2xl lg:rounded-4xl">
            <Image className="object-cover scale-x-[-1] object-[0%_0%]" src="/pexels.jpg" fill alt="Background" />
          </div>
        </div>
        {/* 2nd Sibling */}
        <div className="flex flex-col order-1 lg:justify-center lg:basis-1/2 basis-full lg:order-2">
          <div data-aos='fade-down' className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6">About Us</div>
          <div data-aos='fade-down' className="mb-8 heading">Empowering Global Workforce with <span className="gradient-text">Skilled Nepalese</span> Talent</div>
          <div data-aos='fade-down' data-aos-offset='-100' className="mb-3 text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
          <div data-aos='fade-down' data-aos-offset='-100' className="text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
        </div>
      </div>
    </div>
    {/* Services */}
    <div className="relative py-20 overflow-hidden">
      <Image fill className="absolute inset-0 object-cover -z-10" src="/gradient.avif" alt="Gradient background for recruitment company" />
      <div data-aos='flip-up' className="mb-10 text-left w-[90%] md:w-[85%] mx-auto text-white heading">
        What jobs do we provide?
      </div>
      <div className="mx-auto w-[90%] md:w-[85%] text-white grid grid-cols-2 lg:grid-cols-3 gap-8 tracking-tight">
        <div className="hover:underline cursor-default">Accounting and finance jobs</div>
        <div className="hover:underline cursor-default">Construction jobs</div>
        <div className="hover:underline cursor-default">Tech / IT jobs</div>
        <div className="hover:underline cursor-default">Sustainability jobs</div>
        <div className="hover:underline cursor-default">Property and facilities management jobs</div>
        <div className="hover:underline cursor-default">Engineering jobs</div>
        <div className="hover:underline cursor-default">Human resources jobs</div>
        <div className="hover:underline cursor-default">Life sciences jobs</div>
        <div className="hover:underline cursor-default">Marketing and digital jobs</div>
      </div>
    </div>
    {/* Why Nepalese */}
    <div className="container w-[90%] py-20 mx-auto" >
      <div className="mb-4 text-center heading">So, <span className="gradient-text">why</span> hire from Nepal?</div>
      <div className="max-w-3xl mx-auto mb-10 text-center md:text-lg/7">Over the past one and a half decade, an increasing number of employers from different countries are showing their keen interest in hiring Professionals from Nepal.</div>
      <div className="btn mb-20 mx-auto">Learn More</div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-1.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">01</div>
            <div className="">Nepali workers are eminent for their hard work, high sense of responsibility and discipline.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">02</div>
            <div className="">Nepali professionals are known for their strong work ethic and devotion to their duties.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-3.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">03</div>
            <div className="">Procedures and formalities for recruiting Nepali employees are simple.</div>
          </div>
        </div>
      </div>
    </div>
    {/* Blogs */}
    <div className="pb-20 w-[90%] mx-auto">
      <div className="mb-8 text-3xl tracking-tight">Featured Articles</div>
      <div className="grid gap-8 md:grid-cols-2">
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full overflow-hidden rounded-md h-90">
            <Image fill src="/hero-4.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
          </div>
          <div className="py-1.5 px-3 bg-orange-600/50 text-xs text-white w-max rounded-md">Dummy Blog</div>
          <div className="-mb-4 text-2xl gradient-text">Dummy Blog Technique</div>
          <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ex soluta dolorem, voluptas quam, minima culpa aliquam laudantium consectetur quidem quasi minus veniam beatae illum! Et deserunt ex in! </div>
        </Link>
        <Link href="/#" className="flex flex-col gap-6 group">
          <div className="relative w-full overflow-hidden rounded-md h-90">
            <Image fill src="/hero-5.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
          </div>
          <div className="py-1.5 px-3 bg-orange-600/50 text-xs text-white w-max rounded-md">Dummy Blog</div>
          <div className="-mb-4 text-2xl gradient-text">Dummy Blog Technique</div>
          <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ex soluta dolorem, voluptas quam, minima culpa aliquam laudantium consectetur quidem quasi minus veniam beatae illum! Et deserunt ex in!</div>
        </Link>
      </div>
    </div>
    {/* Steps */}
    {/* <div className="w-[90%] container mx-auto pb-20">
      <Steps />
    </div> */}
    {/* FAQs */}
    {/* <FAQ className="pt-0 pb-20" /> */}
  </>)
}