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
      uz: 'Jarrohlikdan oldin parhez'
    },
    subtitle: {
      ru: 'Зачем важна диета:Успех операции и процесс восстановления во многом зависят от общего состояния здоровья пациента. Соблюдение правильного режима питания перед операцией способствует укреплению иммунной системы, снижению веса и уменьшению нагрузки на органы, участвующие в процессе метаболизма.',
      uz: `Jarrohlik samarasi va tiklanish jarayoni ko‘pincha bemorning umumiy salomatligiga bog‘liq. Jarrohlikdan oldin to‘g‘ri ovqatlanish rejimiga amal qilish immunitet tizimini mustahkamlashga, vaznni kamaytirishga va moddalar almashinuvi jarayonida ishtirok etadigan organlarga bosimni kamaytirishga yordam beradi.`
    },
    image:
      'https://ucarecdn.com/beb1b416-8222-4a8e-b6e9-6be16a5beb46/-/preview/1000x667/',
    options: [
      {
        text: {
          ru: 'Что включает диета:',
          uz: `Parhez nimadan iborat:`
        },
        description: {
          ru: [
            'За 2-3 недели до операции: рекомендуется исключить тяжелую и жирную пищу, сократить употребление углеводов и увеличить количество белков и овощей. Придерживайтесь диеты, направленной на снижение веса (особенно перед бариатрическими операциями).',
            'Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
            'За 1 неделю до операции: следует избегать алкоголя и ограничить потребление кофеина.',
            'За 24 часа до операции: переход на жидкую диету (супы, бульоны) для облегчения пищеварения и минимизации риска осложнений во время наркоза.'
          ],
          uz: [
           `Jarrohlikdan 2-3 hafta oldin: og‘ir va yog‘li ovqatlarni isteʼmol qilmaslik, uglevodlarni kamroq isteʼmol qilish va oqsil, sabzavotlarni ko‘paytirish tavsiya qilinadi. Vazn yo‘qotish parheziga amal qiling (ayniqsa, bariatrik jarrohlik amaliyotidan oldin).`,
           `Jarrohlikdan 1 hafta oldin: spirtli ichimliklardan voz kechish va kofein isteʼmol qilishni kamaytirish.`,
           `Jarrohlikdan 24 soat oldin: ovqat hazm qilish osonroq bo‘lishi va narkoz paytida asoratlar xavfini kamaytirish uchun suyuq parhezga (sho‘rva, bulyon) o‘tish.`,
           `Bariatrik jarrohlik uchun maxsus ko‘rsatmalar: Jigar hajmini kichraytirish va oshqozonga kirishni osonlashtirish uchun bariatrik jarrohlikdan oldin bemorlarga oqsillar miqdori yuqori va uglevodlar miqdori kam bo‘lgan maxsus parhez tavsiya etilishi mumkin.`
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
          uz: ['Jigar hajmini kichraytirish va oshqozonga kirishni osonlashtirish uchun bariatrik jarrohlikdan oldin bemorlarga oqsillar miqdori yuqori va uglevodlar miqdori kam bo‘lgan maxsus parhez tavsiya etilishi mumkin.']
        }
      }
    ]
  },
