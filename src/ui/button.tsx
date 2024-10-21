'use client'
import { FC  , useState} from 'react';

interface IButtonProps {
  text?: { ru: string; uz: string }; 
  language?: 'ru' | 'uz';
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ text = { ru: '', uz: '' }, language = 'ru' }) => {
  const buttonText = language === 'uz' ? text.uz : text.ru;
  
  return (
    <button className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
      {buttonText}
    </button>
  );
};

export default Button;
