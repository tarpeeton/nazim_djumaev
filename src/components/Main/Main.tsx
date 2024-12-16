import { FC } from 'react'
import Banner from './Banner'
import About from './About'
import Service from './Service'
import Reviews from './Reviews'
import Advantages from './Advantages'
import Sertificates from './Sertificates'
import SomeFrom from './some-form'
import Recomnedations from './Recomendations'
import Faq from './Faq'
import VideoReview from '../Reviews/VideoReview'
import YTVideo from '@/components/Main/YT-Video'


const Main: FC = () => {
  return (
    <div>
      <Banner />
      <YTVideo />
      <SomeFrom />


      <div className='mt-[100px] 2xl:mt-[170px]'>
        <About />
        <div className='mt-[100px] 2xl:mt-[170px]'>
          <Service show={true} />
        </div>
      </div>
      {/* <Reviews /> */}
      <div className='mt-[100px] 2xl:mt-[170px]'>
      <VideoReview />
      </div>
      <Advantages />
      <SomeFrom />
      <Sertificates />
      <Faq />
      <Recomnedations />
    </div>
  )
}

export default Main