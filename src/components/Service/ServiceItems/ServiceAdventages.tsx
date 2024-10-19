import { FC } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { MdLocalHospital } from 'react-icons/md'
import { BsStars } from "react-icons/bs"
import Title from '@/ui/Title'
import { GiHeartShield } from "react-icons/gi";

const Advantages: FC = () => {
    return (
        <div className='mt-[100px]  2xl:mt-[170px] '>
           
            <Title  text={{ru: "Преимущества процедуры" , uz: "Jarayonning afzalliklari"}}/>


            <div className='flex flex-col 2xl:flex  gap-[20px] 2xl:flex-row 2xl:justify-between 2xl:gap-[10px] mt-[30px] 2xl:mt-[50px]'>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <GiHeartShield className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>Безопасность</p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>Более 10 лет практики в области бариатрической хирургии, успешные операции с отличными результатами</p>
                    </div>
                </div>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <BsStars className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>Эффективность</p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>
                        Высокая эффективность в долгосрочной перспективе для поддержания здорового веса
                        </p>
                    </div>
                </div>
                <div className='rounded-[15px] border border-[#E3E3E3] p-[25px] 2xl:w-[33%] shadow-md cursor-pointer'>
                    <div>
                        <MdLocalHospital className='text-myBlue' size={50} />
                    </div>
                    <div className='mt-[25px]  2xl:mt-[30px]'>
                        <p className='text-[20px] 2xl:text-[22px] text-titleDark font-manrope font-bold'>
                        Минимальная инвазивность
                        </p>
                        <p className='text-[15px] 2xl:text-[18px] text-[#686868] font-manrope font-medium mt-[10px]'>
                        Минимально инвазивные методики, снижающие время восстановления и риски осложнений
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages