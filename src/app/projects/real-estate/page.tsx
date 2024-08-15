
import { ImageComp } from "@/components/image-comp";
import LayoutAnimation from "@/components/layout-animation";
import { BiWorld } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { Badge } from '@/components/ui/badge';

const RealEstate = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto w-1/2 grid grid-cols-1 grid-rows-2 gap-2">
          <ImageComp
            src="/img/projects/real-estate1.png"
            alt="real estate website"
          />
          <ImageComp
            src="/img/projects/real-estate2.png"
            alt="real estate website"
          />
        </div>
        <div className="w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <h1 className='dark:text-blue-600 text-xl font-bold'>Real estate website 🏠</h1>
          </div>
          <p className='text-sm text-justify indent-6'>
            Di projek ini, saya membuat website real estate menggunakan API dari Rapid API, user bisa mencari perumahan yang diinginkan sesuai spesifikasi yang dimasukkan.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2'>
              <p>STACK :</p>
              <Badge>NextJS</Badge>
              <Badge className="bg-teal-400">ChakraUI</Badge>
              <Badge className="bg-gradient-to-r from-indigo-500 to-pink-500">Framer motion</Badge>
            </div>
            <a href="https://github.com/theoyoth/real-estate" target='_blank'>
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

export default RealEstate