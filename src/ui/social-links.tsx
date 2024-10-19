import {FC} from 'react';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'


const SocialLicks: FC = () => {
  return (
    <div className='flex flex-row mt-[21px] gap-[10px]'>
					<button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaInstagram className='text-myBlue' size={25} />
					</button>
					<button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaTelegramPlane className='text-myBlue' size={25} />
					</button>
					<button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaWhatsapp className='text-myBlue' size={25} />
					</button>
					<button className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaPhone className='text-myBlue' size={25} />
					</button>
				</div>
  );
};

export default SocialLicks;