import {FC} from 'react';
import Image from 'next/image';
import Word from '@/public/Wod.png'
// import NozimImage from '@/public/nozim.png'
import Arrow from '@/public/Arrow.png'



const Banner: FC = () => {
  return (
    <div className=' mdl:mx-[20px] 2xl:mx-[180px] mt-[10px] relative w-full overflow-hidden'>
        <div className='flex flex-col w-full z-[999] relative'>
            <h1 className=' w-full  text-[70px] mdl:text-[] text-center 2xl:text-[170px] text-titleDark font-bold font-manrope'>Нозим Жумаев</h1>
            <p className=' mx-[13px] 2xl:mx-0 text-center mt-[10px] text-[14px] font-semibold  text-[#686868]  2xl:text-[18px]'>Опытный бариатрический хирург с многолетней практикой. Специализируется на передовых методах хирургического лечения ожирения и смежных проблем</p>
        </div>
        
       
       <div className="w-full  absolute top-0  h-full bg-gradient-to-r rounded-lg shadow-lg from-[#9AE1FF80] to-[#6CF5DD80]"></div>
        <div className='relative mt-[10px] z-[9999]'>
        {/* <Image  src={NozimImage} alt='Ellipse 5' width={800} height={900} className='object-contain w-full ml-[-80px] h-full relative z-[999]'/> */}
          <div className='absolute bottom-0'>
          <Image  src={Word} alt='Ellipse 5' width={800} height={900} className='object-contain w-full h-full'/>
          </div>
          <div className='absolute z-[9999] bottom-[20px] flex flex-row w-full items-center gap-[20px] justify-center'>
          <Image  src={Arrow} alt='Ellipse 5' width={130} height={100} className='object-contain w-[130px] h-full mt-[50px]'/>
            <button className=' bg-white text-[17px] font-extrabold text-titleDark rounded-full w-[130px] h-[130px] flex items-center justify-center px-[10px] font-manrope'>
            Записаться на прием
            </button> 
          </div>
        </div>
    </div>
  );
};

export default Banner;