// import localFont from 'next/font/local'
import { Geist } from "next/font/google";

// export const sans = localFont({
//   src: '../../public/fonts/rascals.woff2',
//   variable: '--font-sans',
//   display: 'swap',
// })

export const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})