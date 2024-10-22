'use client'
import Title from '@/ui/Title'
import Image from 'next/image'
import { FC, useState } from 'react'
import QuestionModal from '../Modal/Request'




const About: FC = () => {
    const [open , setOpen] = useState(false)

    const SwitcherModal = () => setOpen(!open)


    return (
        <div className=' mx-[16px] 2xl:mx-[180px]'>
            <Title  text={{ru: "Обо мне" , uz: "Men haqimda"}}/>
            <div className='flex flex-col items-center 2xl:flex-row mt-[50px]  2xl:justify-between'>
                <div className='rounded-[20px] overflow-hidden 2xl:w-[50%]'>
                    <Image src='https://ucarecdn.com/2ee5fd3d-0ce8-4531-93a3-cab32b62f939/-/preview/710x639/' alt='About image' width={710} quality={100} height={639} className='w-full h-full' />
                </div>
                <div className='flex flex-col mt-[25px] 2xl:mt-0 2xl:order-[-1] 2xl:w-[45%]'>
                    <p className='text-[#686868] font-manrope text-[15px] font-medium 2xl:text-[20px]'>Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии. Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения

                        </p>
                        <p className='mt-[15px] font-manrope text-[#686868] text-[15px] font-medium 2xl:text-[20px]'>
                        Врач регулярно повышает квалификацию на международных конференциях и семинарах. Имеет обширный опыт в проведении сложных операций, включая гастропластику и шунтирование. Особое внимание уделяет минимизации рисков и качественной реабилитации пациентов
                        </p>
                       
                    <button onClick={SwitcherModal} className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
                    Записаться
                    </button>
                    <QuestionModal  visible={open} close={SwitcherModal}/>
                </div>
            </div>
        </div>
    )
}

export default About