import Button from '@/ui/button'
import SocialLicks from '@/ui/social-links'
import Title from '@/ui/Title'
import {FC} from 'react';
import YandexMap from '../Main/Map'
import SomeFrom from '../Main/some-form'


export const MainContacts: FC = () => {
  return (
    <div>
        <div className='mt-[40px] 2xl:mt-[60px] flex flex-col 2xl:flex-row px-[16px] 2xl:px-[180px] 2xl:justify-between'>
            <div className='2xl:w-[40%]'>
                <Title text={{ru: "Контакты" , uz: "Kontaktlarimiz"}} />
                <p className='text-[#949494] text-[16px] 2xl:text-[20px] font-medium font-manrope mt-[14px]'>
                Свяжитесь со мной для записи на консультацию или получения дополнительной информации
                </p>
                <Button  text={{ru: 'Связаться' , uz: "Boglanish"}}/>
            </div>
            <div className='2xl:w-[50%] mt-[50px] 2xl:mt-0'>
                <div className='pb-[40px] border-b border-[#E3E3E3]'>
                    <p className='text-[30px]  font-medium '>
                    +998 (93) 248 10 50
                    </p>
                    <p className='text-[18px] text-myBlue font-bold'>номер телефона</p>
                </div>
                <div className='pb-[40px] border-b border-[#E3E3E3] mt-[30px]'>
                    <p className='text-[30px]  font-medium '>
                    name@domain.uz
                    </p>
                    <p className='text-[18px] text-myBlue font-bold'>электронная почта</p>
                </div>
                <div className='pb-[40px] border-b border-[#E3E3E3] mt-[30px]'>
                    <p className='text-[30px]  font-medium '>
                    Ул. Шифокор, г. Тошкент, Узбекистан
                    </p>
                    <p className='text-[18px] text-myBlue font-bold'>адрес клиники</p>
                </div>
                <SocialLicks />
            </div>
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
