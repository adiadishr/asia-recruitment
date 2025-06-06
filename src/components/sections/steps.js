import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

const data = [
    {
        title: "Step - 01",
        content: (
            <div>
                <h3 className="scroll-m-20 text-2xl md:text-4xl tracking-tight mb-4">
                    Site Assessment & Preparation
                </h3>
                <p
                    className="mb-12 text-sm md:leading-7 leading-5 font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <TimelineImage src="/hero-1.jpg" />
                    <TimelineImage src="/hero-1.jpg" />
                </div>
            </div>
        ),
    },
    {
        title: "Step - 02",
        content: (
            <div>
                <h3 className="scroll-m-20 text-2xl md:text-4xl tracking-tight mb-4">
                    Excavation & Foundation
                </h3>
                <p
                    className="mb-12 text-sm md:leading-7 leading-5 font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <TimelineImage src="/hero-1.jpg" />
                    <TimelineImage src="/hero-1.jpg" />
                </div>
            </div>
        ),
    },
    {
        title: "Step - 03",
        content: (
            <div>
                <h3 className="scroll-m-20 text-2xl md:text-4xl tracking-tight mb-4">
                    Start Work
                </h3>
                <p
                    className="mb-12 text-sm md:leading-7 leading-5 font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <TimelineImage src="/hero-1.jpg" />
                    <TimelineImage src="/hero-1.jpg" />
                </div>
            </div>
        ),
    },
    {
        title: "Step - 04",
        content: (
            <div>
                <h3 className="scroll-m-20 text-2xl md:text-4xl tracking-tight mb-4">
                    Finished Work
                </h3>
                <p
                    className="mb-12 text-sm md:leading-7 leading-5 font-normal text-neutral-800 md:text-base dark:text-neutral-200">
                    Built and launched Aceternity UI and Aceternity UI Pro from scratch
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <TimelineImage src="/hero-1.jpg" />
                    <TimelineImage src="/hero-1.jpg" />
                </div>
            </div>
        ),
    },
];

function TimelineImage({ src }) {
    return (<>
        <div className="relative h-20 md:h-44 lg:h-60 rounded-lg overflow-hidden shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
            <Image fill src={src} alt="image" className="object-cover" />
        </div>
    </>
    )
}

export function Steps() {
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}