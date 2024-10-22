import { FC } from 'react'
import { Link } from '@/i18n/routing'
import Title from '@/ui/Title'
import { RecomendationsData } from '@/constants/Recomendations'
import {RecomendationCard} from '@/ui/recomendation-card'


const Recomnedations: FC = () => {
    return (
        <div className='mx-[16px] 2xl:mx-[180px] mt-[100px] 2xl:mt-[170px]'>
            
            <Title  text={{ru: "Рекомендации" , uz: "Maslaxatlar"}}/>


            <div className='flex flex-col gap-[30px] mt-[20px] 2xl:mt-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:justify-between 2xl:gap-[10px]'>
            {RecomendationsData.slice(0 , 3).map((rec) => (
                 <RecomendationCard  slug={rec.slug} title={{ru: rec.title.ru , uz: rec.title.uz }} subtitle={{ru: rec.subtitle.ru , uz: rec.subtitle.uz}} image={rec.image}/>
            ))}

            </div>


            <div className='mt-[30px] 2xl:mt-[20px] w-full flex items-center justify-center'>
                <Link href='/recomendations' className='w-[200px] 2xl:w-[230px] mt-[30px] 2xl:mt-[40px] rounded-full bg-[#27BEFF] text-white font-bold py-[18px]  text-center mx-auto'>
                    Все рекомендации
                </Link>
            </div>

        </div>
    )
}

export default Recomnedations