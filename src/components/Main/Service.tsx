'use client'
import Title from '@/ui/Title'
import { FC, useState, useEffect, useRef  , useMemo} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from '@/i18n/routing'
import { MdOutlineNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { data } from '@/constants/Service'


gsap.registerPlugin(ScrollTrigger)




interface IServiceProps {
    show: boolean
}

const Service: FC<IServiceProps> = ({ show }) => {
    const [active, setActive] = useState('all')
    const [number, setSliceNumber] = useState(6)
    const locale = useLocale()
    const serviceRef = useRef<HTMLDivElement | null>(null)


    
    const serviceItems = locale === 'ru' ? [
        { name: 'Все услуги', id: 'all' },
        { name: 'Бариатрическая хирургия', id: 'bariatric' },
        { name: 'Лапароскопическая хирургия', id: 'laparoscopic' },
        { name: 'Эстетическая хирургия', id: 'aesthetic' }
    ] : [
        { name: 'Barcha xizmatlar', id: 'all' },
        { name: 'Bariatrik jarrohlik', id: 'bariatric' },
        { name: 'Laparoskopik jarrohlik', id: 'laparoscopic' },
        { name: 'Estetik jarrohlik', id: 'aesthetic' }
    ];
    

    const filteredData = useMemo(() => {
        if (active === 'all') return data
        return data.filter(item => item.serviceID === active)
    }, [active])
   

    // Анимация с GSAP и ScrollTrigger
    useEffect(() => {
        const elements = serviceRef.current?.querySelectorAll('.service-item')

        if (elements) {
            gsap.fromTo(
                elements,
                { opacity: 0, y: 50 }, // Начальное состояние (прозрачность 0, смещение по оси Y)
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.3,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: serviceRef.current, // Триггер для ScrollTrigger
                        start: 'top 80%', // Когда верхняя часть блока в зоне 80% высоты окна
                        toggleActions: 'play none none reset', // Повторять анимацию при каждом показе
                    },
                }
            )
        }
    }, [filteredData])

    const handleClick = (id: string) => {
        setActive(id)
    }

    const slicedNumber = () => {
        setSliceNumber(prev => Math.min(prev + 6, filteredData.length))
    }

    const sliceNumberToPrev = () => {
        setSliceNumber(prev => Math.max(prev - 6, 6))
    }

    return (
        <div ref={serviceRef} className='mx-[16px] 2xl:mx-[180px]'>
            <Title text={{ ru: "Услуги", uz: "Xizmatlar" }} />
            <div className='flex flex-col mt-[50px] 2xl:mt-[40px] w-full'>
                <div className='2xl:hidden'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        modules={[Navigation, Pagination, Autoplay]}
                        className='w-full 2xl:hidden'
                    >
                        {serviceItems.map((name, index) => (
                            <SwiperSlide key={index} className='w-full'>
                                <div>
                                    <button
                                        onClick={() => handleClick(name.id)}
                                        className={`w-full pb-[10px] text-[13px]  font-bold font-manrope 2xl:text-[22px] 2xl:font-semibold ${active === name.id
                                            ? 'border-b-[3px] border-[#27BEFF] text-[#27BEFF]'
                                            : 'text-[#3E3E3E]'
                                            }`}
                                    >
                                        {name.name}
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='flex-row hidden 2xl:flex w-full'>
                    {serviceItems.map((name, index) => (
                        <button
                            onClick={() => handleClick(name.id)}
                            key={index}
                            className={`pb-[10px] text-[13px] px-[30px] font-bold font-manrope 2xl:text-[18px] 2xl:font-semibold border-b-[2px] ${active === name.id
                                ? 'border-[#27BEFF] text-[#27BEFF]'
                                : 'text-[#3E3E3E]'
                                }`}
                        >
                            {name.name}
                        </button>
                    ))}
                </div>

                <div className='flex flex-col gap-[20px] mt-[30px] 2xl:flex 2xl:flex-row 2xl:flex-wrap 2xl:mt-[60px]'>
                    {filteredData.slice(0, number).map((data, index) => (
                        <div key={index} className='service-item rounded-[15px] border border-[#E3E3E3] py-[25px] px-[20px] 2xl:w-[32%] 2xl:pb-[60px] relative'>
                            <p className='text-[20px] 2xl:text-[24px] font-bold'>
                                {data.name[locale]}
                            </p>
                            <p className='text-[#686868] 2xl:text-[18px] font-semibold mt-[12px]'>
                            {`${data.description[locale].length > 94 ? data.description[locale].slice(0, 94) + '...' : data.description[locale]}`}

                            </p>

                            <Link href={`/services/${data.slug}`} className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                                
                                {locale === 'ru' ? "Подробнее" : "Batafsil"}
                                <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                            </Link>
                        </div>
                    ))}
                </div>

                {show && filteredData.length > number && (
                    <Link href='/services' className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px] text-center mx-auto'>
                        
                        {locale === 'ru' ? "Все услуги" : "Barcha Xizmatlar"}
                    </Link>
                )}

                {!show && filteredData.length > 6 && (
                   <button 
                   onClick={number < filteredData.length ? slicedNumber : sliceNumberToPrev} 
                   className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px] text-center mx-auto'
               >
                   {number < filteredData.length 
                       ? (locale === 'ru' ? 'Показать еще' : "Ko'proq Ko'rsatish") 
                       : (locale === 'ru' ? 'Скрыть' : 'Yopish')}
               </button>
               
                )}
            </div>
        </div>
    )
}

export default Service
