'use client';
import Title from '@/ui/Title';
import Image from 'next/image';
import { FC, useState, useEffect, useRef } from 'react';
import QuestionModal from '../Modal/Request';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLocale from '@/hooks/useLocale'

// Регистрация плагина ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
    const [open, setOpen] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null); // Реф для отслеживания компонента
    const locale = useLocale()
    const SwitcherModal = () => setOpen(!open);

    // Анимация при появлении компонента в области видимости
    useEffect(() => {
        const element = sectionRef.current;
        if (element) {
            gsap.fromTo(
                element,
                { opacity: 0, y: 50 }, // Начальные параметры (прозрачность 0, смещение по оси Y)
                {
                    opacity: 1,
                    y: 0,
                    duration: 2, // Более длительная анимация для плавности
                    ease: 'power2.out', // Плавная ease-функция для мягкого эффекта
                    delay: 0.3, // Добавляем небольшую задержку для более плавного старта
                    scrollTrigger: {
                        trigger: element, // Триггером является сам элемент
                        start: 'top 70%', // Когда верхняя часть элемента достигает 70% высоты окна
                        toggleActions: 'play none none none', // Воспроизведение только при скролле вниз
                    },
                }
            );
        }
    }, []);

    return (
        <div ref={sectionRef} className='mx-[16px] 2xl:mx-[180px]'>
            <Title text={{ ru: 'Обо мне', uz: 'Men haqimda' }} />
            <div className='flex flex-col items-center 2xl:flex-row mt-[50px] 2xl:justify-between'>
                <div className='rounded-[20px] overflow-hidden 2xl:w-[50%]'>
                    <Image
                        src='https://ucarecdn.com/2ee5fd3d-0ce8-4531-93a3-cab32b62f939/-/preview/710x639/'
                        alt='About image'
                        width={710}
                        quality={100}
                        height={639}
                        className='w-full h-full'
                    />
                </div>
                <div className='flex flex-col mt-[25px] 2xl:mt-0 2xl:order-[-1] 2xl:w-[45%]'>
                    <p className='text-[#686868] font-manrope text-[15px] font-medium 2xl:text-[20px]'>
                       
                        {locale  === 'ru' ? " Нозим Жумаев — бариатрический хирург с более чем 10-летним опытом работы в области хирургии.Специализируется на решении проблем, связанных с ожирением и нарушением метаболизма. Его основная цель — помочь пациентам обрести здоровье через профессиональные методы лечения" : "Nozim Jumaev-jarrohlik sohasida 10 yildan ortiq tajribaga ega bariatrik jarroh. Semizlik va metabolik kasalliklar bilan bog'liq muammolarni hal qilishga ixtisoslashgan. Uning asosiy maqsad-bemorlarga professional davolash usullari orqali sog'lig'ini tiklashga yordam berish" }

                    </p>
                    <p className='mt-[15px] font-manrope text-[#686868] text-[15px] font-medium 2xl:text-[20px]'>
                       
                        {locale  === 'ru' ? ' Врач регулярно повышает квалификацию на международных конференциях и семинарах. Имеет обширный опыт в проведении сложных операций, включая гастропластику и шунтирование. Особое внимание уделяет минимизации рисков и качественной реабилитации пациентов' : "Shifokor xalqaro konferentsiyalar va seminarlarda muntazam ravishda malaka oshiradi. Keng qamrovli gastroplastika va bypass operatsiyasini o'z ichiga olgan murakkab operatsiyalarni bajarish tajribasi. Maxsus e'tibor xatarlarni minimallashtirish va bemorlarni sifatli reabilitatsiya qilishga bag'ishlangan" }

                    </p>

                    <button
                        onClick={SwitcherModal}
                        className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'
                    >
                        {locale  === 'ru' ? "Записаться" : 'Yozilish' }
                    </button>
                    <QuestionModal visible={open} close={SwitcherModal} />
                </div>
            </div>
        </div>
    );
};

export default About;
