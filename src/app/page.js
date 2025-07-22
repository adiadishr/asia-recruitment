import RoundedSubheading from "@/components/reusable/rounded-subheading";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (<>
    {/* Hero */}
    <div className="p-4">
      <div className="relative flex flex-col justify-center w-full md:mt-0 h-[80dvh] md:h-[calc(100dvh-32px)] px-[5%] overflow-hidden text-white rounded-xl mt-20">
        <Image data-aos='zoom-in' className="object-cover -z-10 scale-x-[1] md:object-[0%_0%]" src="/pexels.jpg" fill alt="Background" />
        <div className="absolute text-xs rotate-90 -right-8 md:right-0 top-1/2">Scroll down to see more</div>
        <div data-aos='zoom-in' className="absolute inset-0 w-full h-full bg-black/50 -z-10"></div>
        <div data-aos='fade-down' data-aos-delay='150' className="relative mx-auto mb-8 size-24">
          <Image
            fill
            alt="logo"
            className="object-contain saturate-0 brightness-200"
            src="/logo.png"
          />
        </div>
        <div data-aos='fade-down' data-aos-delay='250' className="tracking-tighter text-center headline">
          Matching Talent,<br />With Opportunity
        </div>
        <div className="absolute bottom-0 flex items-center justify-between w-[90%] py-8">
          <div>A Forbes Best Recruitment Company <br /> & Trusted Partner <span className="font-bold ">In Your Success</span></div>
          <div className="relative flex items-center justify-center p-3 overflow-hidden text-black bg-white rounded-full md:p-4 hover:animate-spin">
            <ArrowDown size={16} />
          </div>
        </div>
      </div>
    </div>
    {/* About */}
    <div className="container w-[90%] pt-10 pb-20 md:py-20 mx-auto">
      <div className="relative flex flex-col w-full h-full lg:flex-row gap-x-12 gap-y-12">
        {/* 1st Sibling */}
        <div className="order-2 basis-full lg:basis-1/2 lg:order-1">
          <div data-aos='fade' className="relative w-full overflow-hidden h-75 md:h-150 rounded-2xl lg:rounded-4xl">
            <Image className="object-cover scale-x-[-1] object-[0%_0%] saturate-90" src="/pexels.jpg" fill alt="Background" />
          </div>
        </div>
        {/* 2nd Sibling */}
        <div className="relative flex flex-col order-1 lg:basis-1/2 basis-full lg:order-2">
          <RoundedSubheading>About Us</RoundedSubheading>
          <div className="mb-8 heading">Empowering Global Workforce with <span className="gradient-text">Skilled Nepalese</span> Talent</div>
          <div data-aos-offset='-100' className="mb-3 text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
          <div data-aos='fade-down' data-aos-offset='-100' className="mb-5 text-base/7">
            Asia Recruitment Nepal is a truly independant human resource consultancy which supplies Nepalese skilled, semiskilled, technical and professional human resources abroad.
          </div>
          <Link href="/about-us" className="btn">Learn More</Link>
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
        <div className="cursor-default hover:underline">Accounting and finance jobs</div>
        <div className="cursor-default hover:underline">Construction jobs</div>
        <div className="cursor-default hover:underline">Tech / IT jobs</div>
        <div className="cursor-default hover:underline">Sustainability jobs</div>
        <div className="cursor-default hover:underline">Property and facilities management jobs</div>
        <div className="cursor-default hover:underline">Engineering jobs</div>
        <div className="cursor-default hover:underline">Human resources jobs</div>
        <div className="cursor-default hover:underline">Life sciences jobs</div>
        <div className="cursor-default hover:underline">Marketing and digital jobs</div>
      </div>
    </div>
    {/* Why Nepal */}
    <div className="container w-[90%] pt-20 mx-auto">
      <div className="flex justify-center w-full">
        <RoundedSubheading>Why Nepal</RoundedSubheading>
      </div>
      <div className="mb-4 text-center heading">So, <span className="gradient-text">why</span> hire from Nepal?</div>
      <div className="max-w-3xl mx-auto mb-20 text-center md:text-lg/7">
        Over the past one and a half decade, an increasing number of employers from different countries are showing their keen interest in hiring Professionals from Nepal.
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-60 md:h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-1.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">01</div>
            <div className="">Nepali workers are eminent for their hard work, high sense of responsibility and discipline.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-60 md:h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">02</div>
            <div className="">Nepali professionals are known for their strong work ethic and devotion to their duties.</div>
          </div>
        </div>
        <div className="relative z-10 w-full p-4 overflow-hidden text-white h-60 md:h-80 rounded-3xl">
          <div className="absolute inset-0 -z-10 bg-black/50"></div>
          <Image src="/hero-3.jpg" className="object-cover -z-20" fill alt="Card" />
          <div className="flex flex-col justify-between h-full">
            <div className="text-5xl ">03</div>
            <div className="">Procedures and formalities for recruiting Nepali employees are simple.</div>
          </div>
        </div>
      </div>
    </div>
    {/* Marketing Text */}
    <TextReveal>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dicta harum recusandae enim vitae sunt aspernatur esse qui nemo! Corrupti vitae at laboriosam maxime quasi delectus molestiae voluptatem dignissimos! Rerum.
    </TextReveal>
    {/* Blogs */}
    <div className="pb-20 w-[90%] mx-auto">
      <div className="mb-8 text-3xl tracking-tight">Featured Articles</div>
      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Link key={i} href="/blogs/dummy-blog" className="flex flex-col gap-6 group">
            <div className="relative w-full overflow-hidden rounded-md h-90">
              <Image fill src="/hero-4.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
            </div>
            <div className="py-1.5 px-3 bg-orange-600/50 text-xs text-white w-max rounded-md">Dummy Blog</div>
            <div className="-mb-4 text-2xl gradient-text">Dummy Blog Technique</div>
            <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ex soluta dolorem, voluptas quam, minima culpa aliquam laudantium consectetur quidem quasi minus veniam beatae illum! Et deserunt ex in! </div>
          </Link>
        ))}
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