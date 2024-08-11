"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
import BlurHover from "./blur-hover"

export default function NextLink({href,label}:{href:string,label:string}) {
  const pathname = usePathname()

  return (
    <Link 
      href={href} 
      className="relative px-4 py-1"
      >
        <BlurHover>
          <p className="relative z-10 text-sm font-semibold">{label}</p>
        </BlurHover>
        {pathname === href && (
          <motion.div layoutId="blue-bg" transition={{duration:0.6,type:"spring"}} className="absolute inset-0 bg-blue-600" style={{borderRadius:20}}></motion.div>
        )}
    </Link>
  )
}