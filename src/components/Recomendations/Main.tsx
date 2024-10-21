import {FC} from 'react';
import RecomendationsCards from './Cards'
import SomeFrom from '../Main/some-form'





const MainRecomendations: FC = () => {
  return (
    <div>
      <div className='pt-[40px] 2xl:pt-[60px] border-t border-[#E3E3E3]'>
        <RecomendationsCards />
        <SomeFrom />
      </div>
    </div>
  );
};

export default MainRecomendations;