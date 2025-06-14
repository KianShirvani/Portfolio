import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
          <FaEnvelope className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}/>
          <a href="mailto:kshirvan@student.ubc.ca" className="hover:text-blue-500 transition-colors duration-300">
            kshirvan@student.ubc.ca
          </a>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Copy Right 2025 Kian Shirvani</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              target='_blank' 
              href="https://github.com/KianShirvani"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
              Github
            </motion.a>
          </li>
          <li>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              target='_blank' 
              href="https://www.linkedin.com/in/kianshirvani/"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default footer
