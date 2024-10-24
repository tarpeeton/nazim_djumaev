"use client"
import BackLink from '@/ui/back-link'
import {FC} from 'react';
import RecomendationInfo from './Info'
import useLocale from '@/hooks/useLocale';

export const MainRecomendationWithSlug: FC = () => {
  const locale = useLocale()
  return (
    <div className=' 2xl:pt-[40px] pt-[30px] border-t border-[#E3E3E3]'>
      <div className='mx-[16px] 2xl:mx-[300px]'>
      <BackLink url='/recomendations'  locale={locale} />
      <RecomendationInfo />
      </div>
       
    </div>
  );
};
