"use client"
import { FC } from 'react'
import Image from 'next/image'
import { MdOutlineNavigateNext } from "react-icons/md"
import useLocale from '@/hooks/useLocale'
import { FooterService } from '@/constants/Footer'
import YandexMap from './Main/Map'
import { usePathname } from 'next/navigation'
import Logo from '@/public/logo.png'
import SocialLicks from '@/ui/social-links'
import { Link } from '@/i18n/routing'







const Footer: FC = () => {
	const locale = useLocale()
	const pathname = usePathname()
	const showMap = !pathname?.includes('/contacts')

	return (
		<div className='bg-[#F9F9F9] mt-[120px] '>
			{showMap && <YandexMap />}
			<div className=' py-[30px] px-[16px] flex flex-col 2xl:flex-row 2xl:px-[180px] 2xl:justify-between'>
				<div>
					<div className='flex flex-col'>
						<div className='flex flex-row w-full'>
							<Image src='https://ucarecdn.com/b9ad1855-c77a-486b-9fef-7dba7603ab29/-/preview/80x80/' alt='Logo' quality={100} width={80} height={80} className='object-contain w-[65px] h-[75px] 2xl:w-[70px] 2xl:h-[75px]' />
							<div className='w-[40%] ml-[17px]'>
								<p className='text-[25px] text-myBlue  font-extrabold font-manrope'>
									{locale ==='ru' ? 'Нозим Жумаев' : "Nozim Jumayev"}
									</p>
							</div>
						</div>
					</div>
					<SocialLicks />
				</div>
				<div className='flex flex-col gap-[40px] 2xl:flex-row px-[16px] mt-[40px] 2xl:mt-0 2xl:gap-[60px]'>
					{FooterService.map((ser, index) => (
						<div key={index} className="cursor-pointer relative 2xl:pb-[60px] flex flex-col">
							<p  className="text-[20px] text-titleDark font-bold font-manrope 2xl:text-[24px] mb-[15px]">
								{ser.serviceName[locale]}
							</p>
							{ser.service.map((name, subIndex) => (
								<Link href={name.href} key={subIndex}    className="text-[16px] text-titleDark 2xl:text-[18px] font-medium">
									{name.name[locale]}
								</Link>
							))}
							<Link href={ser.link.href} className="text-myBlue flex items-center font-bold mt-[15px] 2xl:absolute 2xl:bottom-[20px]">
								{ser.link.text[locale]}
								<MdOutlineNavigateNext size={25} className="mt-[3px] ml-[3px]" />
							</Link>
						</div>
					))}

				</div>
			</div>
			{/* COPY */}
			<div className='flex flex-row py-[12px] px-[18px] 2xl:px-[200px] border-t border-borderColor'>
				<div className='w-[55%] flex items-center mdl:w-[70%]'>
					<p className='font-raleway font-medium text-[12px] text-[#B3B3B3] mdl:text-[16px] '>
						
						{locale === 'ru' ? "2024 © Нозим Жумаев. Все права защищены" : "2024 © Nozim Jumayev. Barcha Huquqlar Himoyalangan "}
						</p>
				</div>
				<div className='w-[45%] flex items-center justify-end'>
					<Link href='https://result-me.uz/api/redirect?from=bm96aW0tanVtYWV2'>
						<Image src='https://ucarecdn.com/e2c4cecc-45d3-41ad-a1dd-bd0b0059a025/-/preview/1000x553/' alt='logo Result' width={130} height={72} quality={100} className='object-contain mdl:w-[130px] mdl:h-[72px]' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer