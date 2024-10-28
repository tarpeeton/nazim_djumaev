"use client"
import { FC, useState, useEffect } from 'react'
import Video from './Video'
import Steps from './Step'
import Advantages from './ServiceAdventages'
// import Reviews from '@/components/Main/Reviews'
import Risk from './Risk'
import SomeFrom from '@/components/Main/some-form'
import BackLink from '@/ui/back-link'
import Faq from '@/components/Main/Faq'
import useLocale from '@/hooks/useLocale'
import { useParams } from 'next/navigation'
import { ServiceSlugData } from '@/constants/ServiceSlugData'
import VideoReview from '@/components/Reviews/VideoReview'


interface IServiceSlugData {
  slug:string
  video:string
  title: {uz: string , ru: string}
  description: {uz: string , ru: string}
  indications: {uz: string , ru: string}
  procedure: {uz: string , ru: string}
  advantages: {ru: string , uz: string}[]
  risks: {ru: string , uz: string}[]
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


  return (
    <div>
      <div className='px-[16px] 2xl:px-[180px] mt-[20px] 2xl:mt-[30px]'>
        <BackLink url='/services' locale={locale} />
        <Video  title={filteredData?.title[locale]} description={filteredData?.description[locale]}  video={filteredData?.video || ''}/>
        <Steps locale={locale} />
        <Advantages  locale={locale}/>
      </div>
      <div className='mt-[100px] 2xl:mt-[170px]'>
            <VideoReview />
      </div>
      {/* <Reviews /> */}
      <div className='px-[16px] 2xl:px-[180px]'>
        <Risk risks={filteredData?.risks} />
      </div>
      <Faq />
      <SomeFrom />
    </div>
  )
}
