import Header from '@/components/Header'
import '../globals.css'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import {NextIntlClientProvider} from 'next-intl';
// Sample messages for each locale (you'll need to import your actual messages here)
import messages_ru from '@/translation/ru.json';
import messages_uz from '@/translation/uz.json';


export const metadata: Metadata = {
  title: 'Nozim Jumayev',
  description: '',
  authors: [{ name: 'Rustam Kidiraliyev + RESULT AGENCY', url: 'https://my-works-ten.vercel.app/' }],
  icons: {
    icon: 'https://ucarecdn.com/c0ab9c21-ce08-4be1-abdb-4c7c973261be/-/preview/60x71/', // Favicon fayli yo'li
  },
  openGraph: {
    title: '',
    description: '',
    url: 'https://yourwebsite.com', // Saytning to'liq URL manzili
    siteName: 'Med Travel',
    images: [
      {
        url: 'https://ucarecdn.com/c0ab9c21-ce08-4be1-abdb-4c7c973261be/-/preview/60x71/', // Saytni ifodalovchi rasm
        width: 800,
        height: 600,
        alt: 'Nozim Jumayev',
      },
    ],
    type: 'website',
  },
}


export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Use a dynamic import or a switch statement to load the correct messages based on the locale
  let messages;
  switch (locale) {
   
    case 'ru':
      messages = messages_ru;
      break;
    case 'uz':
      messages = messages_uz;
      break;
    // Add other locales as necessary
    default:
      messages = messages_ru; 
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider  locale={locale} messages={messages}>
          <Header locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
