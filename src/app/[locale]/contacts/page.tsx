import { MainContacts } from '@/components/Contacts/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты', 
  description: 'Свяжитесь с нами для получения дополнительной информации и поддержки.',
  keywords: 'Контакты,  поддержка клиентов, информация, связь', 
}






export default function Index() {
  return (
    <div>
      <MainContacts />
    </div>
  )
}
