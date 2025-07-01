'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, PhoneCall } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems } from '@/constants/nav'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogTrigger } from '@radix-ui/react-dialog'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

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
                    ? scrolled ? '!bg-white/95 backdrop-blur text-black top-0 px-[5%]' : 'md:bg-transparent md:text-white md:top-6 md:px-[2.5%] top-0 bg-white text-black px-[5%]'
                    : scrolled ? '!bg-white/95 backdrop-blur text-black top-0 px-[5%]' : 'md:bg-transparent md:text-white md:top-2 md:px-[2.5%] top-0 bg-white text-black px-[5%]'
            )}
        >
            <div className={cn("h-[72px] flex justify-between items-center duration-300", !scrolled && "border-white/20 border-b px-[2.5%]")}>
                {/* Logo */}
                <div className="relative z-[100] size-20">
                    <Image
                        fill
                        alt="logo"
                        className={cn(
                            "object-contain duration-500 ease-quart",
                            scrolled ? "" : "md:saturate-0 md:brightness-200"
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className={cn(
                                "flex items-center gap-2 px-4 py-1.5 duration-300 border rounded-md cursor-pointer",
                                scrolled
                                    ? "bg-orange-400 text-white border-orange-400 hover:bg-orange-400/50 hover:border-orange-400/50"
                                    : "md:border-white md:hover:bg-white md:text-white md:bg-transparent md:hover:text-black bg-orange-400 text-white border-orange-400 hover:bg-orange-400/50 hover:border-orange-400/50"
                            )}>
                                <PhoneCall size={16} />
                                Contact
                            </div>
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
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className='px-4 py-1.5 rounded-md cursor-pointer duration-300 bg-orange-400 text-white border-orange-400 hover:bg-orange-400/50 hover:border-orange-400/50 md:hidden' variant="outline">
                                <Menu />
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Asia Recruitment</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2.5 px-[5%]">
                                {navItems.map((navItem, index) => (
                                    <SheetClose key={index} asChild>
                                        <Link href={`${navItem.href}`} className={cn("flex group items-center gap-2",
                                            "text-black hover:text-orange-400 duration-150",
                                            pathname === navItem.href ? "gradient-text text-transparent" : "hover:underline")}>
                                            <navItem.icon className={cn("text-black group-hover:text-orange-400 duration-150",
                                                pathname === navItem.href ?
                                                    "text-orange-400" : "hover:underline",
                                            )} size={16} />
                                            {navItem.title}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </div>
    )
}
