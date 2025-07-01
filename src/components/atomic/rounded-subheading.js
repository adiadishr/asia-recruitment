export default function RoundedSubheading({ children }) {
    return (
        <div className="px-3 font-normal tracking-tighter py-0.5 border rounded-full border-black/20 w-max mb-6">
            {children}
        </div>
    )
}