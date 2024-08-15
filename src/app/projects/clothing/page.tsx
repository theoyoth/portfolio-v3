import { ImageComp } from "@/components/image-comp"
import LayoutAnimation from "@/components/layout-animation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BiWorld } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"

const Clothing = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto w-1/2 grid grid-cols-1 grid-rows-2 gap-2">
          <ImageComp
            src="/img/projects/clothing1.png"
            alt="clothing"
          />
          <ImageComp
            src="/img/projects/clothing2.png"
            alt="clothing"
          />
        </div>
        <div className="w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <a href="https://online-clothing.vercel.app/" target="_blank" className='dark:text-blue-600 text-xl font-bold'>Clothing website 🧥</a>
          </div>
          <p className='text-sm text-justify indent-6'>
            Website di mana user bisa memilih pakaian yang diinginkan dan menambahkannya ke keranjang.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2'>
              <p>STACK :</p>
              <Badge>NextJS</Badge>
              <Badge className="bg-cyan-500">TailwindCSS</Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500">Framer motion</Badge>
              <Badge className="bg-yellow-500">Zustand</Badge>
            </div>
            <a href="https://github.com/theoyoth/online-clothing" target='_blank'>
              <Button variant="secondary" size="sm" className=''>
                <BsGithub />
                <p className='ml-2'>Github</p>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </LayoutAnimation>
    </div>
  )
}

export default Clothing