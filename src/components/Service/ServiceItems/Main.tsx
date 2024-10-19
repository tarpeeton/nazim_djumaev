import { FC } from 'react'
import { Link } from '@/i18n/routing'




import { GrFormPrevious } from "react-icons/gr"
import Video from './Video'
import Steps from './Step'
export const MainServiceWitgSlug: FC = () => {
  return (
    <div>
      <div className='px-[16px] 2xl:px-[180px] mt-[20px] 2xl:mt-[30px]'>
        <Link title='Назад' href='/services' className='flex group flex-row  items-center  text-myBlue text-[20px] font-bold font-manrope relative'>
          <GrFormPrevious size={25} className='absolute left-0 group-hover:ml-[-8px] transition-all duration-300' />
          <p className='relative ml-[25px]'>
            Назад
          </p>
        </Link>


        <Video />
        <Steps />
      </div>

    </div>
  )
}