// 2
  {
    slug: 'padgatovka-k-narkozu',
    title: {
      ru: 'Подготовка к наркозу',
      uz: `Narkozga tayyorgarlik`
    },
    subtitle: {
      ru: 'Консультация с анестезиологом: Обязательна перед любой операцией. Пациенту необходимо предоставить полный список принимаемых медикаментов и любые аллергические реакции на препараты.',
      uz: `Anesteziolog bilan konsultatsiya: Bu har qanday jarrohlikdan oldin zarur. Bemor qabul qilayotgan dori-darmonlarning to‘liq ro‘yhatini va dorilarga bo‘lgan har qanday allergik reaksiyalarini taqdim etishi kerak.`
    },
    image:
      'https://ucarecdn.com/b14d155c-999f-49b5-8b50-756eba82cd73/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Медикаментозная подготовка:',
          uz: `Dori-darmonlar bo‘yicha tayyorgarlik:`
        },
        description: {
          ru: [
            'Если пациент принимает препараты, влияющие на свертываемость крови (антикоагулянты), их прием должен быть прекращен за несколько дней до операции, чтобы избежать кровотечений,Предпочтение стоит отдавать белковой пище и свежим овощам (особенно перед бариатрической операцией).',
            'Если пациент принимает лекарства для хронических заболеваний (диабет, гипертония и т.д.), их прием должен быть согласован с хирургом и анестезиологом.'
          ],
          uz: [
           `Agar bemor qon ivishiga taʼsir qiladigan dorilarni (antikoagulyantlar) qabul qilayotgan bo‘lsa, qon ketishning oldini olish uchun jarrohlik amaliyotidan bir necha kun oldin ularni to‘xtatishi kerak.`,
           `Agar bemor surunkali kasalliklar (qandli diabet, gipertoniya va boshqalar) uchun dori-darmonlarni qabul qilayotgan bo‘lsa, ularni qabul qilish borasida jarroh va anesteziolog bilan maslahatlashish kerak.`,
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
      uz: 'Jismoniy faollik va tekshiruvlar'
    },
    subtitle: {
      ru: 'Физическая подготовка: Регулярные умеренные физические нагрузки до операции (если нет противопоказаний) могут улучшить исход операции. Например, ежедневные прогулки помогут укрепить дыхательную и сердечно-сосудистую системы.',
      uz: `Jismoniy tayyorgarlik: Operatsiyadan oldin doimiy o‘rtacha jismoniy faoliyat (agar ruxsat etilgan bo‘lsa) operatsiya natijasini yaxshilashi mumkin. Masalan, kunda piyoda yurish nafas olish va yurak-qon tomir tizimlarini mustahkamlashga yordam beradi.`
    },
    image:
      'https://ucarecdn.com/9f699951-500c-4566-bff9-6bf89a46e097/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Необходимые обследования:',
          uz: 'Zaruriy tekshiruvlar:'
        },
        description: {
          ru: [
            'Общий анализ крови и мочи.',
            'ЭКГ (электрокардиограмма), особенно для пациентов старше 40 лет или тех, кто имеет проблемы с сердцем.',
            'УЗИ или КТ области операции (если требуется).',
            'Консультации специалистов, таких как эндокринолог или кардиолог, при наличии хронических заболеваний'
          ],
          uz: [
           `Umumiy qon va siydik tahlili.`,
           `EKG (elektrokardiogramma), ayniqsa, 40 yoshdan oshgan yoki yurak muammolari bo‘lgan bemorlar uchun.`,
           `EKG (elektrokardiogramma), ayniqsa, 40 yoshdan oshgan yoki yurak muammolari bo‘lgan bemorlar uchun.`,
           `Surunkali kasalliklar bo‘lsa, endokrinolok yoki kardiolog kabi mutaxassislarning konsultatsiyasi.`

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
      uz: 'Jarrohlikdan keyin parhez'
    },
    subtitle: {
      ru: 'Первый день после операции: Как правило, в первые сутки после операции пациентам разрешают только пить воду небольшими глотками. Пищу вводят постепенно, начиная с жидких продуктов (супы, бульоны, компоты).',
      uz: `Jarrohlikdan keyin birinchi kun:
              Odatda, jarrohlikdan keyingi birinchi kunlarda bemorlarga faqat kichik qultumlar bilan suv ichish ruxsat etiladi. Oziq-ovqat suyuq mahsulotlardan (sho‘rva, bulyon, kompot) boshlab asta-sekin kiritiladi.
`
    },
    image:
      'https://ucarecdn.com/ddde601c-1b9a-46d8-8c80-fd3f5a034a7c/-/preview/1000x667/',
    options: [
      {
        text: {
          ru: 'Первые дни и недели:',
          uz: 'Birinchi kunlar va haftalar:'
        },
        description: {
          ru: [
            'После бариатрических операций рекомендуется жидкая диета в течение первых 7-10 дней. Постепенно в рацион добавляются мягкие, легко усвояемые продукты, такие как йогурты, пюре из овощей и протеиновые коктейли, Продукты, богатые клетчаткой (овощи, фрукты), должны вводиться постепенно, чтобы избежать нагрузки на пищеварительную систему.'
          ],
          uz: ['Bariatrik jarrohlikdan so‘ng birinchi 7-10 kun davomida suyuq parhez tavsiya etiladi , Ratsionga asta-sekin yogurt, sabzavot pyuresi va oqsilli koktellar kabi yumshoq, oson hazm bo‘ladigan mahsulotlar qo‘shiladi.']
        }
      },
      {
        text: {
          ru: 'Долгосрочная диета:',
          uz: 'Uzoq muddatli parhez:'
        },
        description: {
          ru: [
            'После операций на желудке (гастропластика, шунтирование) рекомендуется соблюдать режим дробного питания – 5-6 раз в день небольшими порциями. Продукты с высоким содержанием сахара и жиров должны быть ограничены.'
          ],
          uz: [' Oshqozon operatsiyalaridan so‘ng (gastroplastika, shuntlash) oralatib ovqatlanish rejimiga rioya qilish tavsiya etiladi – kuniga 5-6 marta kichik porsiyalardan yeyish. Shakar va yog‘lar miqdori yuqori bo‘lgan mahsulotlar cheklangan bo‘lishi kerak.']
        }
      }
    ]
  },
  // 5
  {
    slug: 'fizicheskiy-aktivnost-i-vostonovleniya',
    title: {
      ru: 'Физическая активность и восстановление',
      uz: 'Jismoniy faollik va tiklanish'
    },
    subtitle: {
      ru: 'Первые дни: В течение первых нескольких дней после операции рекомендуется отдыхать, однако уже на следующий день следует начать легкие физические упражнения, такие как короткие прогулки, чтобы предотвратить тромбоз и улучшить кровообращение.',
      uz: `Birinchi kunlar:Jarrohlikdan keyingi bir necha kun dam olish tavsiya etiladi, ammo trombozning oldini olish va qon aylanishini yaxshilash uchun ertasi kuni oz-moz piyoda yurish kabi yengil jismoniy mashqlarni boshlash kerak.
`
    },
    image:
      'https://ucarecdn.com/5f687eb8-c09d-41eb-97c0-4b0f49fc70ec/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Через 1-2 недели:',
          uz: '1-2 haftadan keyin: '
        },
        description: {
          ru: [
            'Легкие физические нагрузки, такие как прогулки или легкая растяжка, помогут быстрее восстановиться. Тяжелые физические нагрузки, поднятие тяжестей и активные занятия спортом следует избегать в течение как минимум 4-6 недель после операции.',
            'Продукты, богатые клетчаткой (овощи, фрукты), должны вводиться постепенно, чтобы избежать нагрузки на пищеварительную систему.'
          ],
          uz: ['Piyoda yurish yoki yengil cho‘zilish kabi yengil jismoniy faoliyat tezroq tiklanishga yordam beradi. Operatsiyadan keyin kamida 4-6 hafta davomida og‘ir jismoniy faoliyat, og‘irlik ko‘tarish va sport bilan faol tarzda shug‘ullanishdan qochish kerak.']
        }
      },
      {
        text: {
          ru: 'Через 4-6 недель:',
          uz: '4-6 haftadan keyin:'
        },
        description: {
          ru: [
            'Пациент может постепенно вернуться к обычной физической активности, однако любые упражнения следует начинать только с разрешения врача. Для пациентов после бариатрических операций важно заниматься регулярными физическими упражнениями, чтобы поддерживать результаты потери веса.'
          ],
          uz: ['Bemor asta-sekin oddiy jismoniy faoliyatga qaytishi mumkin, ammo har qanday mashqlarni faqat shifokorning ruxsati bilan boshlash kerak. Bemorlar bariatrik operatsiyalardan keyin vazn yo‘qotish natijalarini saqlab qolishi uchun doimiy ravishda jismoniy mashqlar bilan shug‘ullanishi muhim.']
        }
      }
    ]
  },
  // 6
  {
    slug: 'poderjaniya-relultatov',
    title: {
      ru: 'Поддержание результатов после бариатрической операции',
      uz: 'Bariatrik jarrohlikdan keyin natijalarni saqlab qolish'
    },
    subtitle: {
      ru: 'Рацион питания: Пациенты должны строго соблюдать рекомендованный режим питания, включающий употребление продуктов с высоким содержанием белка и низким содержанием углеводов. Большие порции или частое употребление высококалорийных продуктов могут свести на нет результаты операции.',
      uz: `Ovqatlanish ratsioni:  Bemorlar tavsiya etilgan ovqatlanish tartibiga qatʼiy rioya qilishi kerak, unda oqsil miqdori yuqori va uglevodlar miqdori kam bo‘lgan mahsulotlarni isteʼmol qilish man etiladi. Katta porsiyalar yoki yuqori kaloriyali mahsulotlarni tez-tez isteʼmol qilish operatsiya natijalarini yo‘qqa chiqarishi mumkin.`
    },
    image:
      'https://ucarecdn.com/59a09193-0a82-4c65-8f4b-a53d5dc48348/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Физическая активность:',
          uz: 'Jismoniy faoliyat:'
        },
        description: {
          ru: [
            'Регулярные физические упражнения (ходьба, плавание, легкая гимнастика) важны для поддержания веса и общего здоровья. Минимальная рекомендуемая активность – 150 минут в неделю умеренной физической нагрузки.'
          ],
          uz: [`Muntazam jismoniy mashqlar (yurish, suzish, yengil gimnastika) vazn va umumiy salomatlikni saqlash uchun muhim. Tavsiya etilgan minimal faoliyat - haftasiga 150 daqiqa o‘rtacha jismoniy faollik.`]
        }
      },
      {
        text: {
          ru: 'Психологическая поддержка:',
          uz: 'Psixologik yordam: '
        },
        description: {
          ru: [
            'Пациенты могут испытывать психологические трудности после потери значительного количества веса. Важно вовремя обратиться за психологической помощью или участвовать в группах поддержки для сохранения мотивации.'
          ],
          uz: ['Bemorlar sezilarli darajada vazn yo‘qotgandan keyin psixologik qiyinchiliklarga duch kelishlari mumkin. Motivatsiyani saqlab qolish uchun o‘z vaqtida psixologik yordam so‘rash yoki qo‘llab-quvvatlash guruhlarida qatnashish muhim.']
        }
      }
    ]
  },
