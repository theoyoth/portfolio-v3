import { ImageComp } from "@/components/image-comp"
import LayoutAnimation from "@/components/layout-animation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BiWorld } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"

const Travel = () => {
  return (
    <div className="h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto md:w-2/3 grid gap-2 place-items-center">
          <div className="w-full h-[140px] md:w-full md:h-[320px] relative">
            <ImageComp
              src="/img/projects/travel.png"
              alt="travel website"
            />
          </div>
        </div>
        <div className="md:w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <h1 className='dark:text-blue-600 text-xl font-bold'>Travel website ✈</h1>
          </div>
          <p className='text-sm text-justify indent-6'>
            Di project ini, saya membuat frontend untuk travel website. responsif untuk laptop dan mobile.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center space-x-2 flex-wrap'>
              <p>STACK :</p>
              <Badge className="bg-orange-500">HTML</Badge>
              <Badge className="bg-blue-600">CSS</Badge>
              <Badge className="bg-yellow-400">Javascript</Badge>
            </div>
            <a href="https://github.com/theoyoth/travel-website" target='_blank'>
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

export default Travel