import BackLink from '@/ui/back-link'
import {FC} from 'react';
import RecomendationInfo from './Info'


export const MainRecomendationWithSlug: FC = () => {
  return (
    <div className='mx-[16px] 2xl:mx-[300px] 2xl:mt-[40px] mt-[30px]'>
        <BackLink url='recomendations' />
        <RecomendationInfo />
    </div>
  );
};
