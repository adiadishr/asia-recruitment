import AuxHero from "@/components/sections/aux-hero";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

  return (<>
    <AuxHero title="Blogs" />
    {/* Blogs */}
    <div className="py-20 w-[90%] mx-auto">
      <div className="mb-8 subheading">Featured Articles</div>
      <div className="grid gap-8 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <Link key={i} href="/blogs/dummy-blog" className="flex flex-col gap-6 group">
            <div className="relative w-full overflow-hidden rounded-md h-90">
              <Image fill src="/hero-4.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
            </div>
            <div className="py-1.5 px-3 bg-orange-600/50 text-xs text-white w-max rounded-md">Dummy Blog</div>
            <div className="-mb-4 text-2xl gradient-text">Dummy Blog Technique</div>
            <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ex soluta dolorem, voluptas quam, minima culpa aliquam laudantium consectetur quidem quasi minus veniam beatae illum! Et deserunt ex in! </div>
          </Link>
        ))}
      </div>
    </div>
    <div className="pb-20 w-[90%] mx-auto">
      <div className="mb-8 subheading">All Articles</div>
      <div className="mb-8 w-full flex justify-between">
        <select className="focus:border-orange-400 outline-none border py-2 px-4 rounded-md" name="" id="">
          <option value="all">All</option>
        </select>
        <input className="focus:border-orange-400 outline-none border py-2 px-4 rounded-md" type="text" placeholder="Search" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Link key={i} href="/blogs/dummy-blog" className="flex flex-col gap-6 group">
            <div className="relative w-full overflow-hidden rounded-md h-60">
              <Image fill src="/hero-4.jpg" alt="blog" className="object-cover duration-500 group-hover:scale-105" />
            </div>
            <div className="py-1.5 px-3 bg-orange-600/50 text-xs text-white w-max rounded-md">Dummy Blog</div>
            <div className="-mb-4 text-2xl gradient-text">Dummy Blog Technique</div>
            <div className="line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores est ex soluta dolorem, voluptas quam, minima culpa aliquam laudantium consectetur quidem quasi minus veniam beatae illum! Et deserunt ex in! </div>
          </Link>
        ))}
      </div>
    </div>
  </>)
}