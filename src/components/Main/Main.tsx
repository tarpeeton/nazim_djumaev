import { FC } from 'react'
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
      <div className='mt-[100px] 2xl:mt-[170px]'>
        <About />
        <div className='mt-[100px] 2xl:mt-[170px]'>
          <Service show={true} />
        </div>
      </div>
      <Reviews />
      <Advantages />
      <SomeFrom />
      <Sertificates />
      <Recomnedations />
    </div>
  )
}

export default Main