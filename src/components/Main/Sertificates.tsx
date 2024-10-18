'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

const images = [
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
    { url: "https://ucarecdn.com/62baa773-19f2-4b34-83e8-74b0b4b946cc/-/preview/975x651/" },
]

const Sertificates: FC = () => {
    return (
        <div>
            <div className='mt-[100px] 2xlmt-[170px]  2xl:pl-[180px]'>
                <div className='flex flex-col py-[40px] px-[20px]'>
                    <p className='text-titleDark text-[30px] font-bold font-raleway mdl:text-[35px] 2xl:text-[40px]'>
                        Сертификаты и достижения
                    </p>

                    <div className='2xl:mt-[40px]'>
                        <Swiper
                            modules={[Navigation]}
                            navigation={false} // Disable default navigation
                            slidesPerView={5}
                            spaceBetween={20}
                            speed={600}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                },
                                800: {
                                    slidesPerView: 1.7,
                                },
                                700: {
                                    slidesPerView: 1,
                                },
                                1200: {
                                    slidesPerView: 3.5,
                                },
                            }}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <PhotoProvider>
                                        <PhotoView src={img.url}>
                                            <Image
                                                src={img.url}
                                                alt={`Certificate ${index + 1}`}
                                                width={975}
                                                height={651}
                                                className='cursor-pointer h-[500px] w-full object-cover'
                                            />
                                        </PhotoView>
                                    </PhotoProvider>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sertificates
