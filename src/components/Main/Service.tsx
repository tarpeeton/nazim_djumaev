"use client"
import Title from '@/ui/Title'
import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from '@/i18n/routing'
import { MdOutlineNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale'

const data = [
    {
        name: {
            ru: "Гастропластика (рукавная резекция желудка)",
            uz: "Gastroplastika (qorin qopqog'ini qayta tiklash)"
        },
        description: {
            ru: "Процедура уменьшения объема желудка, направленная на снижение веса",
            uz: "Oshqozon hajmini kamaytirish bo'yicha jarrohlik, bu vazn kamayishiga yo'naltirilgan"
        },
        slug: "gastroplastika",
        serviceID: "bariatric"
    },
    {
        name: {
            ru: "Гастропластика (рукавная резекция желудка)",
            uz: "Gastroplastika (qorin qopqog'ini qayta tiklash)"
        },
        description: {
            ru: "Процедура уменьшения объема желудка, направленная на снижение веса",
            uz: "Oshqozon hajmini kamaytirish bo'yicha jarrohlik, bu vazn kamayishiga yo'naltirilgan"
        },
        slug: "gastroplastika",
        serviceID: "bariatric"
    },
    {
        name: {
            ru: "Шунтирование желудка",
            uz: "Oshqozon shuntlash"
        },
        description: {
            ru: "Операция, позволяющая снизить всасывание пищи в кишечнике для коррекции метаболических проблем",
            uz: "Metabolik muammolarni tuzatish uchun ozuqaning ichakda so'rilishini kamaytiradigan operatsiya"
        },
        slug: "shuntirovanie-zheludka",
        serviceID: "bariatric"
    },
    {
        name: {
            ru: "Лапароскопическая регулировка желудочного бандажа",
            uz: "Laparoskopik oshqozon bandaji sozlash"
        },
        description: {
            ru: "Операция, при которой вокруг верхней части желудка размещается специальный силиконовый бандаж",
            uz: "Maxsus silikon bandaj yordamida oshqozonning yuqori qismi o'raladigan jarrohlik amaliyoti"
        },
        slug: "laparoskopicheskaya-regulirovka",
        serviceID: "bariatric"
    },
    {
        name: {
            ru: "Лапароскопическая холецистэктомия (удаление желчного пузыря)",
            uz: "Laparoskopik xoletsistektomiya (o't pufagini olib tashlash)"
        },
        description: {
            ru: "Одна из самых распространенных процедур удаления желчного пузыря",
            uz: "O't pufagini olib tashlash bo'yicha eng keng tarqalgan jarrohlik amaliyotlaridan biri"
        },
        slug: "laparoskopicheskaya-kholecistektomiya",
        serviceID: "laparoscopic"
    },
    {
        name: {
            ru: "Лапароскопическая герниопластика (операция по удалению грыжи)",
            uz: "Laparoskopik hernioplastika (chanoqni olib tashlash operatsiyasi)"
        },
        description: {
            ru: "Используется для восстановления грыжи (выпячивания органа через слабые участки брюшной стенки)",
            uz: "Chanoqning qayta tiklanishi uchun ishlatiladigan jarrohlik (organlarning qorin devorining zaif joylari orqali chiqishi)"
        },
        slug: "laparoskopicheskaya-gernioplastika",
        serviceID: "laparoscopic"
    },
    {
        name: {
            ru: "Абдоминопластика (пластика живота)",
            uz: "Abdominoplastika (qorinni qayta tiklash)"
        },
        description: {
            ru: "Процедура, направленная на удаление лишней кожи и жира с живота, а также на восстановление мышц",
            uz: "Qorindagi ortiqcha teri va yog'larni olib tashlash, mushaklarni tiklash bo'yicha jarrohlik amaliyoti"
        },
        slug: "abdominoplastika",
        serviceID: "aesthetic"
    }
]

const serviceItems = [
    { name: 'Все услуги', id: 'all' },
    { name: 'Бариатрическая хирургия', id: 'bariatric' },
    { name: 'Лапароскопическая хирургия', id: 'laparoscopic' },
    { name: 'Эстетическая хирургия', id: 'aesthetic' }
]

interface IServiceProps {
    show: boolean
}

const Service: FC<IServiceProps> = ({ show }) => {
    const [active, setActive] = useState('all')
    const [filteredData, setFilteredData] = useState(data)
    const [number, setSliceNumber] = useState(6)



    const slicedNumber = () => {
        setSliceNumber((prev) => prev + number)
    }
    const locale = useLocale()

    useEffect(() => {
        if (active === 'all') {
            setFilteredData(data)
        } else {
            setFilteredData(data.filter(item => item.serviceID === active))
        }
    }, [active])

    const handleClick = (id: string) => {
        setActive(id)
    }

    return (
        <div className=' mx-[16px]   2xl:mx-[180px]'>
            <Title text={{ ru: "Услуги", uz: "Xizmatlar" }} />
            <div className='flex flex-col mt-[50px] 2xl:mt-[40px] w-full '>
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

                <div className=' flex-row hidden 2xl:flex w-full gap-[35px]'>
                    {serviceItems.map((name, index) => (
                        <button
                            onClick={() => handleClick(name.id)}
                            key={index}
                            className={` pb-[10px] text-[13px]  font-bold font-manrope 2xl:text-[18px] 2xl:font-semibold ${active === name.id
                                ? 'border-b-[3px] border-[#27BEFF] text-[#27BEFF]'
                                : 'text-[#3E3E3E]'
                                }`}
                        >
                            {name.name}
                        </button>
                    ))}


                </div>

                <div className='flex flex-col gap-[20px] mt-[30px] 2xl:flex 2xl:flex-row 2xl:flex-wrap  2xl:mt-[60px]'>
                    {filteredData.slice(0 , number).map((data, index) => (
                        <div key={index} className='rounded-[15px]  border border-[#E3E3E3] py-[25px] px-[20px]  2xl:w-[32%]  2xl:pb-[60px] relative '>
                            <p className='text-[20px] 2xl:text-[24px] font-bold'>
                                {data.name[locale]}
                            </p>
                            <p className='text-[#686868] 2xl:text-[18px] font-semibold mt-[12px]'>
                                {data.description[locale]}
                            </p>

                            <Link href={`/service/${data.slug}`} className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                                Подробнее
                                <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                            </Link>
                        </div>
                    ))}


                </div>

                {show ? (
                    <Link href='/service' className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px] text-center mx-auto'>
                        Все услуги
                    </Link>
                ) : (
                    number < filteredData.length && (
                        <button onClick={slicedNumber} className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px] text-center mx-auto'>
                            Показать еще
                        </button>
                    )
                )}



            </div>
        </div>
    )
}

export default Service