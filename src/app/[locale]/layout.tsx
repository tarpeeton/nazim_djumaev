import Header from '@/components/Header'
import '../globals.css'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import messages_ru from '@/translation/ru.json'
import messages_uz from '@/translation/uz.json'

export const metadata: Metadata = {
  title: 'Dr. Nozim Jumayev',
  description: 'Comprehensive medical services with a focus on patient care and precision, led by Dr. Nozim Jumayev.',
  authors: [
    {
      name: 'RESULT AGENCY  + Tarpeeton',
      url: 'https://my-works-ten.vercel.app/'
    }
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://dr-nozim.uz',
  },
  openGraph: {
    title: 'Dr. Nozim Jumayev - Trusted Healthcare',
    description: 'Offering a full range of healthcare services for all age groups, ensuring quality, care, and professionalism.',
    url: 'https://dr-nozim.uz',
    siteName: 'Doctor Nozim Jumayev - Medical Expertise',
    images: [
      {
        url: 'https://ucarecdn.com/f9d8f124-ee0d-4bdc-b024-8fbab8deaf23/-/preview/60x71/',
        width: 60,
        height: 71,
        alt: 'Profile photo of Dr. Nozim Jumayev',
      },
      {
        url: '/public/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'App icon for Android Chrome 512x512',
      },
      {
        url: '/public/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'App icon for Apple Touch devices',
      },
    ],
    type: 'website',
    locale: 'uz_UZ',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DrNozimJumayev',
    title: 'Dr. Nozim Jumayev - Comprehensive Healthcare Services',
    description: 'Dedicated healthcare professional offering a range of medical services with a patient-centered approach.',
    images: [
      {
        url: 'https://ucarecdn.com/f9d8f124-ee0d-4bdc-b024-8fbab8deaf23/-/preview/600x315/',
        alt: 'Dr. Nozim Jumayev',
      },
    ]
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  switch (locale) {
    case 'ru':
      messages = messages_ru
      break
    case 'uz':
      messages = messages_uz
      break
    default:
      messages = messages_ru
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Описание на русском */}
        <meta name="description" content="Комплексные медицинские услуги с акцентом на заботу о пациентах и точность под руководством доктора Нозима Джумаева." lang="ru" />
        {/* Описание на узбекском */}
        <meta name="description" content="Doktor Nozim Jumayev boshchiligidagi, bemor parvarishi va aniqlikka e'tibor qaratilgan kompleks tibbiy xizmatlar." lang="uz" />

        {/* Ключевые слова на русском */}
        <meta name="keywords" content="Доктор Нозим Джумаев, медицина, медицинские услуги, забота о пациентах, здоровье, точность, Узбекистан" lang="ru" />
        {/* Ключевые слова на узбекском */}
        <meta name="keywords" content="Doktor Nozim Jumayev, tibbiyot, tibbiy xizmatlar, bemor parvarishi, salomatlik, aniqlik, O‘zbekiston" lang="uz" />

        <meta name="author" content="RESULT AGENCY + Tarpeeton" />
        <meta name="yandex-verification" content="a5bd9034f0d09cfb" />

        {/* Open Graph на русском */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:title" content="Доктор Нозим Джумаев - Доверенное Здравоохранение" />
        <meta property="og:description" content="Предоставление полного спектра медицинских услуг для всех возрастных групп, с гарантией качества, заботы и профессионализма." />
        <meta property="og:url" content="https://dr-nozim.uz" />
        <meta property="og:site_name" content="Доктор Нозим Джумаев - Медицинский Эксперт" />
        <meta property="og:image" content="https://ucarecdn.com/f9d8f124-ee0d-4bdc-b024-8fbab8deaf23/-/preview/60x71/" />
        <meta property="og:image:alt" content="Фото профиля доктора Нозима Джумаева" />

        {/* Open Graph на узбекском */}
        <meta property="og:locale" content="uz_UZ" />
        <meta property="og:title" content="Doktor Nozim Jumayev - Ishonchli Tibbiy Xizmatlar" />
        <meta property="og:description" content="Barcha yoshdagi odamlar uchun yuqori sifatli tibbiy xizmatlar, ehtiyotkorlik va professionallik kafolati bilan." />
        <meta property="og:site_name" content="Doktor Nozim Jumayev - Tibbiyot Mutaxassisi" />

        {/* Twitter Cards на русском */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DrNozimJumayev" />
        <meta name="twitter:title" content="Доктор Нозим Джумаев - Комплексные Медицинские Услуги" />
        <meta name="twitter:description" content="Посвященный медицинский специалист, предлагающий широкий спектр медицинских услуг с акцентом на пациентов." />
        <meta name="twitter:image" content="https://ucarecdn.com/f9d8f124-ee0d-4bdc-b024-8fbab8deaf23/-/preview/600x315/" />

        {/* Twitter Cards на узбекском */}
        <meta name="twitter:title" content="Doktor Nozim Jumayev - Kompleks Tibbiy Xizmatlar" />
        <meta name="twitter:description" content="Bemor manfaatlarini birinchi o‘ringa qo‘ygan tibbiyot xodimi, keng turdagi xizmatlar taklif qiladi." />

        {/* Дополнительные SEO мета-теги */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dr-nozim.uz" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Yandex.Metrika counter */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,
        a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(98748581, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
        });
      `,
          }}
        />
      </head>

      <body>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98748581"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
