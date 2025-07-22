import { cn } from "@/lib/utils"

export default function RoundedSubheading({ children, className }) {
    return (
        <div className={cn("px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6", className)}>
            {children}
        </div>
    )
}