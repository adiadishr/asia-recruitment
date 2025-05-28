import Image from "next/image";

export default function AuxHero({ title }) {
    return (
        <div className="py-20 relative">
            <Image fill src="/gradient.avif" alt="Gradient background for recruitment company" className="object-cover -z-10" />
            <div className="w-[90%] pt-20 pb-10 mx-auto text-5xl tracking-tight text-center text-white">
                {title}
            </div>
        </div>
    )
}