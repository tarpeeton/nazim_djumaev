"use client"
import useLocale from '@/hooks/useLocale'
import {FC} from 'react';

interface ITitleProps {
    text: { ru: string, uz: string }
}


const Title: FC<ITitleProps> = ({text}) => {
  const locale = useLocale()
  return <p className='text-[30px]  2xl:text-[40px] text-titleDark font-extrabold font-manrope'>{text[locale]}</p>
};

export default Title;