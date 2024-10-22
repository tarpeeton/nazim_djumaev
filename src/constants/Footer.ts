export const FooterService = [
  {
    serviceName: {
      ru: 'Услуги',
      uz: 'Xizmatlar',
    },
    service: [
      { 
        name: { ru: 'Бариатрическая хирургия', uz: 'Bariatrik jarrohlik' }, 
        href: '/services/bariatric-surgery' 
      },
      { 
        name: { ru: 'Лапароскопическая хирургия', uz: 'Laparoskopik jarrohlik' }, 
        href: '/services/laparoscopic-surgery' 
      },
      { 
        name: { ru: 'Эстетическая хирургия', uz: 'Estetik jarrohlik' }, 
        href: '/services/aesthetic-surgery' 
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
      href: 'tel:+998932481050',
      text: { ru: 'Связаться', uz: 'Aloqa qilish' },
    },
  },
  {
    serviceName: {
      ru: 'Контакты',
      uz: 'Kontaktlar',
    },
    service: [
      { name: { ru: '+998 93 248 10 50', uz: '+998 93 248 10 50' }, href: 'tel:+998932481050' },
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