'use client'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const HeroContent = () => {


  return (
   <motion.div
   initial="hidden"
   animate="visible"
   className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
   >
     <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
      <motion.div
      variants={slideInFromTop}
      className='Welcome-box py-[8px] px-[4px] border border-[#7042fbb8] opacity-[0.9] '
      >
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
        <h1 className='Welcome-text text-[13px]'> Call Luigi  07553657979</h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
        <span>
        Providing <span className='text-transparent bg-clip-text bg-gradient-to-r
         from-purple-500 to-cyan-500'> the best </span>
         quality services
         </span>
      </motion.div>
      <motion.p
      variants={slideInFromLeft(0.8)}
      className='text-lg text-gray-400 my-5 max-w-[600px]'
      >
       We&apos;re Merseyside Mobile Auto Locksmith,qualified engineers with experience,
       we will came to your workplace or home,saving you having to take day off to go to dealer;

      </motion.p>
      <motion.a 
      variants={slideInFromLeft(1)}
      className=' py-2 button-primary text-center text-white cursor-pointer
       rounded-lg max-w-[200px]'>
        Learn More!
       </motion.a>
     </div>
     <motion.div
     variants={slideInFromRight(0.8)}
     className='w-full h-full flex justify-center items-center'
     >
      <Image src='/locksmith5.png' alt='img'
       height={850}
       width={750}
       className='rounded-full'
      />
     </motion.div>
       </motion.div>
   
  )
}

export default HeroContent