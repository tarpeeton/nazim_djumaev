'use client'
import { FC, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Review } from '@/constants/Rewiews'
import useLocale from '@/hooks/useLocale'
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr"
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { MdOutlineNavigateNext } from "react-icons/md"
import { Link } from '@/i18n/routing'






const Reviews: FC = () => {
    const swiperRef = useRef<any>(null)
    const locale = useLocale()
    const [loading, setLoading] = useState(false)



    return (
        <div>
            <div className='mt-[120px] bg-[#F1F4F8] 2xl:pl-[200px]'>
                <div>
                    <div className='flex flex-col py-[40px] px-[20px]'>
                        <p className='text-titleDark text-[25px] font-bold font-raleway mdl:text-[35px] 2xl:text-[40px]'>
                            Отзывы
                        </p>

                        <div className='2xl:mt-[40px]'>
                            <Swiper
                                modules={[Navigation]}
                                navigation={false} // Disable default navigation
                                slidesPerView={1}
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
                                className="mySwiper"
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper // Assign the Swiper instance to the ref
                                }}
                            >
                                {loading ? ( // Conditional rendering for loading state
                                    <SwiperSlide>
                                        <div className='flex flex-row gap-[2%] cursor-default'>
                                            <div className='bg-gray-200 w-full mdl:w-[48%] rounded-[20px] p-[20px] mt-[20px]  2xl:w-[31%] 2xl:h-[350px] animate-pulse'>
                                                <div className='flex flex-col'>
                                                    <div className='flex flex-row gap-[8px]'>
                                                        <div className='w-[50px] h-[50px] rounded-full bg-gray-300' />
                                                        <div className='flex flex-col'>
                                                            <div className='h-[20px] w-[100px] bg-gray-300 rounded' />
                                                            <div className='h-[15px] w-[80px] bg-gray-300 rounded mt-[8px]' />
                                                        </div>
                                                    </div>
                                                    <div className='mt-[20px]'>
                                                        <div className='h-[16px] w-[100%] bg-gray-300 rounded' />
                                                        <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[100%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[90%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[80%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[80%] bg-gray-300 rounded mt-[8px]' />
                                                        <div className='h-[16px] w-[70%] bg-gray-300 rounded mt-[8px]' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ) : (
                                    Review.map((review, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='flex flex-row gap-[2%] cursor-pointer'>
                                                <div className='bg-white rounded-[20px] p-[20px] mt-[20px] mdl:w-[99%] 2xl:w-[99%]  2xl:h-[450px]'>
                                                    <div className='flex flex-col'>
                                                        <div className='border-b pb-[30px] border-[#E3E3E3] flex flex-row gap-[10px]'>
                                                            <PhotoProvider>
                                                                <div className='w-[100px] relative h-[100px] rounded-[20px] overflow-hidden '>
                                                                    <div className='absolute w-full h-full bg-black bg-opacity-40' />
                                                                    <PhotoView src={review.before.src}>
                                                                        <Image src={review.before} alt='sdf' width={100} height={100} className='w-full h-full object-cover' />
                                                                    </PhotoView>

                                                                    <p className='absolute bottom-[10px] text-[16p] 2xl:text-[18px] left-[10px] text-white font-extrabold font-manrope'>
                                                                        До
                                                                    </p>
                                                                </div>
                                                                <div className='w-[100px] h-[100px] relative rounded-[20px]  overflow-hidden '>
                                                                    <div className='absolute w-full h-full bg-black bg-opacity-40' />
                                                                    <PhotoView src={review.after.src}>
                                                                        <Image src={review.after} alt='sdf' width={100} height={100} className='w-full h-full object-cover' />
                                                                    </PhotoView>

                                                                    <p className='absolute bottom-[10px] text-[16p] 2xl:text-[18px] left-[10px] text-white font-extrabold font-manrope'>
                                                                        После
                                                                    </p>
                                                                </div>
                                                            </PhotoProvider>

                                                        </div>
                                                        <div className='flex flex-row gap-[8px] mt-[30px]'>

                                                            <div className='flex flex-col'>
                                                                <p className='text-[16px] text-titleDark font-manrope mdl:text-[20px] font-bold'>{review.name[locale]}</p>
                                                                <p className='text-[14px] text-myBlue font-medium mdl:text-[16px]'>{review.date}</p>
                                                            </div>
                                                        </div>
                                                        <div className='mt-[20px]'>
                                                            <p className='text-titleDark font-manrope font-medium'>
                                                                {review.text[locale].length > 215 ? review.text[locale].slice(0, 215) + '...' : review.text[locale]}
                                                            </p>
                                                        </div>

                                                        <Link href={`/service/${review.slug}`} className='text-myBlue flex items-center font-bold mt-[20px] 2xl:absolute 2xl:bottom-[20px]'>
                                                            Подробнее
                                                            <MdOutlineNavigateNext size={25} className='mt-[3px] ml-[4px]' />
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                )}
                            </Swiper>
                        </div>

                        <div className='flex justify-end relative items-center mt-[30px]'>
                            <div className="flex flex-row gap-[8px]">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()} // Use custom navigation
                                    className="flex border border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] bg-white 2xl:h-[78px]"
                                    aria-label="Previous slide"
                                >
                                    <GrLinkPrevious className="text-black w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]" />
                                </button>

                                <button
                                    onClick={() => swiperRef.current?.slideNext()} // Use custom navigation
                                    className="flex border bg-white border-[#E8E8E8] w-[55px] h-[55px] rounded-full items-center justify-center mdl:w-[70px] mdl:h-[70px] 2xl:w-[78px] 2xl:h-[78px]"
                                    aria-label="Next slide"
                                >
                                    <GrLinkNext className="text-black w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews