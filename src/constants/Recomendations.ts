export interface IRecomendationData {
  slug: string
  title: { ru: string; uz: string }
  subtitle: { ru: string; uz: string }
  image: string
  options: {
    text: { ru: string; uz: string }
    description: { ru: string[]; uz: string[] }
  }[]
}

export const RecomendationsData: IRecomendationData[] = [
  {
    slug: 'dieta-pered-operatsiya',
    title: {
      ru: 'Диета перед операцией',
      uz: ''
    },
    subtitle: {
      ru: 'Зачем важна диета:Успех операции и процесс восстановления во многом зависят от общего состояния здоровья пациента. Соблюдение правильного режима питания перед операцией способствует укреплению иммунной системы, снижению веса и уменьшению нагрузки на органы, участвующие в процессе метаболизма.',
      uz: ``
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Что включает диета:',
          uz: ``
        },
        description: {
          ru: [
            'За 2-3 недели до операции: рекомендуется исключить тяжелую и жирную пищу, сократить употребление углеводов и увеличить количество белков и овощей. Придерживайтесь диеты, направленной на снижение веса (особенно перед бариатрическими операциями).',
            'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
            'За 1 неделю до операции: следует избегать алкоголя и ограничить потребление кофеина.',
            'За 24 часа до операции: переход на жидкую диету (супы, бульоны) для облегчения пищеварения и минимизации риска осложнений во время наркоза.'
          ],
          uz: [
           ``,
           ``,
           ``
          ]
        }
      },
      {
        text: {
          ru: 'Особые указания для бариатрической хирургии:',
          uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
        },
        description: {
          ru: [
            'Пациентам перед бариатрическими операциями может быть рекомендована особая диета с высоким содержанием белков и низким содержанием углеводов, чтобы уменьшить размер печени и облегчить доступ к желудку.'
          ],
          uz: ['', '', '']
        }
      }
    ]
  },
