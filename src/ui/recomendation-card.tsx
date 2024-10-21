"use client"
import {FC} from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MdOutlineNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale';



interface IRecomendationProps {
    slug: string;
    title: {ru: string , uz: string}
    subtitle: {ru: string , uz: string}
    image: string 
}


export const RecomendationCard: FC<IRecomendationProps> = ({slug , title , subtitle , image}) => {
    const locale = useLocale();

    
  return (
    <div className='2xl:w-[32%]'>
    <div className='rounded-[20px] w-full '>
        <Image src={image} alt='' width={600} height={800} className='w-full h-full object-cover ' />
    </div>
    <div className='mt-[10px] 2xl:pb-[60px] relative'>
        <p className='text-[20px] 2xl:text-[24px] font-bold text-titleDark'>
            {title[locale]}
        </p>
        <p className='text-[15px] 2xl:text-[18px] font-medium text-[#949494] mt-[8px]'>
           { subtitle[locale].length > 64 ? `${subtitle[locale].slice(0 , 64)} ...` : subtitle[locale]}
        </p>
        <Link href={`/recomendations/${slug}`} className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
            Перейти
            <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
        </Link>
    </div>
</div>
  );
};
