import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Reviews from './Reviews'
import Advantages from './Advantages'
import Sertificates from './Sertificates'
import SomeFrom from './some-form'
import Recomnedations from './Recomendations'


const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About/>
        <Service />
        <Reviews />
        <Advantages />
        <SomeFrom />
        <Sertificates />
        <Recomnedations/>
    </div>
  );
};

export default Main;