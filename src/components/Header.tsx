"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-2 md:px-36">
      <Link href="/">
        <Image
          src="/img/logo.png"
          alt="logo"
          width="20"
          height="20"
          className="mix-blend-exclusion"
        />
      </Link>
      <Navbar />
      <ModeToggle />
    </div>
  )
}

export default Header

export const Navbar = () => {
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
    <div className="flex justify-between space-x-8">
      {links.map((link,idx) => (
        <NextLink key={idx} href={link?.href} label={link.label} />
      ))}
    </div>
  )
}

export const NextLink = ({href,label}:{href:string,label:string}) => {
  const pathname = usePathname()

  return (
    <Link 
      href={href} 
      className="relative px-4 py-1"
      >
        <div className="dark:before:content-[''] dark:before:w-full dark:before:h-full dark:before:absolute dark:before:inset-0 dark:hover:before:bg-blue-500 dark:hover:before:blur-[20px] dark:before:opacity-60">
          <p className="relative z-10 text-sm font-semibold">{label}</p>
        </div>
        {pathname === href && (
          <motion.div layoutId="blue-bg" transition={{duration:0.6,type:"spring"}} className="absolute inset-0 bg-blue-600" style={{borderRadius:6}}></motion.div>
        )}
    </Link>
  )
}