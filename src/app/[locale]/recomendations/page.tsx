import MainRecomendations from '@/components/Recomendations/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '', 
  description: ' ',
  keywords: '', 
}






export default function Index() {
  return (
    <div>
      <MainRecomendations />
    </div>
  )
}
