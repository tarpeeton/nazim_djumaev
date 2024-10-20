"use client"
import Title from '@/ui/Title'
import { FC, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { GoDotFill } from "react-icons/go"
import { RecomendationsData } from '@/constants/Recomendations'
import { useParams } from 'next/navigation'
import useLocale from '@/hooks/useLocale'
import { IRecomendationData } from '@/constants/Recomendations'
import { option } from 'yandex-maps'



const RecomendationInfo: FC = () => {
    const { slug } = useParams()
    const locale = useLocale()
    const [data, setData] = useState<IRecomendationData>()


    useEffect(() => {
        const filteredData = RecomendationsData.find(item => item.slug === slug)
        setData(filteredData)
    }, [slug])

    return (
        <div className='2xl:mt-[40px] mt-[30px]'>
            <div>
                <Title text={{ ru: `${data?.title.ru}`, uz: `${data?.title.uz}` }} />
                <p className='text-[16px] 2xl:text-[18px] text-[#3E3E3E] font-medium font-manrope mt-[15px] 2xl:mt-[25px]'>
                    {data?.subtitle[locale]}
                </p>
                <div className='rounded-[20px] overflow-hidden h-[200px] 2xl:h-[450px] mt-[30px] 2xl:mt-[40px]'>
                    {data?.image && <Image
                        src={data.image}
                        alt='image'
                        width={4000}
                        height={2000}
                        quality={100}
                        className='w-full h-full object-cover'
                    />}

                </div>


                <div >
                        {data?.options.map((option, index) => (
                            <div key={index} className='mt-[60px] 2xl:mt-[80px]'>
                                <p className='2xl:text-[30px] text-[20px] font-bold font-manrope '>{option.text[locale]}</p>
                                {option.description[locale].map((des , index) => (
                                    <div key={index} className='flex flex-row gap-[8px] 2xl:mt-[20px] mt-[25px]'>
                                        <div className='w-[30px] h-[30px]'>
                                        <GoDotFill className='text-myBlue  ' size={25}/>

                                        </div>
                                    <p className='2xl:text-[18px] text-[#3E3E3E] 2xl:leading-[23px] font-medium font-manrope'>{des}

                                    </p>
                                </div>
                                ))}
                                
                            </div>

                        ))}
                </div>
            </div>
        </div>
    )
}

export default RecomendationInfo