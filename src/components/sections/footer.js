import { navItems } from "@/constants/nav";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

export default function Footer() {
    return (<>
        {/* Footer */}
        <div className="relative min-h-[calc(100dvh-64px)] text-white overflow-hidden" >
            <Image fill className="absolute inset-0 object-cover -z-20" src="/gradient.avif" alt="Gradient background for recruitment company" />
            <div className="py-20 z-10">
                <div className="mb-8 tracking-tight text-center heading">Get matched today!</div>
                <div className="flex items-center justify-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="btn">As an employee<ArrowRight size={16} /></div>
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
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="btn !border-white !bg-transparent !text-white">As an employer<ArrowRight size={16} /></div>
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
                </div>
            </div>
            <div className="grid border-y border-orange-50/20 md:grid-cols-2 z-10">
                <div className="flex flex-col gap-6 md:py-20 px-[5%] md:px-[10%] pt-20 pb-10 md:border-r border-orange-50/20">
                    <div className="text-sm md:w-3/4">Want important updates, expert advice and news sent straight to your inbox?</div>
                    <form className="relative flex border border-white rounded-md md:w-3/4 bg-white/10">
                        <input className="w-[85%] shrink-0 p-3.5 text-sm focus:outline-none placeholder:text-white" placeholder="Enter your email" />
                        <button type="submit" className="flex items-center justify-center w-full border-l border-white cursor-pointer">
                            <ArrowRight size={16} />
                        </button>
                    </form>
                    <div className="text-xs md:w-3/4">By signing up to receive emails from Rascals, you agree to our <Link href="/#" className="underline">Privacy Policy</Link>. We treat your info responsibly.</div>
                    <div className=""></div>
                </div>
                <div className="md:py-20 pb-10 px-[5%] md:px-[10%]">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            <div className="text-sm uppercase">Quick Links</div>
                            {navItems.map((navItem) => (
                                <Link key={navItem.title} className="text-sm hover:underline text-white/80" href={navItem.href}>{navItem.title}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="text-sm uppercase text-right md:text-start">Social</div>
                            <Link className="text-sm hover:underline text-right md:text-start text-white/80" href="https://instagram.com" target="_blank">Instagram</Link>
                            <Link className="text-sm hover:underline text-right md:text-start text-white/80" href="https://tiktok.com" target="_blank">TikTok</Link>
                            <Link className="text-sm hover:underline text-right md:text-start text-white/80" href="https://facebook.com" target="_blank">Facebook</Link>
                            <Link className="text-sm hover:underline text-right md:text-start text-white/80" href="https://pinterest.com" target="_blank">Pinterest</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 w-[90%] mx-auto flex justify-center z-10">
                <div className="relative mx-auto mb-4 size-48">
                    <Image
                        fill
                        alt="logo"
                        className="object-contain saturate-0 brightness-200"
                        src="/logo.png"
                    />
                </div>
            </div>
            <div className="w-[90%] tracking-normal z-10 pb-4 mx-auto flex flex-col items-center md:flex-row md:justify-between text-xs gap-2 md:gap-0">
                <div>
                    2024. All Rights Reserved. Rascals International Limited.
                </div>
                <div className="flex gap-4">
                    <Link href="/#" className="hover:underline">Privacy Policy</Link>
                    <Link href="/#" className="hover:underline">Terms of Service</Link>
                    <Link href="/#" className="hover:underline">Cookie Policy</Link>
                </div>
            </div>
        </div>
    </>)
}