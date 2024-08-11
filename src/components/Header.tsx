import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import Navbar from "./navbar"

export default function Header() {
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