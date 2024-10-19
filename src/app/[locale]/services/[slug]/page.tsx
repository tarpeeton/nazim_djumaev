import {MainServiceWitgSlug} from '@/components/Service/ServiceItems/Main'


import type { Metadata } from 'next'


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `${slug}`,
    description: `: ${slug}`,
    keywords: `nozim Jumayev, Songi Xabarlar ${slug}`,
  };
}


export default function Index() {
  return (
    <div>
      <MainServiceWitgSlug />
    </div>
  )
}