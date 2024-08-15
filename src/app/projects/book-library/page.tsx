import { ImageComp } from '@/components/image-comp'
import LayoutAnimation from '@/components/layout-animation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

const BookLibrary = () => {
  return (
    <div className="min-h-screen py-14">
      <LayoutAnimation>
      <section className="w-3/4 m-auto">
        <div className="m-auto w-1/2 grid grid-cols-1 grid-rows-2 gap-2">
          <ImageComp
            src="/img/projects/book-library.png"
            alt="book library"
          />
          <ImageComp
            src="/img/projects/book-library2.png"
            alt="book library"
          />
        </div>
        <div className="w-1/2 m-auto flex flex-col space-y-4">
          <div className='flex space-x-2 items-center pt-2'>
            <BiWorld />
            <a href="https://booklibraryapp.vercel.app/" target="_blank" className='dark:text-blue-600 text-xl font-bold'>Book library website 📚</a>
          </div>
          <p className='text-sm text-justify indent-6'>
            Website ini untuk menyimpan data-data buku. saya punya beberapa buku di rak, kadang-kadang teman-teman saya meminjamnya. jadi, website ini mencatat detail buku dan statusnya, apakah ada di rak atau di sedang di pinjam. saya menggunakan MERN stack.
          </p>
          <div className='flex flex-col justify-center items-center space-y-4'>
            <div className='flex justify-center items-center flex-wrap space-x-2 space-y-2'>
              <p>STACK :</p>
              <Badge className="bg-blue-500">ReactJS</Badge>
              <Badge className="bg-cyan-500">TailwindCSS</Badge>
              <Badge className="bg-green-500">NodeJS</Badge>
              <Badge className='dark:bg-slate-200'>ExpressJS</Badge>
              <Badge className="bg-emerald-500">MongoDB</Badge>
              <Badge className="bg-red-600">Mongoose</Badge>
            </div>
            <a href="https://github.com/theoyoth/mern-library" target='_blank'>
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

export default BookLibrary