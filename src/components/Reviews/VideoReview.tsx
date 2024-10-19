'use client'
import { FC, useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Title from '@/ui/Title'
import ReactPlayer from 'react-player'
import { IoIosPlay } from "react-icons/io"



const VideoReview: FC = () => {
    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
       
    }, [])

  
    return (
        <div>
            <div className='mt-[100px] 2xl:mt-[170px]  2xl:pl-[180px]'>
                <div className='flex flex-col py-[40px] px-[20px]'>

                    <Title text={{ ru: "Видео отзывы", uz: "Video sharhlar" }} />


                    <div className='2xl:mt-[40px]'>
                        <Swiper
                            modules={[Navigation]}
                            navigation={false} // Disable default navigation
                            slidesPerView={1}
                            spaceBetween={20}
                            speed={600}
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
                        >
                            <SwiperSlide className='mt-[30px] rounded-[20px]'>
                                <div className='rounded-[20px] h-[420px] 2xl:h-[350px]'>
                                    {isClient && (<ReactPlayer
                                        url="https://videos.pexels.com/video-files/6807039/6807039-uhd_2560_1440_30fps.mp4"
                                        playing={isPlaying}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        light='https://ucarecdn.com/fdc5d4f6-08a7-4363-b4bd-838386eb5ae1/-/preview/960x640/' // Show thumbnail before playing
                                        playIcon={
                                            <div className=" inset-0 flex items-center justify-center  bg-opacity-50 cursor-pointer 2xl:h-[500px] h-[420px]">
                                                <div className='rounded-full w-[90px] h-[90px] flex items-center justify-center border border-white'>
                                                    <button className="rounded-full bg-white  w-[65px] h-[65px] flex items-center justify-center text-center">
                                                        <IoIosPlay className='text-myBlue' size={29} />
                                                    </button>
                                                </div>

                                            </div>
                                        }
                                        onClickPreview={() => setIsPlaying(true)} // Start playing after clicking on the thumbnail
                                        pip={true}
                                    />)}

                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoReview
