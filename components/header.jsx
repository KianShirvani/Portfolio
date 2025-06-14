import { assets } from '@/assets/assets'
import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function header() {
  return (
<div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
  <motion.div
  initial={{scale: 0}}
  whileInView={{scale:1}}
  transition={{duration:0.6, type: 'spring', stiffness: 100}}
  >
    <Image src={assets.profile_img} alt="" className="mx-auto rounded-full w-40 mt-10" />
  </motion.div>
  
    <motion.h3
  initial={{y: -20, opacity: 0}}
  whileInView={{y: 0, opacity: 1}}
  transition={{duration:0.8, delay: 0.5}}
  className="mt-4 mx-auto flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
  Hi! I'm Kian Shirvani
  <Image src={assets.hand_icon} alt="" className="w-6" />
</motion.h3>

    <motion.div
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration:0.8, delay: 0.7}}
    className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo min-h-[120px] flex items-center justify-center'>
      <ReactTyped
        strings={[
          "Full Stack Developer",
          "Problem Solver", 
          "Tech Enthusiast",
          "Based in British Columbia"
        ]}
        typeSpeed={50}
        backSpeed={30}
        backDelay={2000}
        loop
        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
      />
    </motion.div>
    
    <motion.p
     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{duration:0.6, delay: 1}}
    className='max-w-2xl mx-auto font-Ovo'>
    Aspiring software engineer with a strong foundation in computer science, data analytics, and full-stack development. Passionate about building innovative solutions that bridge technology and real-world applications. Seeking opportunities to apply analytical and problem-solving skills in a dynamic tech environment
    </motion.p>

    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
<motion.a
 initial={{y: 30, opacity: 0}}
 whileInView={{y: 0, opacity: 1}}
 transition={{duration:0.6, delay: 1.2}}
href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:bg-gray-800 transition-colors duration-300'>
Contact Me   
<Image src={assets.right_arrow_white} alt="" className="w-4" /> 
</motion.a>
    </div>
</div>
  )
}

export default header
