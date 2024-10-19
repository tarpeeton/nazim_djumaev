import Title from '@/ui/Title'
import { FC } from 'react'
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';




const SomeFrom: FC = () => {
    return (
        <div className='mx-[16px] mt-[100px] 2xl:mt-[170px] 2xl:mx-[180px] rounded-[20px] 2xl:rounded-[30px] flex flex-col 2xl:flex-row 2xl:justify-between'>
            <div className='flex flex-col'>
                
                <Title  text={{ru: "Записаться на консультацию" , uz: "Konsultatsiya uchun yozilish"}}/>

                <p className='text-[16px] font-manrope text-[#686868] 2xl:text-[20px] mt-[13px]'>
                    Заполните форму чтобы записаться на консультацию
                </p>
                <div className='flex flex-row mt-[21px] gap-[10px]'>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaInstagram className='text-[#476E81]' size={25}/>
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaTelegramPlane className='text-[#476E81]' size={25}/>
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaWhatsapp className='text-[#476E81]' size={25}/>
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaPhone className='text-[#476E81]' size={25}/>
                    </button>
                </div>
            </div>
            <div>
            


            </div>
        </div>
    )
}

export default SomeFrom