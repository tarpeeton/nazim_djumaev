import MainBlog from '@/components/Service/Main'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Самые свежие новости',
  keywords: 'Med Travel, Последние новости',
}


export default function Index() {
  return (
    <div>
      <MainBlog />
    </div>
  )
}