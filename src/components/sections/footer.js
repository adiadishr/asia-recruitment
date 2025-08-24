import { navItems } from "@/constants/nav";
import { Globe, Info, MapPin, } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (<>
        {/* Footer */}
        <div className="relative overflow-hidden text-white" >
            <Image fill className="absolute inset-0 object-cover -z-20" src="/gradient.avif" alt="Gradient background for recruitment company" />
            <div className="pt-10 pb-8 md:py-15 w-[90%] relative md:w-[85%] mx-auto container flex gap-10 md:gap-20 md:flex-row flex-col md:items-center">
                <div className="relative mx-auto size-32 md:mx-0">
                    <Image
                        fill
                        alt="logo"
                        className="object-contain object-center saturate-0 brightness-200"
                        src="/logo.png"
                    />
                </div>
                <div className="grow">
                    <div className="text-3xl text-center md:text-start">Get matched today!</div>
                    <div className="w-full h-px my-8 md:my-5 bg-neutral-50"></div>
                    <div className="flex flex-wrap justify-center gap-5 mb-8 md:justify-start md:mb-5 md:items-center md:flex-row">
                        {navItems.map((item) => (<div key={item.title}>
                            <div className="cursor-pointer hover:underline">{item.title}</div>
                        </div>))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-5 mb-10 md:mb-5 md:justify-start">
                        <div className="flex gap-2.5 items-center hover:underline cursor-pointer">
                            <Info size={16} />
                            Nepal License Number - 1557/079/08
                        </div>
                        <div className="flex gap-2.5 items-center hover:underline cursor-pointer">
                            <MapPin size={16} />
                            Old-Baneshwor-09, Kathmandu
                        </div>
                        <div className="flex gap-2.5 items-center hover:underline cursor-pointer">
                            <Globe size={16} />
                            asiarecruitmentnepal.com
                        </div>
                    </div>
                    <div className="text-center md:text-start">
                        &copy; 2024. All Rights Reserved. Asia Recruitment Nepal.
                    </div>
                </div>
            </div>
        </div>
    </>)
}