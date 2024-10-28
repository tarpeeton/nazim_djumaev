export const FooterService = [
  {
    serviceName: {
      ru: 'Услуги',
      uz: 'Xizmatlar',
    },
    service: [
      { 
        name: { ru: 'Гастропластика', uz: 'Gastroplastika' }, 
        href: '/services' 
      },
      { 
        name: { ru: 'Лапароскопическая хирургия', uz: 'Laparoskopik jarrohlik' }, 
        href: '/services' 
      },
      { 
        name: { ru: 'Эстетическая хирургия', uz: 'Estetik jarrohlik' }, 
        href: '/services' 
      }
    ],
    link: {
      href: '/services',
      text: { ru: 'Все услуги', uz: 'Barcha xizmatlar' },
    },
  },
  {
    serviceName: {
      ru: 'Обо мне',
      uz: 'Men haqimda',
    },
    service: [
      { name: { ru: 'Обо мне', uz: 'Men haqimda' }, href: '/about' },
      { name: { ru: 'Контакты', uz: 'Kontaktlar' }, href: '/contact' },
      { name: { ru: 'Отзывы', uz: 'Sharhlar' }, href: '/reviews' }
    ],
    link: {
      href: 'tel:+998901107887',
      text: { ru: 'Связаться', uz: 'Aloqa qilish' },
    },
  },
  {
    serviceName: {
      ru: 'Контакты',
      uz: 'Kontaktlar',
    },
    service: [
      { name: { ru: '+998 90 110 78 87', uz: '+998 90 110 78 87' }, href: 'tel:+998901107887' },
      { name: { ru: '8:00 - 20:30 пн-сб', uz: '8:00 - 20:30 Du-Shan' }, href: '#' },
      { name: { ru: 'Ул. Шифокор, г. Тошкент, Узбекистан', uz: 'Ул. Шифокор, г. Тошкент, Узбекистан' }, href: 'https://maps.google.com?q=Ul.Shifokor' }
    ],
    link: {
      href: 'https://maps.google.com?q=Ul.Shifokor',
      text: { ru: 'Проложить маршрут', uz: "Yo'lni ko'rsatish" },
    },
  },
];
export const TopService = [
  {
    name: {ru: "Услуги" , uz: "Xizmatlar"},
    href: '/services'
  },
  {
    name: {ru: "Обо мне" , uz: "Men haqimda"},
    href: '/about'
  },
  {
    name: {ru: "Контакты" , uz: "Kontaktlar"},
    href: '/contacts'
  }
]