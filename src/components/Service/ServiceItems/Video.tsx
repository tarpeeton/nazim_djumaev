'use client'

import { FC, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { IoIosPlay } from "react-icons/io"
const Video: FC = () => {
    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="mt-[25px] 2xl:mt-[35px] relative">
            <p className="text-[25px] 2xl:text-[50px] text-titleDark font-extrabold font-manrope w-[90%] 2xl:w-[70%]">
                Гастропластика (рукавная резекция желудка)
            </p>
            <p className="text-[15px] 2xl:text-[20px] text-[#686868] mt-[15px] 2xl:mt-[20px]">
                Гастропластика — это операция по уменьшению объема желудка путем
                удаления его части, что помогает ограничить потребление пищи и
                способствует потере веса
            </p>

            <div className="mt-[35px] 2xl:mt-[50px] w-full rounded-[15px] h-[210px] relative  2xl:h-[570px]">
                {isClient && (
                    <ReactPlayer
                        url="https://youtu.be/yQtcgfNB6HU?si=b91IbFVh0x76KBF4"
                        playing={isPlaying}
                        controls={true}
                        width="100%"
                        height="100%"
                        light={true} // Show thumbnail before playing
                        playIcon={
                            <div className=" inset-0 flex items-center justify-center  bg-opacity-50 cursor-pointer 2xl:h-[500px] h-[210px]">
                                <div className='rounded-full w-[90px] h-[90px] flex items-center justify-center border border-white'>
                                    <button className="rounded-full bg-white  w-[65px] h-[65px] flex items-center justify-center text-center">
                                        <IoIosPlay className='text-myBlue' size={29} />
                                    </button>
                                </div>

                            </div>
                        }
                        onClickPreview={() => setIsPlaying(true)} // Start playing after clicking on the thumbnail
                        pip={true}
                    />
                )}
            </div>
        </div>
    )
}

export default Video
