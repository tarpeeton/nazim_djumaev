import useLocale from '@/hooks/useLocale'
import Title from '@/ui/Title'
import { FC } from 'react'
import { FaCheckCircle } from "react-icons/fa"
import { FaExclamationCircle } from "react-icons/fa"
const Recomendation = [
  {
    title: { ru: 'Диета перед операцией', uz: 'Operatsiyadan oldin parhez' },
    description: { ru: 'За неделю до процедуры важно придерживаться низкокалорийной диеты', uz: 'Jarayondan bir hafta oldin past kaloriya dietasiga rioya qilish muhimdir' }
  },

  {
    title: { ru: 'Физическая активность', uz: 'Jismoniy faollik' },
    description: { ru: 'Ограничение нагрузок за 3 дня до операции', uz: 'Operatsiyadan 3 kun oldin yuklarni cheklash' }
  },
  {
    title: { ru: 'Обследования', uz: 'Tekshiruvlar' },
    description: { ru: 'Необходимо пройти полный медицинский осмотр для исключения противопоказаний', uz: "Qo'llash mumkin bo'lmagan holatlarni istisno qilish uchun to'liq tibbiy ko'rikdan o'tish kerak" }
  }
]


interface IRisksProps {
  risks: {ru: string , uz: string}[] | undefined
}

const Risk: FC<IRisksProps> = ({risks}) => {
  const locale  = useLocale()

  console.log(risks)
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
                <p className='text-[20px] 2xl:text-[24px] font-bold font-manrope'>{rec.title[locale]}</p>
                <p className='text-[16px] 2xl:text-[18px] font-medium font-manrope text-[#686868]'>
                  {rec.title[locale]}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>



      <div className='border border-[#E3E3E3] rounded-[20px] py-[25px] px-[20px] 2xl:p-[45px] shadow-lg 2xl:w-[49%]'>
        <div className='2xl:w-[80%]'>
          <Title text={{ ru: "Противопоказания и риски", uz: '' }} />

        </div>
        <div className='mt-[35px] 2xl:mt-[40px] flex flex-col'>
          {risks?.map((rec, index) => (
            <div key={index} className='flex flex-row gap-[12px]  py-[20px] 2xl:pb-[30px] border-b border-[#E3E3E3]'>
              <div className='w-[30px] h-[30px]'>
              <FaExclamationCircle className='text-[#FF5050] mt-[6px]' size={25} />
                </div>
              <div>
                <p className='text-[20px] 2xl:text-[20px] font-bold font-manrope'>{rec[locale]}</p>
                <p className='text-[16px] 2xl:text-[18px] font-medium font-manrope text-[#686868]'>
                  {/* {rec} */}
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