import React from 'react'

const BlurHover = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="dark:before:content-[''] dark:before:w-full dark:before:h-full dark:before:absolute dark:before:inset-0 dark:hover:before:bg-blue-500 dark:hover:before:blur-[15px] dark:before:opacity-60 before:transition-all before:duration-100 before:ease-in-out before:z-0">
      {children}
    </div>
  )
}

export default BlurHover