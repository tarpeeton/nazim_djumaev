
import SomeFrom from '@/components/Main/some-form'
import { MainRecomendationWithSlug } from '@/components/Recomendations/RecomendationItems/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '',
  description: ' ',
  keywords: '',
}


export default function Index() {
  return (
    <div>
      <MainRecomendationWithSlug />
      <SomeFrom />
    </div>
  )
}
