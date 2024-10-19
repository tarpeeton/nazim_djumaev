import Title from '@/ui/Title'
import { FC } from 'react'
import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationCircle } from "react-icons/fa"
const Recomendation = [
  {
    title: { ru: 'Диета перед операцией', uz: '' },
    description: { ru: 'За неделю до процедуры важно придерживаться низкокалорийной диеты', uz: '' }
  },

  {
    title: { ru: 'Физическая активность', uz: '' },
    description: { ru: 'Ограничение нагрузок за 3 дня до операции', uz: '' }
  },
  {
    title: { ru: 'Обследования', uz: '' },
    description: { ru: 'Необходимо пройти полный медицинский осмотр для исключения противопоказаний', uz: '' }
  }
]
const RiskData = [
  {
    title: { ru: 'Хронические заболевания ЖКТ', uz: '' },
    description: { ru: 'Операция может усугубить эти патологии и вызвать осложнения', uz: '' }
  },

  {
    title: { ru: 'Инфекционные осложнения', uz: '' },
    description: { ru: 'Ограничение нагрузок за 3 дня до операции', uz: '' }
  },
  {
    title: { ru: 'Кровотечение', uz: '' },
    description: { ru: 'Необходимо пройти полный медицинский осмотр для исключения противопоказаний', uz: '' }
  }
]


const Risk: FC = () => {
  return (
    <div className='mt-[100px] 2xl:mt-[170px] flex flex-col gap-[20px] 2xl:flex-row 2xl:gap-0 2xl:justify-between'>
      <div className='border border-[#E3E3E3] rounded-[20px] py-[25px] px-[20px] 2xl:p-[45px] shadow-lg 2xl:w-[49%]'>
        <div className='2xl:w-[80%]'>
          <Title text={{ ru: "Рекомендации по подготовке", uz: '' }} />

        </div>
        <div className='mt-[35px] 2xl:mt-[40px] flex flex-col'>
          {Recomendation.map((rec, index) => (
            <div key={index} className='flex flex-row gap-[12px]  py-[20px] 2xl:pb-[30px] border-b border-[#E3E3E3]'>
              <FaCheckCircle className='text-myBlue mt-[2px]' size={25} />
              <div>
                <p className='text-[20px] 2xl:text-[24px] font-bold font-manrope'>{rec.title.ru}</p>
                <p className='text-[16px] 2xl:text-[18px] font-medium font-manrope text-[#686868]'>
                  {rec.title.ru}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>



      <div className='border border-[#E3E3E3] rounded-[20px] py-[25px] px-[20px] 2xl:p-[45px] shadow-lg 2xl:w-[49%]'>
        <div className='2xl:w-[80%]'>
          <Title text={{ ru: "Рекомендации по подготовке", uz: '' }} />

        </div>
        <div className='mt-[35px] 2xl:mt-[40px] flex flex-col'>
          {RiskData.map((rec, index) => (
            <div key={index} className='flex flex-row gap-[12px]  py-[20px] 2xl:pb-[30px] border-b border-[#E3E3E3]'>
              <FaExclamationCircle className='text-[#FF5050] mt-[6px]' size={25} />
              <div>
                <p className='text-[20px] 2xl:text-[24px] font-bold font-manrope'>{rec.title.ru}</p>
                <p className='text-[16px] 2xl:text-[18px] font-medium font-manrope text-[#686868]'>
                  {rec.title.ru}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default Risk