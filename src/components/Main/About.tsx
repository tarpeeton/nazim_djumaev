import Title from '@/ui/Title'
import Image from 'next/image'
import { FC } from 'react'
import ImageAbout from '@/public/Main/Image.png'

const About: FC = () => {
    return (
        <div className='mt-[100px] 2xl:mt-[170px] mx-[16px] 2xl:mx-[180px]'>
            <p className='text-[40px] 2xl:text-[40px] text-titleDark font-extrabold'>Обо мне</p>
            <div className='flex flex-col items-center 2xl:flex-row mt-[50px]  2xl:justify-between'>
                <div className='rounded-[20px] overflow-hidden 2xl:w-[50%]'>
                    <Image src={ImageAbout} alt='About image' width={710} height={620} className='w-full h-full' />
                </div>
                <div className='flex flex-col mt-[25px] 2xl:mt-0 2xl:order-[-1] 2xl:w-[45%]'>
                    <p className='text-[#686868] font-manrope text-[15px] font-medium 2xl:text-[20px]'>Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии. Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения

                        </p>
                        <p className='mt-[15px] font-manrope text-[#686868] text-[15px] font-medium 2xl:text-[20px]'>
                        Врач регулярно повышает квалификацию на международных конференциях и семинарах. Имеет обширный опыт в проведении сложных операций, включая гастропластику и шунтирование. Особое внимание уделяет минимизации рисков и качественной реабилитации пациентов
                        </p>
                        <p className='text-[#686868] mt-[10px] font-manrope text-[15px] font-medium 2xl:text-[20px]'>Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии. Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения

                        </p>
                    <button className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
                    Записаться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About