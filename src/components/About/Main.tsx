import {FC} from 'react';
import About from '../Main/About'
import Banner from './Banner'
import Experience from './Experience'
import Sertificates from '../Main/Sertificates'
import Reviews from '../Main/Reviews'
import SomeFrom from '../Main/some-form'


export const AboutMain: FC = () => {
  return (
    <div>
        <Banner />
        <Experience />
        <Sertificates />
        <Reviews />
        <SomeFrom />
    </div>
  );
};
