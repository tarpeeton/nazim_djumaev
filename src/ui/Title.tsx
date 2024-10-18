import {FC} from 'react';

interface ITitleProps {
    text: string
}


const Title: FC<ITitleProps> = ({text}) => {
  return <p className='text-[40px] 2xl:text-[40px] text-titleDark font-extrabold'>{text}</p>
};

export default Title;