"use client"
import useLocale from '@/hooks/useLocale'
import Title from '@/ui/Title'
import { FC } from 'react'
import { ExperienceData } from '@/constants/Experience'




const Experience: FC = () => {
    const locale = useLocale()

    return (
        <div className='mt-[100px] 2xl:mt-[170px] px-[16px] 2xl:px-[180px]'>
            <div className='border-b border-[#E3E3E3] mt-[15px]'>
                <Title text={{ ru: "Опыт и образование", uz: "Tajriba va ta'lim" }} />
                <div className='text-[18px] 2xl:text-[20px] text-[#949494] 2xl:mt-[20px] font-medium font-manrope 2xl:pb-[40px]  2xl:w-[60%]'>
                    {locale === 'ru' ? 'Регулярно проходит стажировки за границей и участвует в конгрессах, конференциях и мастер-классах по специальности' : "Chet elda muntazam ravishda amaliyot o'taydi va o'z mutaxassisligi bo'yicha kongresslar, konferentsiyalar va mahorat darslarida qatnashadi"}
                </div>
            </div>

            <div className='flex flex-col  2xl:gap-[40px]'>
                {ExperienceData.map((item) => (
                    <div key={item.id} className='flex flex-col 2xl:gap-[80px] py-[40px] mdl:items-center border-b border-[#E3E3E3] mdl:flex-row items-start'>
                        <div className='2xl:w-[20%]'>
                            <p className='2x:text-[24px] font-extrabold font-manrope text-myBlue'>{item.date[locale]}</p>
                        </div>
                        <div className='2xl:w-[25%] mt-[15px] 2xl:mt-0'>
                            <p className='text-[18px] 2xl:text-[20px] text-titleDark font-medium font-manrope'>
                                {item.itemOne[locale]}
                            </p>
                        </div>
                        <div className='2xl:w-[40%]'>
                            <p className='text-[18px] 2xl:text-[20px] text-titleDark font-medium font-manrope'>
                                {item.itemTwo[locale]}
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Experience