export interface IRecomendationData {
    slug: string
    title: { ru: string, uz: string }
    subtitle: { ru: string, uz: string }
    image: string
    options: {
        text: { ru: string, uz: string }
        description: { ru: string[], uz: string[] }
    }[]
}





export const RecomendationsData: IRecomendationData[] = [
    {
        slug: 'padgatovka-k-operatsiyu',
        title: { 
            ru: 'Подготовка к операции', 
            uz: 'Operatsiyaga tayyorgarlik'
        },
        subtitle: { 
            ru: 'Успех операции и процесс восстановления во многом зависят от общего состояния здоровья пациента. Соблюдение правильного режима питания перед операцией способствует укреплению иммунной системы, снижению веса и уменьшению нагрузки на органы, участвующие в процессе метаболизма.',
            uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
        },
        image: "https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/",
        options: [
            {
                text: { 
                    ru: 'Что включает диета', 
                    uz: 'Diyetaning tarkibi'
                },
                description: {
                    ru: [
                        'За 2-3 недели до операции: рекомендуется исключить тяжёлую и жирную пищу, сократить употребление простых углеводов (выпечка, сладости).',
                        'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
                        'За 1 неделю до операции: стоит избегать алкоголя и употреблять препараты железа (если рекомендовано врачом).',
                        'За 3 дня до операции: снизить употребление кофеина, пить больше жидкости и перейти на более лёгкую диету (супы, йогурты, кисломолочные продукты).'
                    ],
                    uz: [
                        'Operatsiyadan 2-3 hafta oldin: ogʻir va yogʻli oziq-ovqatlarni cheklash, oddiy uglevodlarni kamaytirish tavsiya etiladi (pishiriqlar, shirinliklar).',
                        'Afsus, barqaror oqsil va yangi sabzotlar isteʼmol qilinishi kerak (ayniqsa bariatrik jarrohlik oldidan).',
                        'Operatsiyadan bir hafta oldin: spirtli ichimliklarni cheklash va shifokor tavsiya qilgan holda temir preparatlarni isteʼmol qilish.',
                        'Operatsiyadan 3 kun oldin: kofeinni kamaytirish, ko‘proq suyuqlik ichish va yengil dietaga oʻtish tavsiya etiladi (sho‘rvalar, yogurtlar, sut mahsulotlari).'
                    ]
                }
            },
            {
                text: { 
                    ru: 'Особые указания для бариатрической хирургии', 
                    uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
                },
                description: {
                    ru: [
                        'Пациентам, которые готовятся к бариатрической операции, могут быть даны дополнительные указания с учётом высокого избыточного веса.',
                        'Например, могут быть рекомендованы меры по уменьшению веса до операции для снижения риска осложнений.'
                    ],
                    uz: [
                        'Bariatrik operatsiyaga tayyorlanayotgan bemorlarga ortiqcha vaznni hisobga olgan holda qoʻshimcha tavsiyalar berilishi mumkin.',
                        'Masalan, operatsiyadan oldin vaznni kamaytirish bo‘yicha tavsiyalar berilishi mumkin, bu asoratlar xavfini kamaytirishga yordam beradi.'
                    ]
                }
            }
        ]
    },
    
    {
        slug: 'filter-uchun',
        title: { 
            ru: 'Подготовка к операции', 
            uz: 'Operatsiyaga tayyorgarlik'
        },
        subtitle: { 
            ru: 'Успех операции и процесс восстановления во многом зависят от общего состояния здоровья пациента. Соблюдение правильного режима питания перед операцией способствует укреплению иммунной системы, снижению веса и уменьшению нагрузки на органы, участвующие в процессе метаболизма.',
            uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
        },
        image: "https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/",
        options: [
            {
                text: { 
                    ru: 'Что включает диета', 
                    uz: 'Diyetaning tarkibi'
                },
                description: {
                    ru: [
                        'За 2-3 недели до операции: рекомендуется исключить тяжёлую и жирную пищу, сократить употребление простых углеводов (выпечка, сладости).',
                        'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
                        'За 1 неделю до операции: стоит избегать алкоголя и употреблять препараты железа (если рекомендовано врачом).',
                        'За 3 дня до операции: снизить употребление кофеина, пить больше жидкости и перейти на более лёгкую диету (супы, йогурты, кисломолочные продукты).'
                    ],
                    uz: [
                        'Operatsiyadan 2-3 hafta oldin: ogʻir va yogʻli oziq-ovqatlarni cheklash, oddiy uglevodlarni kamaytirish tavsiya etiladi (pishiriqlar, shirinliklar).',
                        'Afsus, barqaror oqsil va yangi sabzotlar isteʼmol qilinishi kerak (ayniqsa bariatrik jarrohlik oldidan).',
                        'Operatsiyadan bir hafta oldin: spirtli ichimliklarni cheklash va shifokor tavsiya qilgan holda temir preparatlarni isteʼmol qilish.',
                        'Operatsiyadan 3 kun oldin: kofeinni kamaytirish, ko‘proq suyuqlik ichish va yengil dietaga oʻtish tavsiya etiladi (sho‘rvalar, yogurtlar, sut mahsulotlari).'
                    ]
                }
            },
            {
                text: { 
                    ru: 'Особые указания для бариатрической хирургии', 
                    uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
                },
                description: {
                    ru: [
                        'Пациентам, которые готовятся к бариатрической операции, могут быть даны дополнительные указания с учётом высокого избыточного веса.',
                        'Например, могут быть рекомендованы меры по уменьшению веса до операции для снижения риска осложнений.'
                    ],
                    uz: [
                        'Bariatrik operatsiyaga tayyorlanayotgan bemorlarga ortiqcha vaznni hisobga olgan holda qoʻshimcha tavsiyalar berilishi mumkin.',
                        'Masalan, operatsiyadan oldin vaznni kamaytirish bo‘yicha tavsiyalar berilishi mumkin, bu asoratlar xavfini kamaytirishga yordam beradi.'
                    ]
                }
            }
        ]
    },
    {
        slug: 'filter-uchun',
        title: { 
            ru: 'Подготовка к операции', 
            uz: 'Operatsiyaga tayyorgarlik'
        },
        subtitle: { 
            ru: 'Успех операции и процесс восстановления во многом зависят от общего состояния здоровья пациента. Соблюдение правильного режима питания перед операцией способствует укреплению иммунной системы, снижению веса и уменьшению нагрузки на органы, участвующие в процессе метаболизма.',
            uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
        },
        image: "https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/",
        options: [
            {
                text: { 
                    ru: 'Что включает диета', 
                    uz: 'Diyetaning tarkibi'
                },
                description: {
                    ru: [
                        'За 2-3 недели до операции: рекомендуется исключить тяжёлую и жирную пищу, сократить употребление простых углеводов (выпечка, сладости).',
                        'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
                        'За 1 неделю до операции: стоит избегать алкоголя и употреблять препараты железа (если рекомендовано врачом).',
                        'За 3 дня до операции: снизить употребление кофеина, пить больше жидкости и перейти на более лёгкую диету (супы, йогурты, кисломолочные продукты).'
                    ],
                    uz: [
                        'Operatsiyadan 2-3 hafta oldin: ogʻir va yogʻli oziq-ovqatlarni cheklash, oddiy uglevodlarni kamaytirish tavsiya etiladi (pishiriqlar, shirinliklar).',
                        'Afsus, barqaror oqsil va yangi sabzotlar isteʼmol qilinishi kerak (ayniqsa bariatrik jarrohlik oldidan).',
                        'Operatsiyadan bir hafta oldin: spirtli ichimliklarni cheklash va shifokor tavsiya qilgan holda temir preparatlarni isteʼmol qilish.',
                        'Operatsiyadan 3 kun oldin: kofeinni kamaytirish, ko‘proq suyuqlik ichish va yengil dietaga oʻtish tavsiya etiladi (sho‘rvalar, yogurtlar, sut mahsulotlari).'
                    ]
                }
            },
            {
                text: { 
                    ru: 'Особые указания для бариатрической хирургии', 
                    uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
                },
                description: {
                    ru: [
                        'Пациентам, которые готовятся к бариатрической операции, могут быть даны дополнительные указания с учётом высокого избыточного веса.',
                        'Например, могут быть рекомендованы меры по уменьшению веса до операции для снижения риска осложнений.'
                    ],
                    uz: [
                        'Bariatrik operatsiyaga tayyorlanayotgan bemorlarga ortiqcha vaznni hisobga olgan holda qoʻshimcha tavsiyalar berilishi mumkin.',
                        'Masalan, operatsiyadan oldin vaznni kamaytirish bo‘yicha tavsiyalar berilishi mumkin, bu asoratlar xavfini kamaytirishga yordam beradi.'
                    ]
                }
            }
        ]
    },
    
  
];
