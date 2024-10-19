import {FC} from 'react';
import Service from '../Main/Service'
import SomeFrom from '../Main/some-form'


const Main: FC = () => {
  return (
    <div className='mt-[40px] 2xl:mt-[60px]'>
        <Service  show={false}/>
        <SomeFrom />
    </div>
  );
};

export default Main;