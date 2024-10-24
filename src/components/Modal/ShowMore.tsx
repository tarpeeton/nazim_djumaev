"use client"
import { FC, useState } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import Image, { StaticImageData } from 'next/image'
import { IShowMoreProps } from '@/interface/IReviews'
import useLocale from '@/hooks/useLocale'
import { IoSearchOutline } from "react-icons/io5"
import FullScreenImage from './FullScreenImage'



interface IReviewFull {
    visible: boolean
    close: () => void
    review: IShowMoreProps | null
}
const FullReviewsModal: FC<IReviewFull> = ({ visible, close, review }) => {
    const locale = useLocale()
    const [open, setOpen] = useState(false)
    const reviewText = review?.text?.[locale] || ''
    const [url, setUrl] = useState<StaticImageData | undefined>(undefined)

    console.log(open)
    const handleImageViewFull = (url: StaticImageData) => {
        setOpen(true)
        setUrl(url)
    }
    const handleClose = () => setOpen(false)
    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close}
                centered
                closeIcon={<IoClose size={25} />}
                className="custom-modal z-[99999999999]"
                width={600}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[2%] cursor-pointer  relative'>
                        <div className='bg-white rounded-[20px] p-[20px] mt-[20px] mdl:w-[99%] 2xl:w-[99%]  2xl:h-[450px]'>
                            <div className='flex flex-col'>
                                <div className='border-b pb-[30px] border-[#E3E3E3] flex flex-row gap-[10px]'>
                                        <div className='w-[100px] relative h-[100px] rounded-[20px] overflow-hidden group'>
                                            <div  className='absolute  w-full h-full bg-black bg-opacity-40 group-hover:hidden' />
                                            {review?.before.src && (
                                                <button onClick={() => handleImageViewFull(review?.before)} className='absolute hidden w-full h-full bg-black bg-opacity-40  group-hover:flex items-center justify-center text-center transition-transform duration-400 ease-in-out '>
                                                    <div className='absolute w-full h-full  transition-transform duration-500 ease-in-out  group-hover:flex items-center justify-center text-center '>
                                                        <IoSearchOutline size={40} className='text-white' />
                                                    </div>
                                                </button>
                                            )}
                                            {review?.before.src && (
                                                <div>
                                                    <Image src={review?.before.src} alt='After' width={100} height={100} className='w-full h-full object-cover ' />
                                                </div>
                                            )}
                                            <p className='absolute bottom-[10px] text-[16px] 2xl:text-[18px] left-[10px] text-white font-extrabold font-manrope group-hover:hidden'>
                                                {locale === 'ru' ? "До" : "Oldin"}
                                            </p>
                                        </div>
                                        <div className='w-[100px] h-[100px] relative rounded-[20px] overflow-hidden group'>
                                        <div  className='absolute  w-full h-full bg-black bg-opacity-40 group-hover:hidden' />
                                            {review?.before.src && (
                                                <button onClick={() => handleImageViewFull(review?.after)} className='absolute hidden w-full h-full bg-black bg-opacity-40  group-hover:flex items-center justify-center text-center '>
                                                    <div className='absolute w-full h-full  group-hover:flex items-center justify-center text-center '>
                                                        <IoSearchOutline size={40} className='text-white' />
                                                    </div>
                                                </button>)}
                                            {review?.after.src && (
                                                    <Image src={review?.after.src} alt='After' width={100} height={100} className='w-full h-full object-cover' />
                                            )}
                                            <p className='absolute bottom-[10px] text-[16px] 2xl:text-[18px] left-[10px] text-white font-extrabold font-manrope group-hover:hidden'>
                                                {locale === 'ru' ? "После" : "Keyin"}
                                            </p>
                                        </div>
                                </div>
                                {open && <FullScreenImage src={url} open={open} close={handleClose} />}
                                <div className='flex flex-row gap-[8px] mt-[30px]'>
                                    <div className='flex flex-col'>
                                        <p className='text-[16px] text-titleDark font-manrope mdl:text-[20px] font-bold'>{review?.name[locale]}</p>
                                        <p className='text-[14px] text-myBlue font-medium mdl:text-[16px]'>{review?.date}</p>
                                    </div>
                                </div>
                                <div className='mt-[20px]'>
                                    <p className='text-titleDark font-manrope font-medium'>
                                        {reviewText}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default FullReviewsModal
