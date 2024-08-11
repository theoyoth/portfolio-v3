"use client"

import {motion} from 'framer-motion';

const LayoutAnimation = ({children}:{children:React.ReactNode}) => {

  const animation = {
    hidden:{
      y:"20px",
      opacity:0,
    },
    show:{
      y:0,
      opacity:1,
      transition:{
        duration:0.3,
        ease:'easeOut'
      }
    },
    exit:{
      y:"20px",
      opacity:0,
      transition:{
        duration:0.3,
        ease:'easeOut'
      }
    },
  }
  return (
      <motion.div 
        variants={animation} 
        initial='hidden'
        animate='show'
        exit='exit'
      >
        {children}
      </motion.div>
  )
}

export default LayoutAnimation

