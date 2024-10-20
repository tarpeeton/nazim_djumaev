import {FC} from 'react';
import RecomendationsCards from './Cards'
import SomeFrom from '../Main/some-form'





const MainRecomendations: FC = () => {
  return (
    <div>
      <div className='mt-[40px] 2xl:mt-[60px]'>
        <RecomendationsCards />
        <SomeFrom />
      </div>
    </div>
  );
};

export default MainRecomendations;