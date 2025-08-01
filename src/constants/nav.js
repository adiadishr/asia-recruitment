import { LucideHome, Box, CircleUserRound, CircleHelp, Newspaper, Lock } from 'lucide-react'

export const navItems = [
  {
    title: "Home",
    href: "/",
    icon: LucideHome
  },
  {
    title: "About Us",
    href: "/about-us",
    icon: CircleUserRound
  },
  {
    title: "Process",
    href: "/process",
    icon: Box,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: Newspaper,
    transparent: true
  },
  {
    title: "FAQs",
    href: "/faq",
    icon: CircleHelp,
  },
];