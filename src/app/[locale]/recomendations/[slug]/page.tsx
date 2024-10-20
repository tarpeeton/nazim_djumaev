import { Link } from '@/i18n/routing';
import { GrFormPrevious } from "react-icons/gr"
<div>
      <div >
      <Link title='Назад' href='/services' className='flex group flex-row  items-center  text-myBlue text-[20px] font-bold font-manrope relative'>
          <GrFormPrevious size={25} className='absolute left-0 group-hover:ml-[-8px] transition-all duration-300' />
          <p className='relative ml-[25px]'>
            Назад
          </p>
        </Link>
      </div>
         
    </div>