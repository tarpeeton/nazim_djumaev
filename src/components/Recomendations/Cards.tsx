'use client'
import { FC } from 'react'
import Title from '@/ui/Title'
import PaginationComponent from '../Reviews/Pagination'
import { useSearchParams } from 'next/navigation'
import { RecomendationsData } from '@/constants/Recomendations'
import { RecomendationCard } from '@/ui/recomendation-card'






const RecomendationsCards: FC = () => {
  const REVIEWS_PER_PAGE = 9
  const searchParams = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1', 10)

  // Calculate the total number of pages based on data length
  const totalRecomendations = RecomendationsData.length
  const totalPages = Math.ceil(totalRecomendations / REVIEWS_PER_PAGE)

  // Calculate the start and end indices for slicing the data
  const startIndex = (page - 1) * REVIEWS_PER_PAGE
  const endIndex = startIndex + REVIEWS_PER_PAGE

  // Get the recommendations for the current page
  const recomendationPag = RecomendationsData.slice(startIndex, endIndex)

  return (
    <div>
      <div className='mx-[16px] 2xl:mx-[180px]'>
        <Title text={{ ru: "Рекомендации", uz: "Maslahatlar" }} />
        <div className='flex flex-col gap-[30px] mt-[20px] 2xl:mt-[60px] 2xl:flex-row 2xl:flex-wrap  2xl:gap-[22px]'>
          {
            recomendationPag.map((rec) => (
              <RecomendationCard key={rec.slug} slug={rec.slug} title={{ ru: rec.title.ru, uz: rec.title.uz }} subtitle={{ ru: rec.subtitle.ru, uz: rec.subtitle.uz }} image={rec.image} />
            ))
          }
        </div>
        {recomendationPag.length >= 10 && (<div className='mt-[30px] 2xl:mt-[20px] w-full flex items-center justify-center'>
          <PaginationComponent totalPages={totalPages} currentPage={page} />
        </div>) }
      </div>
    </div>
  )
}

export default RecomendationsCards