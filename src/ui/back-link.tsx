import { FC } from 'react'
import { Link } from '@/i18n/routing'
import { GrFormPrevious } from "react-icons/gr"


interface IBackProps {
    url: string
}

const BackLink: FC<IBackProps> = ({ url }) => {
    return <Link title='Назад' href={url} className='flex group flex-row  items-center  text-myBlue text-[20px] font-bold font-manrope relative'>
        <GrFormPrevious size={25} className='absolute left-0 group-hover:ml-[-8px] transition-all duration-300' />
        <p className='relative ml-[25px]'>
            Назад
        </p>
    </Link>
}

export default BackLink