import {FC} from 'react';
import Banner from './Banner'
import Experience from './Experience'
import Sertificates from '../Main/Sertificates'
import Reviews from '../Main/Reviews'
import SomeFrom from '../Main/some-form'
import VideoReview from '../Reviews/VideoReview'


export const AboutMain: FC = () => {
  return (
    <div>
        <Banner />
        <Experience />
        <Sertificates />
        {/* <Reviews /> */}
        <div className='mt-[100px] 2xl:mt-[170px]'>
            <VideoReview />
      </div>
        <SomeFrom />
    </div>
  );
};