// 2
  {
    slug: 'padgatovka-k-narkozu',
    title: {
      ru: 'Подготовка к наркозу',
      uz: ``
    },
    subtitle: {
      ru: 'Консультация с анестезиологом: Обязательна перед любой операцией. Пациенту необходимо предоставить полный список принимаемых медикаментов и любые аллергические реакции на препараты.',
      uz: ``
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Медикаментозная подготовка:',
          uz: ``
        },
        description: {
          ru: [
            'Если пациент принимает препараты, влияющие на свертываемость крови (антикоагулянты), их прием должен быть прекращен за несколько дней до операции, чтобы избежать кровотечений.',
            'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
            'Если пациент принимает лекарства для хронических заболеваний (диабет, гипертония и т.д.), их прием должен быть согласован с хирургом и анестезиологом.'
          ],
          uz: [
           ``,
           ``,
           ``
          ]
        }
      }
    ]
  },
  // 3
  {
    slug: 'fizicheskiy-aktivnost',
    title: {
      ru: 'Физическая активность и обследования',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Физическая подготовка: Регулярные умеренные физические нагрузки до операции (если нет противопоказаний) могут улучшить исход операции. Например, ежедневные прогулки помогут укрепить дыхательную и сердечно-сосудистую системы.',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Необходимые обследования:',
          uz: 'Diyetaning tarkibi'
        },
        description: {
          ru: [
            'Общий анализ крови и мочи.',
            'ЭКГ (электрокардиограмма), особенно для пациентов старше 40 лет или тех, кто имеет проблемы с сердцем.',
            'УЗИ или КТ области операции (если требуется).',
            'Консультации специалистов, таких как эндокринолог или кардиолог, при наличии хронических заболеваний'
          ],
          uz: [
            'Operatsiyadan 2-3 hafta oldin: ogʻir va yogʻli oziq-ovqatlarni cheklash, oddiy uglevodlarni kamaytirish tavsiya etiladi (pishiriqlar, shirinliklar).',
            'Afsus, barqaror oqsil va yangi sabzotlar isteʼmol qilinishi kerak (ayniqsa bariatrik jarrohlik oldidan).',
            'Operatsiyadan bir hafta oldin: spirtli ichimliklarni cheklash va shifokor tavsiya qilgan holda temir preparatlarni isteʼmol qilish.',
            'Operatsiyadan 3 kun oldin: kofeinni kamaytirish, ko‘proq suyuqlik ichish va yengil dietaga oʻtish tavsiya etiladi (sho‘rvalar, yogurtlar, sut mahsulotlari).'
          ]
        }
      }
    ]
  },
  // 4
  {
    slug: 'dieta-posle-operatsiya',
    title: {
      ru: 'Диета после операции',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Первый день после операции: Как правило, в первые сутки после операции пациентам разрешают только пить воду небольшими глотками. Пищу вводят постепенно, начиная с жидких продуктов (супы, бульоны, компоты).',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Первые дни и недели:',
          uz: 'Diyetaning tarkibi'
        },
        description: {
          ru: [
            'После бариатрических операций рекомендуется жидкая диета в течение первых 7-10 дней. Постепенно в рацион добавляются мягкие, легко усвояемые продукты, такие как йогурты, пюре из овощей и протеиновые коктейли.',
            'Продукты, богатые клетчаткой (овощи, фрукты), должны вводиться постепенно, чтобы избежать нагрузки на пищеварительную систему.'
          ],
          uz: ['', '']
        }
      },
      {
        text: {
          ru: 'Долгосрочная диета:',
          uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
        },
        description: {
          ru: [
            'После операций на желудке (гастропластика, шунтирование) рекомендуется соблюдать режим дробного питания – 5-6 раз в день небольшими порциями. Продукты с высоким содержанием сахара и жиров должны быть ограничены.'
          ],
          uz: ['', '', '']
        }
      }
    ]
  },
  // 5
  {
    slug: 'fizicheskiy-aktivnost-i-vostonovleniya',
    title: {
      ru: 'Физическая активность и восстановление',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Первые дни: В течение первых нескольких дней после операции рекомендуется отдыхать, однако уже на следующий день следует начать легкие физические упражнения, такие как короткие прогулки, чтобы предотвратить тромбоз и улучшить кровообращение.',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Через 1-2 недели:',
          uz: 'Diyetaning tarkibi'
        },
        description: {
          ru: [
            'Легкие физические нагрузки, такие как прогулки или легкая растяжка, помогут быстрее восстановиться. Тяжелые физические нагрузки, поднятие тяжестей и активные занятия спортом следует избегать в течение как минимум 4-6 недель после операции.',
            'Продукты, богатые клетчаткой (овощи, фрукты), должны вводиться постепенно, чтобы избежать нагрузки на пищеварительную систему.'
          ],
          uz: ['', '']
        }
      },
      {
        text: {
          ru: 'Через 4-6 недель:',
          uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
        },
        description: {
          ru: [
            'Пациент может постепенно вернуться к обычной физической активности, однако любые упражнения следует начинать только с разрешения врача. Для пациентов после бариатрических операций важно заниматься регулярными физическими упражнениями, чтобы поддерживать результаты потери веса.'
          ],
          uz: ['', '', '']
        }
      }
    ]
  },
  // 6
  {
    slug: 'poderjaniya-relultatov',
    title: {
      ru: 'Поддержание результатов после бариатрической операции',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Рацион питания: Пациенты должны строго соблюдать рекомендованный режим питания, включающий употребление продуктов с высоким содержанием белка и низким содержанием углеводов. Большие порции или частое употребление высококалорийных продуктов могут свести на нет результаты операции.',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Физическая активность:',
          uz: 'Diyetaning tarkibi'
        },
        description: {
          ru: [
            'Регулярные физические упражнения (ходьба, плавание, легкая гимнастика) важны для поддержания веса и общего здоровья. Минимальная рекомендуемая активность – 150 минут в неделю умеренной физической нагрузки.'
          ],
          uz: ['', '']
        }
      },
      {
        text: {
          ru: 'Психологическая поддержка:',
          uz: 'Bariatrik jarrohlik uchun maxsus koʻrsatmalar'
        },
        description: {
          ru: [
            'Пациенты могут испытывать психологические трудности после потери значительного количества веса. Важно вовремя обратиться за психологической помощью или участвовать в группах поддержки для сохранения мотивации.'
          ],
          uz: ['', '', '']
        }
      }
    ]
  },
// 7
  {
    slug: 'obraz-jizni-posle-plasticheskix',
    title: {
      ru: 'Образ жизни после пластических операций',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Уход за кожей: После операций по подтяжке кожи или абдоминопластике важно ухаживать за кожей, использовать увлажняющие средства и носить компрессионное белье для ускорения восстановления и улучшения результатов.',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Контроль веса:',
          uz: ''
        },
        description: {
          ru: [
            'Результаты пластической хирургии будут долговременными только при условии поддержания стабильного веса. Резкие колебания могут привести к появлению новых складок или ухудшению состояния кожи.'
          ],
          uz: ['', '']
        }
      }
    ]
  },
  // 8
  {
    slug: 'profilaktika-pavtornix-zabolevaniy',
    title: {
      ru: 'Профилактика повторных заболеваний',
      uz: 'Operatsiyaga tayyorgarlik'
    },
    subtitle: {
      ru: 'Профилактика грыж: После герниопластики рекомендуется избегать чрезмерного физического напряжения и поднятия тяжестей в течение длительного времени, чтобы избежать рецидива грыжи.',
      uz: 'Operatsiya muvaffaqiyati va tiklanish jarayoni asosan bemorning umumiy sogʻligʻiga bogʻliq. Operatsiya oldidan toʻgʻri ovqatlanish tartibiga rioya qilish immunitet tizimini mustahkamlash, vaznni kamaytirish va metabolizm jarayonida ishtirok etadigan organlarga yukni kamaytirishga yordam beradi.'
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Регулярные медицинские осмотры:',
          uz: ''
        },
        description: {
          ru: [
            'Пациенты должны регулярно проходить профилактические осмотры, особенно если у них есть предрасположенность к рецидивам заболеваний (например, желчнокаменная болезнь или грыжи).'
          ],
          uz: ['', '']
        }
      }
    ]
  }
]
