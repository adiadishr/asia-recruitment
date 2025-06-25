'use client'

import { usePathname } from "next/navigation"

export default function getPathname() {
  const pathname = usePathname()
  return pathname
}