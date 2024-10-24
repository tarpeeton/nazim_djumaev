import { Link } from '@/i18n/routing'
import { counter } from '@/lib/api'
import {FC} from 'react';
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa'


const SocialLicks: FC = () => {
  return (
    <div className='flex flex-row mt-[21px] gap-[10px]'>
					<Link  onClick={() => counter('instagram')} href='https://www.instagram.com/drnozim_adxamovich/' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaInstagram className='text-myBlue' size={25} />
					</Link>
					<Link  onClick={() => counter('telegram')} href='https://t.me/nozim_adxamovich' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaTelegramPlane className='text-myBlue' size={25} />
					</Link>
					<a  onClick={() => counter('whatsapp')} href='https://wa.me/998901107887?text=Здравствуйте, у меня есть вопрос' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaWhatsapp className='text-myBlue' size={25} />
					</a>
					<a onClick={() => counter('call')}  href='tel:+998901107887' className='rounded-full border font-bold border-[#ABD6EA] w-[50px] h-[50px] flex items-center justify-center text-center'>
						<FaPhone className='text-myBlue' size={25} />
					</a>
				</div>
  );
};

export default SocialLicks;