import MainRecomendations from '@/components/Recomendations/Main'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Рекомендации врача',
  description: 'Важные рекомендации врача для вашего здоровья. Информация о правильном питании, здоровом образе жизни и том, на что обращать внимание до и после операций.',
  keywords: 'здоровье, рекомендации врача, питание, операция, восстановление, здоровый образ жизни',
}






export default function Index() {
  return (
    <div>
      <MainRecomendations />
    </div>
  )
}
