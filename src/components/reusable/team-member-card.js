import Image from "next/image";

export default function TeamMemberCard({ name, position }) {
  return (
    <div className="flex flex-col w-full">
      {/* <div className="w-full h-px mb-5 bg-orange-400 rounded-full" /> */}
      <div className="w-full">
        {/* <div className="relative overflow-hidden bg-black rounded-full size-14">
          <Image fill src="/person.jpg" className="object-cover object-center" alt="Man" />
        </div> */}
        <div className="w-full mb-5">
          <div className="relative w-full group/member">
            <div className="relative z-10 w-full overflow-hidden h-70">
              <Image fill src='/man.png' className="object-contain object-center duration-300 scale-110 translate-y-1/5 saturate-0 group-hover/member:saturate-100" alt="Man" />
            </div>
            <div className="w-full absolute bottom-17.5 bg-orange-400 rounded-full h-17.5" />
            <div className="w-full absolute bottom-0 bg-orange-400 rounded-full h-17.5" />
          </div>
        </div>
        <div className="grow">
          <div className="font-medium text-center">{name}</div>
          <div className="text-sm text-center text-neutral-500">{position}</div>
        </div>
      </div>
    </div>
  )
}