import { ImageComp } from "@/components/image-comp"
import LayoutAnimation from "@/components/layout-animation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BiWorld } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"

const MovieApp = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto w-1/2 grid grid-cols-1 grid-rows-2 gap-2">
          <ImageComp
            src="/img/projects/movieapp-2.png"
            alt="movie app"
          />
          <ImageComp
            src="/img/projects/movieapp-3.png"
            alt="movie app"
          />
        </div>
        <div className="w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <a href="https://moviename.netlify.app/" target="_blank" className='dark:text-blue-600 text-xl font-bold'>Movie search app 🎥</a>
          </div>
          <p className='text-sm text-justify indent-6'>
            Di project ini, saya menggunakan API untuk mengambil data-data film lalu memunculkannya ke user. terdapat juga search bar untuk mencari film tertentu untuk melihat detailnya.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2'>
              <p>STACK :</p>
              <Badge className="bg-emerald-500">NuxtJS</Badge>
            </div>
            <a href="https://github.com/theoyoth/movie-search-app" target='_blank'>
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

export default MovieApp