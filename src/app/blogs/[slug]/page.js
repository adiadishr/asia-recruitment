import AuxHero from "@/components/sections/aux-hero";
import Image from "next/image";

export default async function Page({ params }) {

  const { slug } = await params;

  return (<>
    <AuxHero title="Blog-detail" />
    <div className="py-20 mx-auto w-[90%]">
      <div className="max-w-3xl mx-auto">
        <div className="heading font-semibold">{slug}</div>
        <div className="text-xl mb-4">Here&apos;s How to Stop It Before It&apos;s Too Late.</div>
        <div className="flex gap-4 flex-wrap items-center mb-20">
          <div className="rounded-full relative size-10 overflow-hidden">
            <Image fill src="/pexels.jpg" className="object-cover scale-225 object-[25%_0%] translate-y-5" alt="Author Image" />
          </div>
          <div className="text-sm tracking-normal!">Jordan Gibbs</div>
          <div className="flex gap-2 items-center">
            <div className="text-sm text-neutral-700">5 min read</div>
            <div className="rounded-full bg-neutral-800 size-0.5"></div>
            <div className="text-sm text-neutral-700">Apr 30, 2025</div>
          </div>
        </div>
      </div>
      <div className="relative h-150 mb-20">
        <Image fill src="/hero-1.jpg" alt={slug} className="object-cover" />
      </div>
      <div className="max-w-3xl mx-auto flex flex-col gap-6 text-black font-serif">
        <div className="paragraph">
          A ChatGPT session is an echo chamber to end all other echo chambers — it&apos;s just you, an overly friendly AI, and all your thoughts, dreams, desires, and secrets endlessly affirmed, validated, and supported.
        </div>
        <div className="paragraph">
          Why is this dangerous? Well, like any feedback loop, it becomes vicious. One day you are casually brainstorming some ideas with ChatGPT, and the next you are sucked into a delusion of grandeur.
        </div>
        <div className="paragraph">
          Maybe I am being a little dramatic here. However, even on a small scale, this feedback loop can be problematic, especially if you are like me and use LLMs daily.
        </div>
        <div className="paragraph">
          I am writing this article to help you be as conscious of this problem as possible, and to give you some prompts to avoid it.
        </div>
      </div>
    </div>
  </>)
}