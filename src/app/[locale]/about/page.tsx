import { AboutMain } from '@/components/About/Main'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Обо мне', 
  description: 'Узнайте больше обо мне, моем опыте и профессиональных достижениях.',
  keywords: 'Обо мне, опыт, достижения, личная информация', 
};

export default function Index() {
  return (
    <div>
      <AboutMain />
    </div>
  );
}
