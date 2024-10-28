import Title from '@/ui/Title'
import {FC} from 'react';



const Data = [
  {
    number: '01',
    title: {ru: 'Консультация', uz: 'Konsultatsiya'},
    description:  {ru: 'Пациент проходит предварительное обследование и получает рекомендации по подготовке', uz: 'Bemor dastlabki ko\'rikdan o\'tadi va tayyorgarlik bo\'yicha tavsiyalar oladi'}
  },
  {
    number: '02',
    title: {ru: 'Подготовка к операции', uz: 'Operatsiyaga tayyorgarlik'},
    description:  {ru: 'Диетические рекомендации и ограничение физической активности за несколько дней до процедуры', uz: 'Operatsiyadan bir necha kun oldin parhez tavsiyalari va jismoniy faoliyatni cheklash'}
  },
  {
    number: '03',
    title: {ru: 'Проведение операции', uz: 'Operatsiyani o\'tkazish'},
    description:  {ru: 'Выполняется под общей анестезией, с минимальными разрезами', uz: 'Umumiy narkoz ostida, minimal kesishlar bilan o\'tkaziladi'}
  },
  {
    number: '04',
    title: {ru: 'Реабилитация', uz: 'Reabilitatsiya'},
    description:  {ru: 'Врач предоставляет рекомендации по восстановлению, включая диету и физическую активность', uz: 'Shifokor parhez va jismoniy faoliyatni o\'z ichiga olgan tiklanish bo\'yicha tavsiyalar beradi'}
  }
]


interface ISteps {
  locale: "ru" | "uz" 
}


const Steps: FC<ISteps> = ({locale}) => {

  return (
    <div className='mt-[100px] 2xl:mt-[170px]'>
        <Title  text={{ru: 'Как проходит операция' , uz: "Operatsiya qanday amalga oshiriladi"}}/>
        <div className='flex flex-col 2xl:flex-row gap-[20px] mt-[30px] 2xl:mt-[40px] 2xl:gap-[20px] '>
            {Data.map((step , index) => (
              <div key={index} className='rounded-[20px] py-[25px] px-[20px]  2xl:pb-[10px] bg-[#F1F4F8] 2xl:w-[25%] cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-xl'>
                  <div>
                    <p className='text-myBlue text-[40px] 2xl:text-[50px] font-bold font-manrope '>
                      {step.number}
                    </p>
                  </div>
                  <div className='mt-[40px] 2xl:mt-[80px]'>
                    <p className='text-[20px] 2xl:text-[21px] text-nowrap font-bold font-manrope'>{step.title[locale]}</p>
                    <p className='mt-[12px] text-[16px] 2xl:text-[17px] text-[#686868] font-manrope'>{step.description[locale]}</p>
                    </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default Steps;