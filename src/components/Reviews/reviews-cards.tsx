"use client"
import React, { FC } from 'react'
import { Review } from '@/constants/Rewiews'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import useLocale from '@/hooks/useLocale'
import { Link } from '@/i18n/routing'
import { MdOutlineNavigateNext } from "react-icons/md"
import { useSearchParams } from 'next/navigation'



const REVIEWS_PER_PAGE = 9; // Number of reviews per page

const ReviewsCard: FC = () => {
    const searchParams = useSearchParams(); // Get search params
    const page = parseInt(searchParams.get('page') || '1', 10); // Retrieve the 'page' parameter and default to 1
    const locale = useLocale();

    // Calculate the starting index and the ending index for slicing the reviews
    const startIndex = (page - 1) * REVIEWS_PER_PAGE;
    const endIndex = startIndex + REVIEWS_PER_PAGE;

    // Slice the reviews array for the current page
    const reviewsToDisplay = Review.slice(startIndex, endIndex);

    return (
        <div className='mt-[30px] 2xl:mt-[40px]'>
            <div className='flex flex-col'>
                <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                    {reviewsToDisplay.map((review , index) => (
                        <div key={index} className='flex flex-row gap-[2%] cursor-pointer 2xl:w-[32%] relative '>
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
                    ))}

                </div>
                
            </div>
        </div>
    )
}

export default ReviewsCard