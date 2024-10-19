import Image from 'next/image'
import { FC } from 'react'
import { Link } from '@/i18n/routing'
import { MdOutlineNavigateNext } from "react-icons/md"
import Title from '@/ui/Title'


const Recomnedations: FC = () => {
    return (
        <div className='mx-[16px] 2xl:mx-[180px] mt-[100px] 2xl:mt-[170px]'>
            
            <Title  text={{ru: "Рекомендации" , uz: "Maslaxatlar"}}/>


            <div className='flex flex-col gap-[30px] mt-[20px] 2xl:mt-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:justify-between 2xl:gap-[10px]'>
                <div className='2xl:w-[32%]'>
                    <div className='rounded-[20px] w-full '>
                        <Image src='https://ucarecdn.com/3fafa2a8-fcb9-41b0-b2f7-b1effcff84b4/-/preview/467x300/' alt='' width={600} height={800} className='w-full h-full object-cover ' />
                    </div>
                    <div className='mt-[10px] relative 2xl:pb-[60px]'>
                        <p className='text-[20px] 2xl:text-[24px] font-bold text-titleDark'>Подготовка к операции</p>
                        <p className='text-[15px] 2xl:text-[18px] font-medium text-[#949494] mt-[8px]'>
                            Советы по диете, физической активности и обследованиям
                        </p>
                        <Link href='hhs' className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                            Перейти
                            <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                        </Link>
                    </div>
                </div>
                <div className='2xl:w-[32%]'>
                    <div className='rounded-[20px] w-full '>
                        <Image src='https://ucarecdn.com/d869fafd-da2d-40eb-8cb5-16cf1b2924c9/-/preview/467x300/' alt='' width={600} height={800} className='w-full h-full object-cover ' />
                    </div>
                    <div className='mt-[10px] relative 2xl:pb-[60px]'>
                        <p className='text-[20px] 2xl:text-[24px] font-bold text-titleDark'>Постоперационный период</p>
                        <p className='text-[15px] 2xl:text-[18px] font-medium text-[#949494] mt-[8px]'>
                            Рекомендации по восстановлению, питанию и активности
                        </p>
                        <Link href='hhs' className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                            Перейти
                            <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                        </Link>
                    </div>
                </div>
                <div className='2xl:w-[32%]'>
                    <div className='rounded-[20px] w-full '>
                        <Image src='https://ucarecdn.com/2b4ea8b1-49b4-4b8d-a849-42e14db1e67d/-/preview/467x300/' alt='' width={600} height={800} className='w-full h-full object-cover ' />
                    </div>
                    <div className='mt-[10px] 2xl:pb-[60px] relative'>
                        <p className='text-[20px] 2xl:text-[24px] font-bold text-titleDark'>Долгосрочные советы</p>
                        <p className='text-[15px] 2xl:text-[18px] font-medium text-[#949494] mt-[8px]'>
                            Как поддерживать результаты операции и вести здоровый образ жизни
                        </p>
                        <Link href='hhs' className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                            Перейти
                            <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                        </Link>
                    </div>
                </div>

            </div>


            <div className='mt-[30px] 2xl:mt-[20px] w-full flex items-center justify-center'>
                <Link href='/service' className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px]  text-center mx-auto'>
                    Все рекомендации
                </Link>
            </div>

        </div>
    )
}

export default Recomnedations