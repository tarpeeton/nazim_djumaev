'use client'
import Title from '@/ui/Title'
import {FC} from 'react';
import ReviewsCard from './reviews-cards'
import VideoReview from './VideoReview'
import PaginationComponent from './Pagination'
import SomeFrom from '../Main/some-form'
import { useSearchParams } from 'next/navigation';
import { Review } from '@/constants/Rewiews';



export const ReviewsMain: FC = () => {
  const REVIEWS_PER_PAGE = 9;
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);

  // Calculate the total number of pages based on data length
  const totalRecomendations = Review.length;
  const totalPages = Math.ceil(totalRecomendations / REVIEWS_PER_PAGE);

  // Calculate the start and end indices for slicing the data
  const startIndex = (page - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;

  // Get the recommendations for the current page
  const recomendationPag = Review.slice(startIndex, endIndex);

  return (
    <div>
        <div className='px-[16px] 2xl:px-[180px] mt-[40px] 2xl:mt-[60px]'>
            <Title text={{ru: "Отзывы" , uz: "Sharhlar"}} />
            <ReviewsCard data={recomendationPag} />
        </div>
          <VideoReview />
          <PaginationComponent currentPage={page} totalPages={totalPages}/>
          <SomeFrom />
    </div>
  );
};
