"use client"
import Title from '@/ui/Title'
import { FC, useState } from 'react'
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'
import { FloatingLabelInput } from '@/ui/form/input'
import { CustomSelect } from '@/ui/form/select'
import Image from 'next/image'
import { consultation } from '@/lib/api'
import SuccessModal from '../Modal/Success'

const SomeFrom: FC = () => {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [service, setService] = useState<string>('')
    const [success , setSuccess] = useState(false)
    const handleOpenSuccess = () => setSuccess(!success)
    const handleSubmitService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await consultation(
                name,
                phone,
                service,
                "consultation"
            );
            setSuccess(true)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mx-[16px] mt-[100px] 2xl:mt-[170px] 2xl:mx-[180px] rounded-[20px] 2xl:rounded-[30px] flex flex-col 2xl:flex-row 2xl:justify-between relative overflow-hidden py-[30px] px-[25px] 2xl:py-[50px] 2xl:px-[50px]'>

           
            <div  className='absolute bottom-0 left-0 w-[80%] h-full'>
            <Image src='https://ucarecdn.com/a593e56b-f9a6-479a-b49e-06ebedfd0e06/-/preview/1000x344/' alt='Ellipse 5' width={2000} height={1400} className=' w-full h-full ' />
            </div>
           

            <div className='flex flex-col relative z-50'>

                <Title text={{ ru: "Записаться на консультацию", uz: "Konsultatsiya uchun yozilish" }} />
                <p className='text-[16px] 2xl:w-[50%] font-manrope text-[#686868] 2xl:text-[20px] mt-[13px]'>
                    Заполните форму чтобы записаться на консультацию
                </p>
                <div className='flex flex-row mt-[21px] gap-[10px]'>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaInstagram className='text-[#476E81]' size={25} />
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaTelegramPlane className='text-[#476E81]' size={25} />
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaWhatsapp className='text-[#476E81]' size={25} />
                    </button>
                    <button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaPhone className='text-[#476E81]' size={25} />
                    </button>
                </div>
            </div>
            <SuccessModal  visible={success} close={handleOpenSuccess} />
            <div className='2xl:w-[50%] 2xl:flex 2xl:justify-center mt-[40px] relative z-50 2xl:mt-0'>

                <form onSubmit={handleSubmitService} className='2xl:w-[70%] flex flex-col gap-[20px]'>
                    <FloatingLabelInput errorMessage={{ru: 'это поля обязательно' , uz: ""}} label='ФИО' id='1' type='name'
                        setValue={setName} />
                    <FloatingLabelInput errorMessage={{ru: 'это поля обязательно' , uz: ""}} label='Номер телефона' id='2' type='phone'
                        setValue={setPhone} />
                    <CustomSelect
                        setService={setService}
                        label="Выберите услугу"
                        id="service"
                        options={[
                            { value: 'consultation', label: 'Консультация' },
                            { value: 'diagnostics', label: 'Диагностика' },
                            { value: 'treatment', label: 'Лечение' },
                        ]}
                    />
                    <button type='submit' className='rounded-full bg-white py-[15px] px-[20px] w-[80%] mx-auto text-center text-[16px] 2xl:text-[18px] text-[#5A9B8E] font-bold font-manrope 2xl:w-[70%] mt-[30px] 2xl:mt-[40px] 2xl:mx-0'>
                        Отправить
                    </button>
                </form>

            </div>
            <div  className='absolute bottom-0 right-0 w-[70%] h-full'>
            <Image src='https://ucarecdn.com/f3fa6410-dc84-45ff-93ea-f91fc7fe8841/-/preview/1000x354/' alt='Ellipse 5' width={2000} height={1400} className=' w-full h-full '  style={{right: '0px'}}/>
            </div>
        </div>
    )
}

export default SomeFrom