// 7
  {
    slug: 'obraz-jizni-posle-plasticheskix',
    title: {
      ru: 'Образ жизни после пластических операций',
      uz: 'Plastik jarrohlikdan keyingi hayot tarzi'
    },
    subtitle: {
      ru: 'Уход за кожей: После операций по подтяжке кожи или абдоминопластике важно ухаживать за кожей, использовать увлажняющие средства и носить компрессионное белье для ускорения восстановления и улучшения результатов.',
      uz: `Terini parvarishlash: Terini tortish bo‘yicha operatsiyalar yoki abdominoplastikadan so‘ng tiklanishni tezlashtirish va natijalarni yaxshilash uchun teriga g‘amxo‘rlik qilish, namlovchi vositalardan foydalanish va kompression ichki kiyim kiyish muhim.`
    },
    image:
      'https://ucarecdn.com/ddd8f8a8-e9f6-492c-bebb-ea55a91bd16c/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Контроль веса:',
          uz: 'Vaznni nazorat qilish: '
        },
        description: {
          ru: [
            'Результаты пластической хирургии будут долговременными только при условии поддержания стабильного веса. Резкие колебания могут привести к появлению новых складок или ухудшению состояния кожи.'
          ],
          uz: ['Faqat doimiy vaznni saqlagan holda plastik jarrohlik natijalari uzoq davom etadi. To‘satdan tebranishlar tufayli yangi burmalar paydo bo‘lishi yoki terining holati yomonlashishi mumkin.']
        }
      }
    ]
  },
  // 8
  {
    slug: 'profilaktika-pavtornix-zabolevaniy',
    title: {
      ru: 'Профилактика повторных заболеваний',
      uz: `Takroriy kasalliklarning profilaktikasi`
    },
    subtitle: {
      ru: 'Профилактика грыж: После герниопластики рекомендуется избегать чрезмерного физического напряжения и поднятия тяжестей в течение длительного времени, чтобы избежать рецидива грыжи.',
      uz: `Churra profilaktikasi: Gernioplastikadan so‘ng churra qaytalanmasligi uchun uzoq vaqt davomida ortiqcha jismoniy zo‘riqish va og‘ir narsalarni ko‘tarishdan saqlanish tavsiya etiladi.`
    },
    image:
      'https://ucarecdn.com/9a4a789c-d7f4-4053-a1d6-ae5d5fa9fb98/-/preview/1000x666/',
    options: [
      {
        text: {
          ru: 'Регулярные медицинские осмотры:',
          uz: 'Muntazam tibbiy ko‘riklar: '
        },
        description: {
          ru: [
            'Пациенты должны регулярно проходить профилактические осмотры, особенно если у них есть предрасположенность к рецидивам заболеваний (например, желчнокаменная болезнь или грыжи).'
          ],
          uz: ['Bemorlar, ayniqsa, kasalliklarning qaytalanishiga moyil bo‘lsa (masalan, o‘t-tosh kasalligi yoki churralar) doimo profilaktik tekshiruvdan o‘tishi kerak.']
        }
      }
    ]
  }
]
