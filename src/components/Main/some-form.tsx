'use client'
import Title from '@/ui/Title'
import { FC, useState, useEffect, useRef } from 'react'
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'
import { FloatingLabelInput } from '@/ui/form/input'
import { CustomSelect } from '@/ui/form/select'
import Image from 'next/image'
import { consultation } from '@/lib/api'
import SuccessModal from '../Modal/Success'
import { Flex, Spin } from 'antd'
import { Link } from '@/i18n/routing'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useLocale from '@/hooks/useLocale'


gsap.registerPlugin(ScrollTrigger)

const SomeFrom: FC = () => {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [service, setService] = useState<string>('')
    const [success, setSuccess] = useState(false)
    const handleOpenSuccess = () => setSuccess(!success)
    const [loading, setloading] = useState(false)
    const locale = useLocale()
    const formRef = useRef<HTMLDivElement | null>(null)

    const handleSubmitService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)
        try {
           await consultation(name, phone, service, "consultation")
            setloading(false)
            setSuccess(true)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%', // Анимация начнется, когда форма попадет в 80% видимости экрана
                    toggleActions: 'play none none none',
                }
            })

            timeline
            .from(".title", { opacity: 0, y: -40, duration: 0.3, ease: "power3.out" })
            .from(".social-links a", { opacity: 0, y: -20, stagger: 0.3, duration: 0.3, ease: "power3.out" }, "-=0.3")
            .from(".description", { opacity: 0, y: -20, duration: 0.3, ease: "power3.out" }, "-=0.4")
            .from(".form-input", { opacity: 0, y: 20, stagger: 0.3, duration: 0.3, ease: "steps(12)" }, "-=0.4")
            .from(".submit-button", { opacity: 0, scale: 0.8, duration: 0.4, ease: "power3.out" }, "-=0.4")
        }, formRef)

        return () => {
            ctx.revert() // очищает GSAP анимацию при размонтировании компонента
        }
    }, [])

    return (
        <div className='mx-[16px] mt-[100px] 2xl:mt-[170px] 2xl:mx-[180px] rounded-[20px] 2xl:rounded-[30px] flex flex-col 2xl:flex-row 2xl:justify-between relative overflow-hidden py-[30px] px-[25px] 2xl:py-[50px] 2xl:px-[50px]' ref={formRef}>

            <div className='absolute bottom-0 left-0 w-[80%] h-full'>
                <Image src='https://ucarecdn.com/a593e56b-f9a6-479a-b49e-06ebedfd0e06/-/preview/1000x344/' alt='Ellipse 5' width={2000} height={1400} className='w-full h-full ' />
            </div>

            <div className='flex flex-col relative z-50'>
                <div className='title'>
                    <Title text={{ ru: "Записаться на консультацию", uz: "Konsultatsiya uchun yozilish" }} />
                </div>
                <p className='description text-[16px] 2xl:w-[50%] font-manrope text-[#686868] 2xl:text-[20px] mt-[13px]'>

                    {locale === 'ru' ? 'Заполните форму чтобы записаться на консультацию !' : "Konsultatsiyag Yozilish Uchun Formani Toldiring !"}
                </p>
                <div className='social-links flex flex-row mt-[21px] gap-[10px]'>
                    <Link href='https://www.instagram.com/drnozim_adxamovich/' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaInstagram className='text-[#476E81]' size={25} />
                    </Link>
                    <Link href='https://t.me/nozim_adxamovich' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaTelegramPlane className='text-[#476E81]' size={25} />
                    </Link>
                    <a href='https://wa.me/998901107887?text=Здравствуйте, у меня есть вопрос' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaWhatsapp className='text-[#476E81]' size={25} />
                    </a>
                    <a href='tel:+998901107887' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
                        <FaPhone className='text-[#476E81]' size={25} />
                    </a>
                </div>
            </div>

            <SuccessModal visible={success} close={handleOpenSuccess} />

            <div className='2xl:w-[50%] 2xl:flex 2xl:justify-center mt-[40px] relative z-50 2xl:mt-0'>
                <form onSubmit={handleSubmitService} className='2xl:w-[70%] flex flex-col gap-[20px]'>
                    <div className='form-input'>
                        <FloatingLabelInput errorMessage={{ ru: 'это поля обязательно', uz: "majburiy maydon" }} label={locale === 'ru' ? 'ФИО' : "FISH"} id='1' type='name'
                            setValue={setName} />
                    </div>
                    <div className='form-input'>
                        <FloatingLabelInput errorMessage={{ ru: 'это поля обязательно', uz: "majburiy maydon" }}
                            label={locale === 'ru' ? 'Номер телефона' : "Telefon Raqamingiz"}
                            id='2' type='phone'
                            setValue={setPhone} />
                    </div>

                    <div className='form-input'>
                        <CustomSelect
                            setService={setService}
                            label={locale === 'ru' ? 'Выберите услугу' : "Xizmatni Tanlang"}
                            id="service"
                            options={locale === 'ru' ? [
                                { value: 'Консультация', label: 'Консультация' },
                                { value: 'Диагностика', label: 'Диагностика' },
                                { value: 'Лечение', label: 'Лечение' },
                            ] : [
                                { value: 'Konsultatsiya', label: 'Konsultatsiya' },
                                { value: 'Diagnostika', label: 'Diagnostika' },
                                { value: 'Davolash', label: 'Davolash' },
                            ]}
                        />

                    </div>
                    <button type='submit' className='submit-button rounded-full bg-white py-[15px] px-[20px] w-[80%] mx-auto text-center text-[16px] 2xl:text-[18px] text-[#5A9B8E] font-bold font-manrope 2xl:w-[70%] mt-[30px] 2xl:mt-[40px] 2xl:mx-0 flex items-center justify-center'>
                        {loading ? (
                            <Flex align="center" gap="middle" className='flex items-center justify-center'>
                                <Spin className='w-[30px]' />
                            </Flex>
                        ) : (locale === 'ru' ? 'Отправить' : 'Yuborish')}
                    </button>
                </form>
            </div>

            <div className='absolute bottom-0 right-0 w-[70%] h-full'>
                <Image src='https://ucarecdn.com/f3fa6410-dc84-45ff-93ea-f91fc7fe8841/-/preview/1000x354/' alt='Ellipse 5' width={2000} height={1400} className='w-full h-full ' style={{ right: '0px' }} />
            </div>
        </div>
    )
}

export default SomeFrom
