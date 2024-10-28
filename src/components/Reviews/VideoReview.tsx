'use client'
import { FC, useState, useEffect , useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '@/ui/Title'
import ReactPlayer from 'react-player'
import { IoIosPlay } from "react-icons/io"
import { videoData } from '@/constants/Video'
import { GrFormPrevious } from "react-icons/gr"
import { GrFormNext } from "react-icons/gr"



const VideoReview: FC = () => {
    const [isClient, setIsClient] = useState(false)
    const [playingIndex, setPlayingIndex] = useState<number | null>(null)
    const swiperRef = useRef<any>(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleSlideChange = () => {
        setPlayingIndex(null) // Stop playing video when slide changes
    }


    const handlePrevSlide = () => {
        swiperRef.current?.slidePrev()
    }

    const handleNextSlide = () => {
        swiperRef.current?.slideNext()
    }
    
    return (
        <div>
            <div className='2xl:pl-[180px]'>
                <div className='flex flex-col py-[40px] px-[20px]'>
                    <Title text={{ ru: "Видео отзывы", uz: "Video sharhlar" }} />

                    <div className='2xl:mt-[40px]'>
                        {isClient && (
                            <Swiper
                                modules={[Navigation]}
                                navigation={false}
                                slidesPerView={1}
                                spaceBetween={20}
                                speed={600}
                                onSlideChange={handleSlideChange} // Reset video on slide change
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 6,
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
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                            >
                                {videoData.map((vid, index) => (
                                    <SwiperSlide key={index} className='mt-[30px] rounded-[20px]'>
                                        <div className='rounded-[20px] h-[420px] 2xl:h-[350px]'>
                                            <ReactPlayer
                                                url={vid.url}
                                                playing={playingIndex === index}
                                                controls={true}
                                                width="100%"
                                                height="100%"
                                                light={vid.id}

                                                playIcon={
                                                    <div className="inset-0 flex items-center justify-center bg-opacity-50 cursor-pointer 2xl:h-[500px] h-[420px]">
                                                        <div className='rounded-full w-[90px] h-[90px] flex items-center justify-center border border-white'>
                                                            <button className="rounded-full bg-white w-[65px] h-[65px] flex items-center justify-center text-center">
                                                                <IoIosPlay className='text-myBlue' size={29} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                                onClickPreview={() => setPlayingIndex(index)}
                                                pip={true}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <div className='flex w-full  mdl:hidden mt-[30px] flex-row justify-end gap-[10px]'>
                                    <button onClick={handlePrevSlide} className='rounded-full w-[50px] h-[50px] flex items-center justify-center text-center border border-myBlue'>
                                        <GrFormPrevious className='text-myBlue' size={25} />
                                    </button>
                                    <button onClick={handleNextSlide} className='rounded-full w-[50px] h-[50px] flex items-center justify-center text-center border border-myBlue'>
                                        <GrFormNext  className='text-myBlue' size={25}/>
                                    </button>
                                </div>
                            </Swiper>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoReview
