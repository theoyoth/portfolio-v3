
import { ImageComp } from "@/components/image-comp";
import LayoutAnimation from "@/components/layout-animation";
import { BiWorld } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import { BsGithub } from 'react-icons/bs';
import { Badge } from '@/components/ui/badge';

const FootballInfo = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto md:w-2/3 grid grid-cols-1 grid-rows-2 gap-2">
          <div className="w-full h-[140px] md:w-full md:h-[320px] relative">
            <ImageComp
              src="/img/projects/football-info1.png"
              alt="real estate website"
            />
          </div>
          <div className="w-full h-[140px] md:w-full md:h-[320px] relative">
            <ImageComp
              src="/img/projects/football-info2.png"
              alt="real estate website"
            />
          </div>
        </div>
        <div className="md:w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <a href="https://football-info-matches.vercel.app/" target="_blank" className='dark:text-blue-600 text-xl font-bold'>Football Info⚽</a>
          </div>
          <p className='text-sm text-justify indent-6'>
            website ini menampilkan info pertandingan bola dari top-top liga di dunia. saya buat dengan menggunakan Next JS, TaiwindCSS, dan API dari <a href="https://www.football-data.org/" target="_blank" className="underline">Football data</a> di sebelah kanan ada berita-berita terkait sepakbola yang didapat dari news API <a href="https://newsapi.org/" target="_blank" className="underline">newsAPI</a>
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2'>
              <p>STACK :</p>
              <Badge>NextJS</Badge>
              <Badge className="bg-cyan-500">TailwindCSS</Badge>
            </div>
            <a href="https://github.com/theoyoth/football-info-matches-website" target='_blank'>
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

export default FootballInfo