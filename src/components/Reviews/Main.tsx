import Title from '@/ui/Title'
import {FC} from 'react';
import ReviewsCard from './reviews-cards'
import VideoReview from './VideoReview'
import PaginationComponent from './Pagination'
import SomeFrom from '../Main/some-form'


export const ReviewsMain: FC = () => {
  return (
    <div>
        <div className='px-[16px] 2xl:px-[180px] mt-[40px] 2xl:mt-[60px]'>
            <Title text={{ru: "Отзывы" , uz: "Sharhlar"}} />
            <ReviewsCard />
        </div>
          <VideoReview />
          <PaginationComponent />
          <SomeFrom />
    </div>
  );
};
