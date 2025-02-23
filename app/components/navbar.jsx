import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <a href="#">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul className="flex space-x-6">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experiences">Work Experiences</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div>
          <a href="#contact" className="flex items-center space-x-2">
            <span>Contact</span>
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>
        </div>
      </nav>
    </>
  )
}

export default navbar
