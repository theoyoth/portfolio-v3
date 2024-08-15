import { ImageComp } from "@/components/image-comp";
import LayoutAnimation from "@/components/layout-animation";
import { BiWorld } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { Badge } from '@/components/ui/badge';

const StudioT = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="w-1/2 m-auto grid grid-cols-1 grid-rows-2 gap-2">
          <ImageComp
            src="/img/projects/studiot1.png"
            alt="real estate website"
          />
          <ImageComp
            src="/img/projects/studiot2.png"
            alt="real estate website"
          />
          <ImageComp
            src="/img/projects/studiot3.png"
            alt="real estate website"
          />
          <ImageComp
            src="/img/projects/studiot4.png"
            alt="real estate website"
          />
        </div>
        <div className="w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <a href="https://studio-t.vercel.app/" target="_blank" className='dark:text-blue-600 text-xl font-bold'>StudioT 🌐</a>
          </div>
          <p className='text-sm text-justify indent-6'>
            ini adalah projek pribadi website agensi di mana menyediakan layanan pembuatan website, ada empat menu utama di dalam website. fokus saya dalam membuat website ini adalah untuk mencoba mengaplikasikan animasi yang lebih kompleks menggunakan framer motion.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2'>
              <p>STACK :</p>
              <Badge>NextJS</Badge>
              <Badge className="bg-cyan-500">TailwindCSS</Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500">Framer motion</Badge>
            </div>
            <a href="https://github.com/theoyoth/studioT" target='_blank'>
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

export default StudioT