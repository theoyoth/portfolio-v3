"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
import BlurHover from "./blur-hover"

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-2 md:px-36 dark:bg-zinc-950/30 fixed top-0 left-0 z-50 backdrop-blur-sm bg-zinc-200/50">
      <Link href="/">
        <div className="w-[24px] h-[22px] relative bg-zinc-200 dark:bg-zinc-950">
          <Image
            src="/img/logo.png"
            alt="logo"
            fill
            sizes="(min-width:1024px) 100vw, (min-width:768px) 50vw, 33vw"
            className="dark:mix-blend-normal mix-blend-exclusion object-cover"
          />
        </div>
      </Link>
      <Navbar />
      <ModeToggle />
    </div>
  )
}

export default Header

const Navbar = () => {
  const links = [
    {
      href:"/projects",
      label:"Projects",
    },
    {
      href:"/videos",
      label:"Videos",
    },
  ]
  return (
    <div className="flex justify-between space-x-6">
      {links.map((link,idx) => (
        <NextLink key={idx} href={link?.href} label={link.label} />
      ))}
    </div>
  )
}

const NextLink = ({href,label}:{href:string,label:string}) => {
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