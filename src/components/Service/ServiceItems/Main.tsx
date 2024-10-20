import { FC } from 'react'
import Video from './Video'
import Steps from './Step'
import Advantages from './ServiceAdventages'
import Reviews from '@/components/Main/Reviews'
import Risk from './Risk'
import SomeFrom from '@/components/Main/some-form'
import BackLink from '@/ui/back-link'


export const MainServiceWitgSlug: FC = () => {
  return (
    <div>
      <div className='px-[16px] 2xl:px-[180px] mt-[20px] 2xl:mt-[30px]'>
        <BackLink  url='services'/>
        <Video />
        <Steps />
        <Advantages />
      </div>
      <Reviews />
      <div className='px-[16px] 2xl:px-[180px]'>
          <Risk />
      </div>
      <SomeFrom />
    </div>
  )
}
