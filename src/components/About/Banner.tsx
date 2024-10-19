import Title from '@/ui/Title'
import Image from 'next/image'
import { FC } from 'react'
import ImageAbout from '@/public/Main/Image.png'

const Banner: FC = () => {
    return (
        <div className=' mx-[16px] 2xl:mx-[180px]'>
            <div className='flex flex-col items-center 2xl:flex-row   2xl:justify-between'>
                <div className='rounded-[20px] overflow-hidden 2xl:w-[50%] 2xl:h-[600px] 2xl:mt-[-60px]'>
                    <Image src={ImageAbout} alt='About image' quality={100} width={710} height={620} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col mt-[25px] 2xl:mt-0 2xl:order-[-1] 2xl:w-[45%] 2xl:pt-[100px] '>
            <Title  text={{ru: "Обо мне" , uz: "Men haqimda"}} />
                    <p className='text-[#686868] font-manrope text-[15px] font-medium 2xl:text-[19px] 2xl:mt-[20px]'>Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии. Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения

                        </p>
                        <p className='mt-[15px] font-manrope text-[#686868] text-[15px] font-medium 2xl:text-[19px]'>
                        Врач регулярно повышает квалификацию на международных конференциях и семинарах. Имеет обширный опыт в проведении сложных операций, включая гастропластику и шунтирование. Особое внимание уделяет минимизации рисков и качественной реабилитации пациентов
                        </p>
                       
                    <button className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
                    Записаться
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner