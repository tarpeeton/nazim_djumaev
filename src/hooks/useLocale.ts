import { useParams } from 'next/navigation';

const useLocale = (): 'ru' | 'uz'  => {
  const { locale } = useParams<{ locale: string }>();

  // Ensure locale is one of 'ru', 'uz', or 'en'
  return Array.isArray(locale) ? (locale[0] as 'ru' | 'uz' ) : (locale || 'ru') as 'ru' | 'uz' ;
};

export default useLocale;
