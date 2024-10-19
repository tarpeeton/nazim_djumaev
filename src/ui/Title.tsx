"use client"
import useLocale from '@/hooks/useLocale'
import { FC } from 'react'

interface ITitleProps {
  text?: { ru?: string; uz?: string } // Making both properties optional
  oneText?: string // This can be used to display a single text if needed
}

const Title: FC<ITitleProps> = ({ text, oneText }) => {
  const locale = useLocale()
  const displayText = text ? text[locale] || text.ru || text.uz : oneText
  return <p className='text-[30px]  2xl:text-[40px] text-titleDark font-extrabold font-manrope'>{displayText}</p>
}

export default Title