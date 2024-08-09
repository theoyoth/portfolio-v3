'use client'

import { RiReactjsFill, RiTailwindCssFill, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { IoMdTime } from "react-icons/io";
import { Badge, badgeVariants } from "@/components/ui/badge"

import Image from "next/image";
import LayoutAnimation from "@/components/layout-animation";

export default function Home() {
  return (
    <LayoutAnimation>
    <main className="h-[100dvh] overflow-hidden pt-12">
      <section className="w-3/4 m-auto flex flex-col items-center space-y-8 mt-10">
        <div className="relative w-[140px] h-[140px]">
          <Image src="/img/avatar.jpg" alt="profil pic" fill sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" className="rounded-lg object-cover" />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="text-2xl dark:text-zinc-100 text-justify">
            Hi🖐my name is Theo, I'm fresh graduate programmer😎. Focus on web development 🌍process mainly in frontend, I like to animate website and make it look attractive. my main stack are <Badge className="bg-blue-500"><RiReactjsFill size={20} className="mr-1" />React js</Badge>, <Badge className="bg-cyan-500"><RiTailwindCssFill size={20} className="mr-1" />TailwindCSS</Badge>, and <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500"><TbBrandFramerMotion size={20} className="mr-1" />Framer motion</Badge>.
          </div>
          <div className="text-2xl dark:text-zinc-100 text-justify">
            In my free time <IoMdTime className="text-yellow-400 inline" />, I code website for my <a href="https://www.youtube.com/@codebytheo" target="_blank" className={`${badgeVariants({ variant: "default"})} dark:bg-zinc-800 flex items-center text-red-600 font-semibold text-xl p-1`}><RiYoutubeLine size={22} className="inline mr-1" /> channel
            </a> and designing poster for my <a href="https://www.instagram.com/theoyothart/" target="_blank" className={`${badgeVariants({ variant: "default"})} dark:bg-zinc-800 flex items-center dark:text-pink-600 font-semibold text-xl p-1`}>
            <RiInstagramLine size={22} className="inline mr-1" /> <span className="text-sm">1st</span>gram</a> and <a href="https://www.instagram.com/theoyothtyping/" target="_blank" className={`${badgeVariants({variant:'default'})} dark:text-pink-600 dark:bg-zinc-800 font-semibold text-xl border p-1`}><RiInstagramLine size={22} className="inline mr-1" /> <span className="text-sm">2nd</span>gram</a>. graphic design is my another thing that i love to do🚀.
          </div>
        </div>
      </section>
    </main>
    </LayoutAnimation>
  );
}
