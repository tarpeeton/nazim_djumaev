import { FC } from 'react'
import { MdLocalHospital } from 'react-icons/md'
import { BsStars } from "react-icons/bs"
import Title from '@/ui/Title'
import { GiHeartShield } from "react-icons/gi";


interface IAdvantages {
    locale: "ru" | "uz";
}

const Advantages: FC<IAdvantages> = ({locale}) => {
    return (
        <div className='mt-[100px]  2xl:mt-[170px] '>
           
            <Title  text={{ru: "Преимущества процедуры" , uz: "Jarayonning afzalliklari"}}/>
            <div className='flex flex-col 2xl:flex  gap-[20px] 2xl:flex-row 2xl:justify-between 2xl:gap-[10px] mt-[30px] 2xl:mt-[50px]'>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <GiHeartShield className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>
                            
                            {locale === 'ru' ?  'Безопасность' : "Xavsizlik" }
                            </p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>
                            
                            {locale === 'ru' ?  'Более 10 лет практики в области бариатрической хирургии, успешные операции с отличными результатами' : "10 yildan ortiq bariatrik jarrohlik amaliyoti, ajoyib natijalar bilan muvaffaqiyatli operatsiyalar" }
                            </p>
                    </div>
                </div>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <BsStars className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>
                            
                            {locale === 'ru' ?  'Эффективность' : "Samaradorlik" }
                            
                            </p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>
                       
                        {locale === 'ru' ?  ' Высокая эффективность в долгосрочной перспективе для поддержания здорового веса' : "Sog'lom vaznni saqlash uchun uzoq muddatda yuqori samaradorlik" }
                        </p>
                    </div>
                </div>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <MdLocalHospital className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>
                        {locale === 'ru' ?  ' Минимальная инвазивность' : "Minimal invazivlik" }

                        </p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>
                        
                        {locale === 'ru' ?  'Минимально инвазивные методики, снижающие время восстановления и риски осложнений' : "Tiklanish vaqtini va asoratlar xavfini kamaytiradigan minimal invaziv usullar" }

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages