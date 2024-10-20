
import SomeFrom from '@/components/Main/some-form'
import { MainRecomendationWithSlug } from '@/components/Recomendations/RecomendationItems/Main'

import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Рекомендации по ${slug}`,
    description: `Важные рекомендации для вас: ${slug}. Узнайте больше о правильном питании и восстановлении.`,
    keywords: `${slug}, здоровье, советы, рекомендации врача`,
  };
}


export default function Index() {
  return (
    <div>
      <MainRecomendationWithSlug />
      <SomeFrom />
    </div>
  )
}
