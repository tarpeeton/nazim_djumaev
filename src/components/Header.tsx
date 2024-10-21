"use client"
import React, { useState, useRef, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher' // Typo correction
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from '@/i18n/routing'
import { IoMdClose } from "react-icons/io"
import { useTranslations } from 'next-intl'
import Logo from '@/public/logo.png'
import QuestionModal from './Modal/Request'

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations('Header')
  const [menu, setMenu] = useState(false)
  const [mobileService, setMobileService] = useState(true)
  const [question, setQuestion] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null) // Create a ref for the menu

  const toggleOpenQuestion = () => {
    setQuestion(!question)
    toggleMenuOpen()
    setMenu(false)
  }

  const toggleMenuOpen = () => setMenu(!menu)
  const toggleMobileService = () => setMobileService(!mobileService)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])



  return (
    <React.Fragment>
      <div className='flex flex-row justify-between bg-white px-[16px] py-[10px] slg:px-[20px] 2xl:px-[180px] '>
        <Link href='/' className='logo flex items-center relative z-[999]'>
          <Image src={Logo} alt='Logo' width={60} height={60} quality={100} className='object-cover' />
        </Link>

        {/* SERVICES */}
        <div className='hidden 2xl:flex 2xl:flex-row 2xl:gap-[70px] z-[999]'>
          <Link href='/tours' className='2xl:font-medium flex flex-row gap-[10px] text-[#242424] items-center   text-[20px] font-medium  font-manrope'>
            {t('about')}
          </Link>
          <Link href='/clinics' className='2xl:font-medium flex flex-row gap-[10px] text-[#242424] items-center   text-[20px] font-medium  font-manrope'>
            {t('service')}
          </Link>
          <Link href='/sanatoriums' className='2xl:font-medium flex flex-row gap-[10px] text-[#242424] items-center   text-[20px] font-medium  font-manrope'>
            {t('contacts')}
          </Link>
          <Link href='/hotels' className='2xl:font-medium flex flex-row gap-[10px] text-[#242424] items-center   text-[20px] font-medium  font-manrope'>
            {t('reviews')}
          </Link>
        </div>



        {/* SWITCHER AND HAMBURGER MENU */}
        <div className='flex flex-row items-center gap-[16px] 2xl:gap-[40px]  '>

          <div className='w-[90px] flex items-center justify-center'>
            <LanguageSwitcher locale={locale} menu={false} />
          </div>
          <button onClick={toggleMenuOpen} className='block 2xl:hidden relative z-[9999]'>
            <RxHamburgerMenu size={30} className='text-black' />
          </button>
          <button onClick={toggleOpenQuestion} className='hidden rounded-full mdl:block py-[13px] px-[25px] bg-[#27BEFF] text-center font-raleway text-white font-bold relative z-[999] '>
            Записаться
          </button>
        </div>
      </div>

      {<QuestionModal  visible={question} close={toggleOpenQuestion}/>}

      {menu && (
        <div>
          {/* Overlay */}
          <div className='fixed inset-0 bg-black opacity-50 z-[999998]' onClick={toggleMenuOpen} />

          <div ref={menuRef} className='bg-white absolute top-0 right-0 w-[80%] slg:w-[50%] 2xl:w-[40%] z-[99999999] h-full'>
            <div className='px-[20px] border-b border-[#E8E8E8]'>
              <div className='flex flex-row justify-between items-center h-[65px]'>
                <LanguageSwitcher locale={locale} menu={true} />
                <button onClick={toggleMenuOpen}  >
                  <IoMdClose size={30} className='text-black slg:w-[40px] slg:h-[40px]' />
                </button>
                <div className='hidden 2xl:block w-[1px]' />
              </div>
            </div>

            <div className='flex flex-col px-[20px] mt-[25px]'>
              <button onClick={toggleMobileService} className='flex flex-row items-center gap-[4px] slg:hidden'>
                <p className='text-[#1AB2A6] text-[18px] font-semibold'>Услуги</p>
                <MdKeyboardArrowDown size={28} className={`text-[#1AB2A6] ${mobileService ? "rotate-[180deg]" : ''}`} />
              </button>

              {mobileService && (
                <div className='flex flex-col gap-[20px] text-[18px] font-medium mt-[20px] slg:text-[22px]'>
                  <Link href='/about' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    О компании
                  </Link>
                  <Link href='/partners' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Партнеры
                  </Link>
                  <button onClick={toggleOpenQuestion} className='text-left hover:text-green100 duration-300'>
                    Задать вопрос
                  </button>
                  <Link href='/blog' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Блог
                  </Link>
                  <Link href='/contacts' onClick={toggleMenuOpen} className='hover:text-green100 duration-300'>
                    Контакты
                  </Link>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-[16px] md:gap-[20px] absolute bottom-[40px] z-[9999] left-[20px]'>
              <div className='flex flex-col text-[22px] font-bold slg:text-[28px] slg:font-semibold'>
                <p>Здоровье и отдых в </p>
                <p>одном путешествии!</p>
              </div>
              <div className='w-full mt-[16px]'>
                <Link href='/' className="bg-greenButton py-[16px] px-[20px] rounded-[10px] text-[14px] font-bold w-full  mdl:text-[16px] text-white">
                  Начать путешествие
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Header
