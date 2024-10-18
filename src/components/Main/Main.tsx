import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Reviews from './Reviews'
import Advantages from './Advantages'
import Sertificates from './Sertificates'


const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About/>
        <Service />
        <Reviews />
        <Advantages />
        <Sertificates />
    </div>
  );
};

export default Main;