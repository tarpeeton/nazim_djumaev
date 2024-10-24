"use client"
import { FC , useEffect } from 'react'
import { Modal } from 'antd'
import useLocale from '@/hooks/useLocale'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


interface ISuccess {
    visible: boolean
    close: () => void
}
const SuccessModal: FC<ISuccess> = ({ visible, close }) => {
    const locale = useLocale()


    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                close();  // 3 soniyadan keyin modalni yopish
            }, 4000);  // 3000 millisekund = 3 soniya

            return () => clearTimeout(timer);  // Komponent unmount bo'lganda timerni tozalash
        }
    }, [visible, close]);  // visible o'zgarsa, effect qayta ishlaydi
    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close}
                centered
                closeIcon={null}
                className="custom-modal z-[99999999999]"
                width={450}
            >
                <div className='flex flex-col items-center justify-center '>
                    <IoIosCheckmarkCircleOutline size={90} className='text-myBlue'/>
                <div className='w-full flex flex-col justify-center'>
                    <p className='2xl:text-[30px] text-[20px] mt-[20px] text-titleDark font-extrabold text-center font-manrope'>
                        {locale ==='ru' ? 'Заявка отправлена!' : 'Ariza yuborildi!'}
                        </p>
                    <p className='font-medium w-[90%] mx-auto text-center 2xl:text-[17px] mt-[10px] text-[#686868] font-manrope'>
                    
                    {locale ==='ru' ? 'Ваша заявка успешно отправлена! В ближайшее время я свяжусь с вами' : "Sizning arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz"}

                    </p>
                    <button onClick={close}  className='rounded-full w-[80%]  bg-[#27BEFF] py-[15px] px-[20px]  mx-auto text-center text-[16px]  2xl:text-[18px] text-white font-bold font-manrope  mt-[30px] 2xl:mt-[40px] '>
                        
                        {locale ==='ru' ? 'Закрыть' : "Yopish"}
                    </button>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default SuccessModal
