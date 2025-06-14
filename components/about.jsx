import { assets, infoList, toolsData } from '@/assets/assets'
import Image from "next/image";
import React from 'react'
import { motion } from "framer-motion"
import { useTheme } from 'next-themes'

const about = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
<motion.div 
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{duration: 1}}
id='about' className='w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 scroll-mt-20'>
<motion.h4
initial={{opacity: 0, y: -20}}
whileInView={{opacity: 1, y: 0}}
transition={{duration: 0.5, delay: 0.3}}
className='text-center mb-2 text-lg font-Ovo'>Introduction</motion.h4>
      <motion.h2
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>

        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <motion.div
              initial={{opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>

            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'  />
        </motion.div>

        <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>

        <p className='mb-10 max-w-2xl font-Ovo'>

        My passion for computer science began unexpectedly at the age of 12 with Call of Duty. While most were eager about the new maps or weapons, I was drawn to the intricate details of bug fixes and patch notes. These seemingly minor adjustments illuminated the vast world of software engineering for me. Discovering how a small code change could significantly impact gameplay sparked a passion. I wanted to understand the intricate mechanics behind it, leading me down the path of software development and engineering.<br></br>
        <br></br>
During high school, after a couple of coding classes, I realized I was hooked on Computer Science. I decided then and there that I wanted to build software that could make a difference for people everywhere.
<br></br><br></br>
Currently, I'm studying Computer Science at the University of British Columbia.
        </p>
        <motion.ul
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 1}}
        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon,iconDark, title, description}, index)=>(
                <motion.li
                whileHover={{scale: 1.05}}
                key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'><Image src={isDarkMode ? iconDark :icon} alt={title} className='w-7 mt-3'  />
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
            ))}
        </motion.ul>

        <motion.h4 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.5 }}
  className="my-6 text-gray-700 font-Ovo dark:text-white/80"
>
  Tools I use
</motion.h4>

<motion.ul 
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 1 }}
  className="grid grid-cols-5 gap-4 sm:gap-6"
>
  {toolsData.map((tool, index) => (
    <motion.li
      whileHover={{ scale: 1.1 }}
      className="flex items-center justify-center w-16 sm:w-20 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
      key={index}
    >
      <Image src={tool} alt="tool" className="w-8 sm:w-10"/>
    </motion.li>
  ))}
</motion.ul>


        </motion.div>

        </motion.div>



    </motion.div>
  )
}

export default about
