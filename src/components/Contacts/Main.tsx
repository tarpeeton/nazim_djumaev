"use client"


import SocialLicks from '@/ui/social-links'
import Title from '@/ui/Title'
import {FC , useState} from 'react';
import YandexMap from '../Main/Map'
import SomeFrom from '../Main/some-form'
import QuestionModal from '../Modal/Request'
import useLocale from '@/hooks/useLocale'





export const MainContacts: FC = () => {
    const [open , setOpen] = useState(false)
    const locale = useLocale()
    const handleQuestion = () => setOpen(!open)



  return (
    <div>
        <div className='mt-[40px] 2xl:mt-[60px] flex flex-col 2xl:flex-row px-[16px] 2xl:px-[180px] 2xl:justify-between'>
            <div className='2xl:w-[40%]'>
                <Title text={{ru: "Контакты" , uz: "Kontaktlarimiz"}} />
                <p className='text-[#949494] text-[16px] 2xl:text-[20px] font-medium font-manrope mt-[14px]'>
                
                {locale === 'ru' ? 'Свяжитесь со мной для записи на консультацию или получения дополнительной информации' : "Maslahat olish yoki qo'shimcha ma'lumot olish uchun men bilan bog'laning"}

                </p>
                <button onClick={handleQuestion} className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px] px-[40px]'>
                        
                        {locale === 'ru' ? 'Связаться' : 'Boglanish'}
                </button>
            </div>
            <div className='2xl:w-[50%] mt-[50px] 2xl:mt-0'>
                <div className='pb-[40px] border-b border-[#E3E3E3]'>
                    <p className='text-[30px]  font-medium '>
                    +998 (90) 110 78 87
                    </p>
                    <p className='text-[18px] text-myBlue font-bold'>
                        {locale === 'ru' ? 'номер телефона' : 'Telefon Raqami'}
                        </p>
                </div>
               
                <div className='pb-[40px] border-b border-[#E3E3E3] mt-[30px]'>
                    <p className='text-[30px]  font-medium '>
                    

                    {locale === 'ru' ? 'Ул. Шифокор, г. Тошкент, Узбекистан' : "Shifokor ko'chasi,Toshkent shahri, o'zbekiston"}
                    
                    </p>
                    <p className='text-[18px] text-myBlue font-bold'>
                        
                        {locale === 'ru' ? 'адрес клиники' : 'klinikaning manzili'}
                        </p>
                </div>
                <SocialLicks />
            </div>
            <QuestionModal visible={open} close={handleQuestion} />
        </div>
        <div className='px-[16px] 2xl:px-[180px] mt-[100px] 2xl:mt-[170px]'>
        <YandexMap />
        </div>
        <div className='2xl:mt-[-140px] mt-[-50px]'>
        <SomeFrom />

        </div>
    </div>
  );
};
