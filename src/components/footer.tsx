
export default function Footer() {
  return (
    <div className="w-full flex justify-between items-center py-2 md:px-36 dark:bg-zinc-950 backdrop-blur-xl fixed left-0 bottom-0 z-0">
      <Social />
      <div>
        <p className="dark:font-normal font-medium text-xs cursor-default text-zinc-600">&copy;{new Date().getFullYear()} Theo. All Rights Reserved.</p>
      </div>
    </div>
  )
}

const Social = () => {
  const socialMedia = [
    {
      name:'instagram',
      tag:'1st',
      href:'https://www.instagram.com/theoyothart/',
    },
    {
      name:'youtube',
      href:'https://www.youtube.com/@codebytheo',
    },
    {
      name:'github',
      tag:'1st',
      href:'https://github.com/theoyoth',
    },
    {
      name:'instagram',
      tag:'2st',
      href:'https://www.instagram.com/theoyothtyping/',
    },
    {
      name:'github',
      tag:'2st',
      href:'https://github.com/codebytheo',
    },
  ]

  return (
    <ul className="flex space-x-4 items-center text-[0.7rem]">
      {
        socialMedia.map((social,idx) => (
          <li key={idx} className="relative">
            <a href={social?.href} target="_blank" className="dark:before:content-[''] dark:before:w-full dark:before:h-full dark:before:absolute dark:before:inset-0 dark:hover:before:bg-blue-500 dark:hover:before:blur-[20px] dark:before:opacity-60 before:transition-all before:duration-100 before:ease-in-out"><span className="text-[0.5rem] cursor-pointer">{social?.tag}</span>{social?.name}</a>
          </li>
        ))
      }
    </ul>  
  )
}