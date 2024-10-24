'use client'
import Title from '@/ui/Title'
import Image from 'next/image'
import { FC, useState } from 'react'
import ImageAbout from '@/public/Main/Image.png'
import QuestionModal from '../Modal/Request'
import useLocale from '@/hooks/useLocale'



const Banner: FC = () => {
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const SwitcherModal = () => setOpen(!open)

    return (
        <div className=' mx-[16px] 2xl:mx-[180px]'>
            <div className='flex flex-col items-center 2xl:flex-row   2xl:justify-between'>
                <div className='rounded-[20px] overflow-hidden 2xl:w-[50%] 2xl:h-[600px] 2xl:mt-[-60px]'>
                    <Image src={ImageAbout} alt='About image' quality={100} width={710} height={620} className='w-full h-full object-cover' />
                </div>
                <div className='flex flex-col mt-[25px] 2xl:mt-0 2xl:order-[-1] 2xl:w-[45%] 2xl:pt-[100px] '>
                    <Title text={{ ru: "Обо мне", uz: "Men haqimda" }} />
                    <p className='text-[#686868] font-manrope text-[15px] font-medium 2xl:text-[19px] 2xl:mt-[20px]'>
                         {locale  === 'ru' ? " Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии.Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения" : "Nozim Jumaev-jarrohlik sohasida 10 yildan ortiq tajribaga ega bariatrik jarroh. Semizlik va metabolik kasalliklar bilan bog'liq muammolarni hal qilishga ixtisoslashgan. Uning asosiy maqsad-bemorlarga professional davolash usullari orqali sog'lig'ini tiklashga yordam berish" }
                    </p>
                    <p className='mt-[15px] font-manrope text-[#686868] text-[15px] font-medium 2xl:text-[19px]'>
                         {locale  === 'ru' ? ' Врач регулярно повышает квалификацию на международных конференциях и семинарах. Имеет обширный опыт в проведении сложных операций, включая гастропластику и шунтирование. Особое внимание уделяет минимизации рисков и качественной реабилитации пациентов' : "Shifokor xalqaro konferentsiyalar va seminarlarda muntazam ravishda malaka oshiradi. Keng qamrovli gastroplastika va bypass operatsiyasini o'z ichiga olgan murakkab operatsiyalarni bajarish tajribasi. Maxsus e'tibor xatarlarni minimallashtirish va bemorlarni sifatli reabilitatsiya qilishga bag'ishlangan" }

                    </p>

                    <button onClick={SwitcherModal} className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
                        {locale  === 'ru' ? "Записаться" : 'Yozilish' }
                    </button>
                    <QuestionModal visible={open} close={SwitcherModal} />
                </div>
            </div>
        </div>
    )
}

export default Banner