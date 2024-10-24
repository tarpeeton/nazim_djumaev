"use client"
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import Title from '@/ui/Title'
import { faqData } from '@/constants/Faq'
import useLocale from '@/hooks/useLocale'



interface ArrowProps {
  isOpen: boolean
}

const Arrow: React.FC<ArrowProps> = ({ isOpen }) => (
  <>
    {isOpen ? (
      <IoIosArrowUp className='2xl:text-[26px]' />
    ) : (
      <IoIosArrowDown className='2xl:text-[26px]' />
    )}
  </>
)

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const locale = useLocale()
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full px-[16px] 2xl:px-[180px] mt-[100px] 2xl:mt-[170px] ">
      <Title text={{ru: 'Часто задаваемые вопросы' , uz: "Ko'p Beriladigan Savollar"}} />
      <div className='mt-[30px] mdl:mt-[40px] 2xl:mt-[50px]'>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full flex justify-between items-start text-left p-4 text-lg   ${openIndex === index ? 'text-[#27BEFF]' : 'text-black'}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className={`text-[22px]   mdx:text-[26px] xl:text-[30px] max-mdx:max-w-[80%] transition-all  font-manrope font-semibold`}>
                {item.question[locale]}
              </span>
              <span className={`flex-shrink-0 w-[35px] h-[35px] mdl:w-[40px] mdl:h-[40px] 2xl:w-[60px] 2xl:h-[60px] flex items-center justify-center rounded-full font-semibold font-manrope  transition-all  ${openIndex === index ? 'border-[#27BEFF] text-[#27BEFF]' : ' text-black'}`}>
                <Arrow isOpen={openIndex === index} />
              </span>
            </button>
            <div className={`border-b border-[#E1E1E1] overflow-hidden transition-all  ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
              <p className="px-4 pb-[20px] text-[15px] mdx:text-[20px]  text-[#505050]">{item.answer[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq