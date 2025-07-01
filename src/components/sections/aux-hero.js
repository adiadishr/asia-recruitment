'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuxHero({ title }) {
    const pathname = usePathname();
    return (
        <div className="py-20 relative">
            <Image fill src="/gradient.avif" alt="Gradient background for recruitment company" className="object-cover -z-10" />
            <div className="w-[90%] pt-20 mx-auto text-5xl tracking-tight text-center text-white">
                <span>{title}</span>
                <div className="text-base mt-2.5 text-neutral-100 text-center">
                    <Link className="hover:underline" href="/">Home</Link>
                    <span className="mx-1.5">/</span>
                    <Link className="capitalize hover:underline" href={pathname.split("/").slice(0, -1).join("/")}>{pathname.split("/").at(-1)}</Link>
                </div>
            </div>
        </div>
    )
}