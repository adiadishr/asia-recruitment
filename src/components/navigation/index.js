'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LucideHome, Box, CircleUserRound, PhoneCall, CircleHelp, Newspaper } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Nav() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.5)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={cn(
                "fixed z-50 w-full duration-300",
                scrolled ? '!bg-white/95 border-neutral-200 border-b backdrop-blur top-0 px-[5%]' : 'bg-transparent text-white top-2 px-[2.5%]'
            )}
        >
            <div className={cn("h-[72px] flex justify-between items-center duration-300", !scrolled && "border-white/20 border-b px-[2.5%]")}>
                {/* Logo */}
                <div className="relative z-[100] w-20 h-20">
                    <Image
                        fill
                        alt="logo"
                        className={cn(
                            "object-contain duration-500 ease-quart",
                            scrolled ? "" : "saturate-0 brightness-200"
                        )}
                        src="/logo-top.png"
                    />
                </div>

                {/* Links */}
                <div className="flex items-center gap-8 justify-right">
                    <div className="items-center hidden gap-8 md:flex">
                        <Link href="/" className="flex items-center gap-2 hover:text-orange-400 duration-200">
                            <LucideHome size={16} />
                            Home
                        </Link>
                        <Link href="/about" className="flex items-center gap-2 hover:text-orange-400 duration-200">
                            <CircleUserRound size={18} />
                            About Us
                        </Link>
                        <Link href="/services" className="flex items-center gap-2 hover:text-orange-400 duration-200">
                            <Box size={18} />
                            Services
                        </Link>
                        <Link href="/faq" className="flex items-center gap-2 hover:text-orange-400 duration-200">
                            <CircleHelp size={18} />
                            FAQs
                        </Link>
                        <Link href="/blogs" className="flex items-center gap-2 hover:text-orange-400 duration-200">
                            <Newspaper size={18} />
                            Blogs
                        </Link>
                    </div>
                    <div className={cn(
                        "flex items-center gap-2 px-2 py-1 duration-300 border rounded-md cursor-pointer",
                        scrolled
                            ? "bg-orange-400 text-white border-orange-400 hover:bg-orange-400/50 hover:border-orange-400/50"
                            : "border-white hover:bg-white hover:text-black"
                    )}>
                        <PhoneCall size={16} />
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}
