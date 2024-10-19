import { ReviewsMain } from '@/components/Reviews/Main'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Отзывы клиентов | Клиника "Пример"', 
  description: 'Читайте реальные отзывы наших пациентов и узнайте, как мы помогаем людям заботиться о своём здоровье.', 
  keywords: 'отзывы, клиенты, мнения, медицинские услуги, здоровье, успешные истории', 

};

export default function Index() {
  return (
    <div>
      <ReviewsMain />
    </div>
  );
}
