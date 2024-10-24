"use client"
import { FC, useState, useEffect } from 'react'
import Video from './Video'
import Steps from './Step'
import Advantages from './ServiceAdventages'
import Reviews from '@/components/Main/Reviews'
import Risk from './Risk'
import SomeFrom from '@/components/Main/some-form'
import BackLink from '@/ui/back-link'
import Faq from '@/components/Main/Faq'
import useLocale from '@/hooks/useLocale'
import { useParams } from 'next/navigation'
import { ServiceSlugData } from '@/constants/ServiceSlugData'


interface IServiceSlugData {
  slug:string
  title: string
  description: string
  indications: string
  procedure: string
  advantages: string[]
  risks: string[]
}


export const MainServiceWitgSlug: FC = () => {
  const locale = useLocale()
  const {slug} = useParams()
  const [filteredData, setFilteredData] = useState<IServiceSlugData | null>(null)


  useEffect(() => {
    const data = ServiceSlugData.find(item => item.slug === slug)
    if (data) {
      setFilteredData(data)
    }
  }, [slug, locale])

  console.log(filteredData , 'HAHA ')

  return (
    <div>
      <div className='px-[16px] 2xl:px-[180px] mt-[20px] 2xl:mt-[30px]'>
        <BackLink url='services' />
        <Video  title={filteredData?.title} description={filteredData?.description} />
        <Steps />
        <Advantages />
      </div>
      <Reviews />
      <div className='px-[16px] 2xl:px-[180px]'>
        <Risk risks={filteredData?.risks} />
      </div>
      <Faq />
      <SomeFrom />
    </div>
  )
}
