import AuxHero from "@/components/sections/aux-hero";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import TeamMemberCard from "@/components/reusable/team-member-card";
import RoundedSubheading from "@/components/reusable/rounded-subheading";

export default function Page() {



  return (<>
    <AuxHero title="About Us" />
    {/* Managing Team */}
    <div className="w-[90%] md:w-[85%] mx-auto pt-20 relative">
      <div className="absolute translate-x-1/2 rounded-full shadow-2xl opacity-25 -translate-y-2/7 top-1/2 right-1/2 size-200 gradient-bg -z-10 shadow-orange-400 blur-3xl" />
      <RoundedSubheading className="mx-auto mb-5">Managing Team</RoundedSubheading>
      <div className="mb-20 text-center heading gradient-text">Our Leadership</div>
      {/* CEO */}
      <div className="flex flex-col w-full gap-20 mb-20 md:flex-row">
        {/* Image */}
        <div className="w-max">
          <div className="relative overflow-hidden rounded-full size-80">
            <Image fill src="/person.jpg" alt="Man" className="object-cover object-[50%_100%]" />
          </div>
        </div>
        {/* Message */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-8 text-xl md:text-3xl">Message from the CEO</div>
            <p className="mb-2.5">
              Our workers are reputed for their obedience, dutiful and loyal nature to their employers. We have been supplying different categories of manpower unskilled labor, semi-skilled trade persons, qualified engineers to many gulf countries like Saudi Arabia, Qatar, U.A.E and others.
            </p>
            <p>
              We are even ready to provide the workers to any country who can provide us approved work-permit visas allowed by Nepal Government.
            </p>
          </div>
          <div>
            <div className="text-lg text-right md:text-2xl">Shambhu Dayal Agrawal</div>
            <div className="text-base text-right md:text-lg text-neutral-700">Chie Executive Officer</div>
          </div>
        </div>
      </div>
      {/* Director */}
      <div className="flex flex-col w-full gap-20 md:flex-row">
        {/* Message */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-8 text-xl md:text-3xl">Message from the CEO</div>
            <p className="mb-2.5">
              Asia Recruitment aims to accomplish human resource goals by building and promoting a high-end professional working environment with the highest level of Human Resource services and employee satisfaction.
            </p>
            <p>
              Nepalese professionals are the most pursued in every sector globally, for their intellectual, technical, physical and adaptive abilities.
            </p>
          </div>
          <div>
            <div className="text-lg text-left md:text-2xl">Shambhu Dayal Agrawal</div>
            <div className="text-base text-left md:text-lg text-neutral-700">Chie Executive Officer</div>
          </div>
        </div>
        {/* Image */}
        <div className="w-max">
          <div className="relative overflow-hidden rounded-full size-80">
            <Image fill src="/person.jpg" alt="Man" className="object-cover object-[50%_100%]" />
          </div>
        </div>
      </div>
    </div>
    {/* Mission and Vision */}
    <div className="py-20 mx-auto w-[90%] md:w-[85%]">
      <div className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6">Our Mission and Vision</div>
      <div className="mb-15 heading">At Asia Recruitment Nepal, we believe that talent is the key to success in the global marketplace.</div>
      <div className="grid w-full gap-10 md:grid-cols-2">
        <div className="col-span-1 w-[90%] md:w-[85%] rounded-md overflow-hidden h-80 relative">
          <Image fill src="/hero-5.jpg" alt="Card" className="object-cover" />
        </div>
        <div className="flex flex-col col-span-1 gap-10">
          <div className="flex flex-col gap-5">
            <div className="subheading gradient-text">Mission</div>
            <div className="paragraph">
              Our mission is to explore the local and international job opportunities for Nepalese aspiring career and employment in abroad and local market.
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="subheading gradient-text">Vision</div>
            <div className="paragraph">
              Create and promote international standard manpower solution for both employee and employer
              and find the global opportunities for them as per their need.
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Team */}
    <div className="pb-20 mx-auto w-[90%] md:w-[85%]">
      <div className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6 mx-auto">Our Team</div>
      <div className="mb-5 text-center heading">Meet the Team</div>
      <div className="grid w-full grid-cols-2 gap-x-20 gap-y-0 md:grid-cols-4">
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
        <TeamMemberCard name="Shambhu Dayal" position="CEO" />
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
        <TeamMemberCard name="Shambhu Dayal" position="CEO" />
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
        <TeamMemberCard name="Shrestha Aditya" position="Founder" />
      </div>
    </div>
  </>)
}