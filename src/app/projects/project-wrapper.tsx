
import {motion} from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import BlurHover from "@/components/blur-hover";
import { BiWorld } from "react-icons/bi";

export const ProjectWrapper = ({src="", title="", href=""}:{src:string,title:string,href:string}) => {
  return (
    <div className="relative">
      <BlurHover>
      <Link href={href}>
        <div className="relative dark:bg-zinc-950 bg-zinc-300 p-2 rounded-xl">
          <div className="relative w-[280px] h-[130px] m-auto">
            <Image src={src} alt={title} fill sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw" className="object-cover rounded-lg" />
          </div>
          <div className="flex space-x-2 pt-2">
            <BiWorld />
            <p className="text-xs">{title}</p>
          </div>
        </div>
      </Link>
      </BlurHover>
    </div>
)};