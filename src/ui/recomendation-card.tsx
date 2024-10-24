"use client";
import { FC } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MdOutlineNavigateNext } from "react-icons/md";
import useLocale from '@/hooks/useLocale';

interface IRecomendationProps {
  slug: string;
  title: { ru: string; uz: string };
  subtitle: { ru: string; uz: string };
  image: string;
}

export const RecomendationCard: FC<IRecomendationProps> = ({ slug, title, subtitle, image }) => {
  const locale = useLocale();

  return (
    <div className="2xl:w-[31%] 3xl:w-[32%] w-full flex flex-col">
      <div className="w-full relative">
        <Image
          src={image}
          alt="Recomendation Image"
          quality={100}
          width={4096}
          height={2731}
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      <div className="mt-[10px] relative flex-1 pb-[70px]">
        <p className="text-[20px] 2xl:text-[19px] 3xl:text-[24px] font-bold text-titleDark">
          {title[locale]}
        </p>
        <p className="text-[15px] 2xl:text-[15px] 3xl:text-[18px] font-medium text-[#949494] mt-[8px]">
          {subtitle[locale].length > 64
            ? `${subtitle[locale].slice(0, 64)} ...`
            : subtitle[locale]}
        </p>
        <Link
          href={`/recomendations/${slug}`}
          className="text-myBlue flex items-center font-bold mt-[20px] absolute bottom-[20px]"
        >
          {locale == 'ru' ? "Перейти" : "O'tish"}
          <MdOutlineNavigateNext size={25} className="mt-[3px] ml-[4px]" />
        </Link>
      </div>
    </div>
  );
};
