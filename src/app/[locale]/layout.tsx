import Header from '@/components/Header';
import '../globals.css';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import messages_ru from '@/translation/ru.json';
import messages_uz from '@/translation/uz.json';
import Head from 'next/head';

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
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  switch (locale) {
    case 'ru':
      messages = messages_ru;
      break;
    case 'uz':
      messages = messages_uz;
      break;
    default:
      messages = messages_ru;
  }

  return (
    <html lang={locale}>
      <Head>

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
      </Head>
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
  );
}
