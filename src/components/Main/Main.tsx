import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Reviews from './Reviews'


const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About/>
        <Service />
        <Reviews />
    </div>
  );
};

export default Main;