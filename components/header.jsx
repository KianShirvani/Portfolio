import { assets } from '@/assets/assets'
import Image from "next/image";
import React from 'react'

function header() {
  return (
<div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
  <div>
    <Image src={assets.profile_img} alt="" className="mx-auto rounded-full w-32" />

    <h3 className="mt-4 mx-auto flex items-end justify-center gap-2 text-xl md:text-2xl mb-3 font-Ovo">
  Hi! I'm Kian Shirvani 
  <Image src={assets.hand_icon} alt="" className="w-6" />
</h3>


    <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Full Stack developer  Full Stack developer </h1>
    <p className='max-w-2xl mx-auto font-Ovo'>
    Full Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developer
    Full Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developerFull Stack developer
    Full Stack developerFull Stack developerFull Stack developerFull Stack developer
    </p>

    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
<a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>Contact Me   <Image src={assets.right_arrow_white} alt="" className="w-4" /> </a>


    </div>
  </div>
</div>

  )
}

export default header
