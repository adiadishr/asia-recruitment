'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { LucideHome, Box, CircleUserRound, PhoneCall, CircleHelp, Newspaper } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/constants/nav'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.25)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={cn(
                "fixed z-50 w-full duration-300",
                pathname === "/"
                    ? scrolled ? '!bg-white/95 backdrop-blur text-black top-0 px-[5%]' : 'bg-transparent text-white top-6 px-[2.5%]'
                    : scrolled ? '!bg-white/95 backdrop-blur text-black top-0 px-[5%]' : 'bg-transparent text-white top-2 px-[2.5%]'
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
                        {navItems.map((navItem, index) => (
                            <Link key={index} href={`${navItem.href}`} className={cn("flex group items-center gap-2",
                                pathname === navItem.href ?
                                    scrolled ? "gradient-text" : "hover:underline underline" :
                                    scrolled ? "text-black hover:text-orange-400 duration-150" : "text-white hover:underline")}>
                                <navItem.icon className={cn(pathname === navItem.href ?
                                    scrolled ? "text-orange-400" : "text-white hover:underline" :
                                    scrolled ? "text-black group-hover:text-orange-400 duration-150" : "text-white hover:underline",)} size={16} />
                                {navItem.title}
                            </Link>
                        ))}
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
