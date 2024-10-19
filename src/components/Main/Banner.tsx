"use client"
import { FC } from 'react'
import Image from 'next/image'
import NozimImage from '@/public/Main/nozim.png'
import Arrow from '@/public/Arrow.png'
import ElBottomTop from "@/public/Main/bottomEllipse.png"
import ElTop from "@/public/Main/topEllipse.png"
import Arrow2l from "@/public/Main/Arrow.png"
import twoLeftImage from '@/public/Main/2xl.png'
import twoRigthImage from '@/public/Main/2xlRigth.png'
import MbLeft from '@/public/Main/mbLeft.png'
import MbRigth from '@/public/Main/mbRigth.png'
import { motion } from 'framer-motion'
import { HiCursorClick } from "react-icons/hi"





const Banner: FC = () => {
  return (
    <div className='mt-[10px] relative w-full overflow-hidden'>
      <div className='flex flex-col w-full z-[9999] relative'>
        <h1 className=' w-full  text-[70px] mdl:text-[] text-center 2xl:text-[140px] text-titleDark font-bold font-manrope  uppercase'>Нозим Жумаев</h1>
        <p className=' mx-[13px] 2xl:w-[29%] 2xl:text-left 2xl:ml-[180px] 2xl:mx-0 text-center mt-[10px] text-[14px] font-semibold  text-[#686868]  2xl:text-[18px]'>Опытный бариатрический хирург с многолетней практикой. Специализируется на передовых методах хирургического лечения ожирения и смежных проблем</p>
      </div>



      <div className=' 2xl:hidden  overflow-hidden absolute bottom-0'>
        <Image src={MbLeft} alt='Ellipse 5' width={2300} height={3300} className='object-contain w-full   relative z-[999]' />
      </div>
      <div className=' 2xl:hidden  overflow-hidden absolute bottom-0 right-0'>
        <Image src={MbRigth} alt='Ellipse 5' width={2300} height={3300} className='object-contain w-full   relative z-[999]' />
      </div>


      <div className='hidden 2xl:block rounded-[20px] overflow-hidden absolute bottom-0'>
        <Image src={twoLeftImage} alt='Ellipse 5' width={2300} height={3300} className='object-contain w-full   relative z-[999]' />
      </div>
      <div className='hidden 2xl:block rounded-[20px] overflow-hidden absolute bottom-0 right-0'>
        <Image src={twoRigthImage} alt='Ellipse 5' width={2300} height={3300} className='object-contain w-full   relative z-[999]' />
      </div>




      <div className='relative mt-[10px] z-[9999] 2xl:mt-[-230px] 2xl:ml-[-100px]'>
        <Image src={NozimImage} alt='Ellipse 5' width={2300} height={3300} className='object-contain w-full  2xl:h-[800px] h-[450px] relative z-[999]' />
        {/*  ELLIPSE */}
        <div className='absolute bottom-0   left-1/2 transform -translate-x-1/2 w-[300px] 2xl:w-[900px]'>
          <Image src={ElTop} alt='Ellipse 5' width={2000} height={900} className='object-contain w-[550px]  h-full 2xl:w-[1000px]' />
        </div>
        <div className='absolute  bottom-0  2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:h-[360px]'>
          <Image src={ElBottomTop} alt='Ellipse 5' width={2000} height={1400} className='object-contain w-full h-full 2xl:w-[1500px]' />
        </div>
        {/* FORM BUTTON */}
        <div className='absolute z-[9999] 2xl:right-[-290px] bottom-[50px] 2xl:bottom-[190px] flex flex-row w-full items-center gap-[20px] justify-center 2xl:flex-col'>

          <Image src={Arrow} alt='Ellipse 5' width={130} height={100} className='block 2xl:hidden object-contain w-[130px] h-full mt-[50px]' />
          <Image src={Arrow2l} alt='Ellipse 5' width={130} height={100} className='hidden 2xl:block object-contain w-[130px] h-full mt-[50px] 2xl:rotate-[20deg]' />

          <motion.button
            className='bg-white text-[17px] font-extrabold text-titleDark rounded-full w-[130px] h-[130px] flex items-center justify-center px-[10px] font-manrope shadow-2xl relative'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Записаться на прием

            <motion.div
              className='absolute top-0 left-0 pointer-events-none'
              initial={{ x: 0, y: 0 }}
              animate={{
                x: ['20px', '60px', '75px'], // Adjust positions based on your layout
                y: ['30px', '110px', '120px'],
                rotate: [0, 30, 60] // Rotate the cursor to point towards the button
              }}
              transition={{
                ease: 'easeInOut',
                duration: 3, // Time it takes for the cursor to move to the button
                repeat: Infinity, // Loop the animation
                repeatType: 'reverse'
              }}
            >
              <HiCursorClick className='text-titleDark text-[40px] cursor-pointer' />
            </motion.div>

          </motion.button>


        </div>
      </div>
    </div>
  )
}

export default Banner