"use client"
import { FC, useState } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FloatingLabelInput } from '@/ui/form/input'
import { CustomSelect } from '@/ui/form/select'
import { consultation } from '@/lib/api'
import SuccessModal from './Success'

interface IReviewFull {
    visible: boolean
    close: () => void
}
const QuestionModal: FC<IReviewFull> = ({ visible, close }) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [service, setService] = useState<string>('')
const [success , setSuccess] = useState(false)
    const handleOpenSuccess = () => setSuccess(!success)

  const handleSubmitService = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
          const res = await consultation(
              name,
              phone,
              service,
              "consultation"
          );
            setSuccess(true)
          close();
      } catch (error) {
          console.log(error);
      }
  };
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
            >

              <p className=' mt-[15px] font-extrabold font-manrope text-[20px] 2xl:text-[30px] text-titleDark 2xl:w-[60%]'>Записаться на прием</p>
              <form onSubmit={handleSubmitService} className='flex flex-col gap-[20px] 2xl:mt-[30px]'>
                    <FloatingLabelInput errorMessage={{ru: 'это поля обязательно' , uz: ""}} label='ФИО' id='2' type='name'
                        setValue={setName} />
                    <FloatingLabelInput errorMessage={{ru: 'это поля обязательно' , uz: ""}} label='Номер телефона' id='3' type='phone'
                        setValue={setPhone} />
                    <CustomSelect
                        setService={setService}
                        label="Выберите услугу"
                        id="service"
                        options={[
                            { value: 'consultation', label: 'Консультация' },
                            { value: 'diagnostics', label: 'Диагностика' },
                            { value: 'treatment', label: 'Лечение' },
                        ]}
                    />
                    <button type='submit' className='rounded-full w-[80%] 2xl:w-[80%] 2xl:mx-auto bg-[#27BEFF] py-[15px] px-[20px]  mx-auto text-center text-[16px]  2xl:text-[18px] text-white font-bold font-manrope  mt-[30px] 2xl:mt-[40px] '>
                        Отправить
                    </button>
                </form>

            </Modal>
            <SuccessModal  visible={success} close={handleOpenSuccess} />

        </div>
    )
}

export default QuestionModal
