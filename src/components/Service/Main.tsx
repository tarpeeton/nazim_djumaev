import {FC} from 'react';
import Service from '../Main/Service'
import SomeFrom from '../Main/some-form'


const Main: FC = () => {
  return (
    <div className='pt-[40px] 2xl:pt-[60px] border-t border-[#E3E3E3]'>
        <Service  show={false}/>
        <SomeFrom />
    </div>
  );
};

export default Main;