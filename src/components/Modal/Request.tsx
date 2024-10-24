"use client"
import { FC, useState } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FloatingLabelInput } from '@/ui/form/input'
import { CustomSelect } from '@/ui/form/select'
import { consultation } from '@/lib/api'
import SuccessModal from './Success'
import { Flex, Spin } from 'antd'
import useLocale from '@/hooks/useLocale'
interface IReviewFull {
    visible: boolean
    close: () => void
}
const QuestionModal: FC<IReviewFull> = ({ visible, close }) => {
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [service, setService] = useState<string>('')
    const [success, setSuccess] = useState(false)
    const locale = useLocale()

    const handleOpenSuccess = () => setSuccess(!success)
    const [loading, setloading] = useState(false)
    const handleSubmitService = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)
        try {
            const res = await consultation(
                name,
                phone,
                service,
                "consultation"
            )
            setSuccess(true)
            setloading(false)
            close()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Modal
                open={visible}
                footer={null}
                onCancel={close}
                centered
                closeIcon={<IoClose size={25} />}
                className="custom-modal z-[9999999999]"
                width={500}
                style={{ borderRadius: '30px' }}
            >

                <p className=' mt-[15px] font-extrabold font-manrope text-[20px] 2xl:text-[30px] text-titleDark 2xl:w-[60%]'>

                    {locale === 'ru' ? 'Записаться на прием' : 'Qabulga Yozilish'}
                </p>
                <form onSubmit={handleSubmitService} className='flex flex-col gap-[20px] 2xl:mt-[30px]'>
                    <FloatingLabelInput errorMessage={{ ru: 'это поля обязательно', uz: "majburiy maydon" }} label={locale === 'ru' ? 'ФИО' : "FISH"} id='2' type='name'
                        setValue={setName} />
                    <FloatingLabelInput errorMessage={{ ru: 'это поля обязательно', uz: "majburiy maydon" }}
                        label={locale === 'ru' ? 'Номер телефона' : "Telefon Raqamingiz"} id='3' type='phone'
                        setValue={setPhone} />
                    <CustomSelect
                        setService={setService}
                        label={locale === 'ru' ? 'Выберите услугу' : "Xizmatni Tanlang"}
                        id="service"

                        options={locale === 'ru' ? [
                            { value: 'Консультация', label: 'Консультация' },
                            { value: 'Диагностика', label: 'Диагностика' },
                            { value: 'Лечение', label: 'Лечение' },
                        ] : [
                            { value: 'Konsultatsiya', label: 'Konsultatsiya' },
                            { value: 'Diagnostika', label: 'Diagnostika' },
                            { value: 'Davolash', label: 'Davolash' },
                        ]}
                    />
                    <button type='submit' className='rounded-full w-[80%] 2xl:w-[80%] 2xl:mx-auto bg-[#27BEFF] py-[15px] px-[20px]  mx-auto text-center text-[16px]  2xl:text-[18px] text-white font-bold font-manrope  mt-[30px] 2xl:mt-[40px] '>
                        {loading ? (<Flex align="center" gap="middle" className='flex items-center justify-center text-white'>
                            <Spin className='w-[30px]' />
                        </Flex>) : locale === 'ru' ? 'Отправить' : "Yuborish"}
                    </button>
                </form>

            </Modal>
            <SuccessModal visible={success} close={handleOpenSuccess} />

        </div>
    )
}

export default QuestionModal
