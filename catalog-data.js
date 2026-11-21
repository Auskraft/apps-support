// Данные из листа «Приложения». badgeText и highlights — необязательные поля.
// Выпуски в releases идут от нового к старым, у каждого своя ссылка apkUrl.
const catalogApps = [
  {
    "name": "Дневник давления и пульса",
    "highlights": "Из моих приложений для здоровья этому я уделил больше всего времени. В моём тесте дневник начал замедляться после 300 000 записей. Это больше 40 лет при 20 записях в день.",
    "icon": "assets/apps/blood-pressure-diary.webp",
    "categories": [
      "health"
    ],
    "description": "Личный дневник давления, пульса, сна и других показателей с учётом приёма и запаса лекарств.",
    "badgeText": "Флагман",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.blood_pressure_diary",
    "releases": [
      {
        "version": "14.1.0",
        "notes": "В уведомлениях о лекарствах появились быстрые отметки «Принял» и «Отложить». Интервал откладывания и повторов настраивается отдельно для каждого профиля.",
        "apkUrl": "https://disk.yandex.ru/d/pMz0ay2pILEkqQ"
      }
    ]
  },
  {
    "name": "Дневник уколов (GLP-1)",
    "icon": "assets/apps/injection-diary.webp",
    "categories": [
      "health"
    ],
    "description": "Дневник инъекций GLP-1 с учётом доз, напоминаниями, историей веса и замерами тела.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.injection_diary",
    "releases": [
      {
        "version": "10.1.2",
        "notes": "Исправлено восстановление авторизации Яндекс Диска после переустановки.",
        "apkUrl": "https://disk.yandex.ru/d/OEHyPb57Cy2YxQ"
      }
    ]
  },
  {
    "name": "Таблетки — приём лекарств",
    "icon": "assets/apps/tabletki.webp",
    "categories": [
      "health"
    ],
    "description": "Напоминания о лекарствах для себя и близких. Приложение хранит расписания и историю приёма по отдельным профилям.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.tabletki",
    "releases": [
      {
        "version": "8.3.0",
        "notes": "Приём можно отметить прямо в развёрнутом уведомлении. Для нескольких лекарств есть кнопка «Принял всё». Напоминание можно отложить, а интервал повторов задать от 5 до 90 минут.",
        "apkUrl": "https://disk.yandex.ru/d/oTWY45lE2fbmeg"
      }
    ]
  },
  {
    "name": "Таблетница",
    "highlights": "Можно настроить расписание для каждого лекарства. Например, выбрать разное время для будней и выходных или назначить несколько приёмов в день.",
    "icon": "assets/apps/tablitnica.webp",
    "categories": [
      "health"
    ],
    "description": "Напоминания о приёме лекарств с гибким расписанием, историей, виджетами и отдельными профилями для близких.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.tablitnica",
    "releases": [
      {
        "version": "8.3.0",
        "notes": "Приём можно отметить прямо в развёрнутом уведомлении. Для нескольких лекарств есть кнопка «Принял всё». Напоминание можно отложить, а интервал повторов задать от 5 до 90 минут.",
        "apkUrl": "https://disk.yandex.ru/d/HK2kAmzubnpiiQ"
      }
    ]
  },
  {
    "name": "Pure PDF",
    "icon": "assets/apps/pure-pdf.webp",
    "categories": [
      "work"
    ],
    "description": "Офлайн-просмотрщик PDF с поиском по тексту, закладками, ночным режимом и сохранением позиции чтения.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.purepdf",
    "releases": [
      {
        "version": "1.8.4",
        "notes": "QR-код на экране поддержки стал крупнее и лучше читается на узких экранах.",
        "apkUrl": "https://disk.yandex.ru/d/bITd9-ImjEvuRw"
      }
    ]
  },
  {
    "name": "График работы / смен",
    "icon": "assets/apps/work-shift-calendar.webp",
    "categories": [
      "work"
    ],
    "description": "Календарь рабочего графика со сменами, выходными и отпусками. Можно настроить цикл или расставить смены вручную.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.work_shift_calendar",
    "releases": [
      {
        "version": "31.0.1",
        "notes": "Сегодняшний день выделен рамкой в обоих месячных виджетах. Цвета виджетов согласованы с темой, на стеклянной подложке улучшена читаемость.",
        "apkUrl": "https://disk.yandex.ru/d/GQSCzh45TuBPsg"
      }
    ]
  },
  {
    "name": "График смен",
    "highlights": "Это моё самое популярное приложение в RuStore.",
    "icon": "assets/apps/shifts.webp",
    "categories": [
      "work"
    ],
    "description": "Календарь для сменной работы и вахты. Поддерживает повторяющиеся циклы, свой порядок смен, ручные отметки, отпуск и несколько профилей.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.rotating_shift",
    "releases": [
      {
        "version": "31.0.1",
        "notes": "Сегодняшний день выделен рамкой в обоих месячных виджетах. Цвета виджетов согласованы с темой, на стеклянной подложке улучшена читаемость.",
        "apkUrl": "https://disk.yandex.ru/d/2_JObqxC8txz8Q"
      }
    ]
  },
  {
    "name": "График смен PRO",
    "highlights": "В этой версии я больше всего работал над интерфейсом. Можно выбрать одну из 300 тем, составить график, поставить будильники на смены и рассчитать зарплату.",
    "icon": "assets/apps/shiftplus.webp",
    "categories": [
      "work"
    ],
    "description": "Календарь смен с гибкими циклами и учётом заработка. Поддерживает несколько профилей и оформление календаря под себя.",
    "badgeText": "Выбор разработчика",
    "releases": [
      {
        "version": "1.0.3",
        "notes": "В каталог добавлены 97 текстурных тем «Танькины». Обновлены варианты расчёта, ведомость и сетка выбора тем.",
        "apkUrl": "https://disk.yandex.ru/d/meaZ5sMfkN8bpg"
      }
    ]
  },
  {
    "name": "График смен ПВЗ",
    "icon": "assets/apps/rotating-shift-pvz.webp",
    "categories": [
      "work"
    ],
    "description": "График для сотрудников и руководителей ПВЗ. Помогает планировать смены, видеть расписание команды и рассчитывать ожидаемый доход.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.rotating_shift_pvz",
    "releases": [
      {
        "version": "1.0.3",
        "notes": "На экране сотрудника упрощён заголовок и уточнено отображение даты следующей рабочей смены.",
        "apkUrl": "https://disk.yandex.ru/d/n0LySnfHUUmv9w"
      }
    ]
  },
  {
    "name": "Заметки AUS",
    "highlights": "Заметка сохраняется, пока вы пишете. Чтобы продолжить на другом устройстве, можно включить синхронизацию через Яндекс Диск.",
    "icon": "assets/apps/notes.webp",
    "categories": [
      "work"
    ],
    "description": "Заметки для дел и идей с папками, поиском, списками, фотографиями и таблицами.",
    "badgeText": "Флагман",
    "storeUrl": "https://www.rustore.ru/catalog/app/dev.auskraft.zametka",
    "releases": [
      {
        "version": "11.1.3",
        "notes": "Добавление покупок стало компактнее. Количество выбирается на барабане, купленные позиции зачёркиваются. Добавлена настройка размытия стекла с предпросмотром.",
        "apkUrl": "https://disk.yandex.ru/d/ZiOInq-5wBCwxw"
      }
    ]
  },
  {
    "name": "Календарь",
    "icon": "assets/apps/calendar.webp",
    "categories": [
      "work"
    ],
    "description": "Локальный календарь с событиями, напоминаниями и четырьмя видами — месяц, неделя, день и повестка.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.calendar",
    "releases": [
      {
        "version": "1.0.1",
        "notes": "Добавлен экран добровольной поддержки и исправлено название календаря.",
        "apkUrl": "https://disk.yandex.ru/d/d19_5gR2S0S3Iw"
      }
    ]
  },
  {
    "name": "Вирд",
    "icon": "assets/apps/wird.webp",
    "categories": [
      "muslim"
    ],
    "description": "Личный планер чтения Корана с дневной нормой и журналом прогресса.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.wird",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлена возможность добровольно поддержать разработчика.",
        "apkUrl": "https://disk.yandex.ru/d/sl3EwcGp1BrXyQ"
      }
    ]
  },
  {
    "name": "Дуа",
    "icon": "assets/apps/dua.webp",
    "categories": [
      "muslim"
    ],
    "description": "Ежедневные дуа с переводом смысла, источниками и путём для новичков.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.dua",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлен экран добровольной поддержки, доступный с главной и из настроек.",
        "apkUrl": "https://disk.yandex.ru/d/wGGF9PMGG49ECw"
      }
    ]
  },
  {
    "name": "Закят",
    "icon": "assets/apps/zakat.webp",
    "categories": [
      "muslim"
    ],
    "description": "Калькулятор закята с учётом разных валют, имущества, долгов и даты по лунному календарю.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.zakat",
    "releases": [
      {
        "version": "0.1.2",
        "notes": "Добавлен экран добровольной поддержки, доступный с главной и из справки.",
        "apkUrl": "https://disk.yandex.ru/d/vSfFYIXPW6Yieg"
      }
    ]
  },
  {
    "name": "Када (Трекер пропущенных намазов)",
    "icon": "assets/apps/kada.webp",
    "categories": [
      "muslim"
    ],
    "description": "Дневник пропущенных намазов, который помогает вести учёт и отмечать восполненные молитвы.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.kada",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлен экран добровольной поддержки, доступный из карточки «Када» и настроек.",
        "apkUrl": "https://disk.yandex.ru/d/7XjLUlIGvpYqBw"
      }
    ]
  },
  {
    "name": "Мухасаба",
    "icon": "assets/apps/muhasaba.webp",
    "categories": [
      "muslim"
    ],
    "description": "Исламский планер с отметками намазов, задачами дня, вечерней мухасабой и недельной сводкой.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.muhasaba",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлен экран добровольной поддержки, доступный с главной и из настроек.",
        "apkUrl": "https://disk.yandex.ru/d/3N4xuWZkGoxVxg"
      }
    ]
  },
  {
    "name": "Салят (Намаз)",
    "icon": "assets/apps/namaz.webp",
    "categories": [
      "muslim"
    ],
    "description": "Офлайн-расчёт времени намазов, компас Киблы, напоминания с азаном и пошаговые руководства по омовению.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.namaz",
    "releases": [
      {
        "version": "1.1",
        "notes": "Добавлен экран добровольной поддержки. Приложение называется «Салят (Намаз)».",
        "apkUrl": "https://disk.yandex.ru/d/tOFwv7vTzGNa7g"
      }
    ]
  },
  {
    "name": "Саум",
    "icon": "assets/apps/saum.webp",
    "categories": [
      "muslim"
    ],
    "description": "Трекер пропущенных и добровольных постов с календарём и историей.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.saum",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлена возможность добровольно поддержать разработчика.",
        "apkUrl": "https://disk.yandex.ru/d/eOisqU-06eCMQg"
      }
    ]
  },
  {
    "name": "Сунны (سُنَّة‎ )",
    "icon": "assets/apps/sunna.webp",
    "categories": [
      "muslim"
    ],
    "description": "200 сунн и наставлений на каждый день с арабским текстом, переводом смысла и ссылками на источники.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.sunna",
    "releases": [
      {
        "version": "1.1.3",
        "notes": "Добавлен экран добровольной поддержки на семи языках интерфейса. Он доступен с главной и из настроек.",
        "apkUrl": "https://disk.yandex.ru/d/nqUXozJuHFWd3g"
      }
    ]
  },
  {
    "name": "Умра",
    "icon": "assets/apps/umra.webp",
    "categories": [
      "muslim"
    ],
    "description": "Офлайн-помощник для умры с описанием этапов, счётчиками тавафа и са‘я, дуа и чек-листом.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.umra",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлен экран добровольной поддержки, доступный с главной и из раздела «Ещё».",
        "apkUrl": "https://disk.yandex.ru/d/tXPjc83gpSYUXw"
      }
    ]
  },
  {
    "name": "Хифз",
    "icon": "assets/apps/hifz.webp",
    "categories": [
      "muslim"
    ],
    "description": "Офлайн-помощник для заучивания аятов и повторения по памяти.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.hifz",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлен экран добровольной поддержки, доступный с главной и из настроек.",
        "apkUrl": "https://disk.yandex.ru/d/cwaoF1ty3Eh4BA"
      }
    ]
  },
  {
    "name": "Дневник питомца",
    "highlights": "Сначала я хотел просто помнить дни рождения питомцев. Теперь у каждого есть свой календарь, график веса и паспорт, который можно отправить ветеринару.",
    "icon": "assets/apps/pet-diary.webp",
    "categories": [
      "pets"
    ],
    "description": "Дневник для нескольких питомцев. Хранит документы, вес, кормление и историю ухода, поддерживает напоминания и паспорт в PDF.",
    "badgeText": "Милое",
    "storeUrl": "https://www.rustore.ru/catalog/app/ru.auskraft.pet_diary",
    "releases": [
      {
        "version": "1.0.5",
        "notes": "Обновлено окно оценки приложения. Оно открывается в компактной панели и не мешает вводу, документам или действиям по напоминаниям.",
        "apkUrl": "https://disk.yandex.ru/d/-wbocrivKKXUlA"
      }
    ]
  },
  {
    "name": "Архиватор AUS",
    "icon": "assets/apps/archivatoraus.webp",
    "categories": [
      "tools"
    ],
    "description": "Просмотр и распаковка архивов на телефоне. Поддерживает поиск внутри архива и создание ZIP с паролем.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.archivatoraus",
    "releases": [
      {
        "version": "1.0.1",
        "notes": "Главный экран стал компактнее, обновлены навигация и настройки, добавлены доступные в приложении юридические документы.",
        "apkUrl": "https://disk.yandex.ru/d/TV9x1dB0opEw9w"
      }
    ]
  },
  {
    "name": "Будильник (Chime Noir)",
    "icon": "assets/apps/chime-noir.webp",
    "categories": [
      "tools"
    ],
    "description": "Будильник в тёмном оформлении с таймером и секундомером, выбором мелодий и шрифтов.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.chimenoir",
    "releases": [
      {
        "version": "8.1.5",
        "notes": "Добавлено 18 кириллических шрифтов для заголовков и основного текста. Подписи кнопок и навигации адаптируются к выбранному шрифту.",
        "apkUrl": "https://disk.yandex.ru/d/H5VcHcmXUPfrwg"
      }
    ]
  },
  {
    "name": "Будильник (Chime)",
    "icon": "assets/apps/chime.webp",
    "categories": [
      "tools"
    ],
    "description": "Будильник с таймером и секундомером. Поддерживает свои мелодии, вибрацию и настройку внешнего вида.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.chime",
    "releases": [
      {
        "version": "8.1.3",
        "notes": "Кнопки секундомера стали шире, чтобы подпись «Продолжить» помещалась на компактных экранах.",
        "apkUrl": "https://disk.yandex.ru/d/W7riUqgR99bFow"
      }
    ]
  },
  {
    "name": "Будильник (Morné)",
    "icon": "assets/apps/morne.webp",
    "categories": [
      "tools"
    ],
    "description": "Будильник с собственными звуками, настройкой сигнала, повтора и оформлением экрана звонка.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.morne",
    "releases": [
      {
        "version": "2.8.1",
        "notes": "Улучшено отображение экрана звонка поверх блокировки. Добавлен резервный способ показать экран, пока будильник звонит.",
        "apkUrl": "https://disk.yandex.ru/d/AMNQnUfOxBJBtA"
      }
    ]
  },
  {
    "name": "Будильник Chime Pro",
    "icon": "assets/apps/chime-pro.webp",
    "categories": [
      "tools"
    ],
    "description": "Будильники по датам, таймеры с пресетами и секундомер. Можно настроить своё оформление и звуки.",
    "badgeText": "Выбор разработчика",
    "highlights": "Из всех моих будильников у этого больше всего настроек оформления. Есть 300 тем. Для экрана звонка можно выбрать отдельную тему или своё фото.",
    "releases": [
      {
        "version": "1.1.2",
        "notes": "Обновлён экран таймеров. Активные таймеры показаны отдельным списком, недавние можно повторить, а общие параметры звука, вибрации и фонарика настраиваются отдельно.",
        "apkUrl": "https://disk.yandex.ru/d/OEA5WEC4Bf9g6Q"
      }
    ]
  },
  {
    "name": "Калькулятор AUS",
    "icon": "assets/apps/calculatoraus.webp",
    "categories": [
      "tools"
    ],
    "description": "Обычный и инженерный калькулятор с историей вычислений, конвертером единиц и выбором темы.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.calculatoraus",
    "releases": [
      {
        "version": "1.0.1",
        "notes": "Длинные результаты отображаются компактно. Нажатие показывает полное число, а копирование сохраняет точность.",
        "apkUrl": "https://disk.yandex.ru/d/4zJMTzBOe4GmYQ"
      }
    ]
  },
  {
    "name": "Конвертер валют",
    "icon": "assets/apps/covert.webp",
    "categories": [
      "tools"
    ],
    "description": "Пересчёт суммы сразу в несколько валют с автоматическим обновлением курсов и сохранением выбранных валют.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.covert",
    "releases": [
      {
        "version": "2.1.0",
        "notes": "Добавлен экран добровольной поддержки с QR-кодом. Его можно открыть с главного экрана и из настроек.",
        "apkUrl": "https://disk.yandex.ru/d/pon9gma6b9wjBw"
      }
    ]
  },
  {
    "name": "Открывалкин",
    "highlights": "Распознаёт больше 1 000 файловых расширений. Среди них форматы текстов, таблиц, изображений, 3D-моделей и снимков МРТ и КТ.",
    "icon": "assets/apps/otkrivalkin.webp",
    "categories": [
      "tools"
    ],
    "description": "Просмотр документов, изображений и 3D-моделей на телефоне. Поддерживает открытие и распаковку архивов.",
    "badgeText": "Флагман",
    "releases": [
      {
        "version": "0.1.2",
        "notes": "Улучшен просмотр сложных 3D-моделей. При отображении больше не пропадают грани из-за прежнего ограничения.",
        "apkUrl": "https://disk.yandex.ru/d/0EPpycJGtpb25Q"
      }
    ]
  },
  {
    "name": "Фонарик (Pharos)",
    "icon": "assets/apps/pharos.webp",
    "categories": [
      "tools"
    ],
    "description": "Фонарик и цветная экранная лампа с регулировкой яркости, сигналом SOS и передачей азбуки Морзе.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.pharos",
    "releases": [
      {
        "version": "1.0.0",
        "notes": "Первый выпуск. Добавлены экранная лампа, фонарик, азбука Морзе, SOS, стробоскоп и ночной режим.",
        "apkUrl": "https://disk.yandex.ru/d/UMRNDH0Bvd1JEg"
      }
    ]
  },
  {
    "name": "Natsukashi Yoru",
    "icon": "assets/apps/natsukashi-yoru.webp",
    "categories": [
      "games"
    ],
    "description": "Сборник ретро-мини-игр с личными рекордами, ежедневной серией и настраиваемым управлением.",
    "badgeText": "Настольгическое",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.natsukashi_yoru",
    "releases": [
      {
        "version": "1.8.2",
        "notes": "Добавлены отдельные настройки управления в играх. Доступные варианты включают крестовину, джойстик, наклон и кнопки. Улучшен интерфейс.",
        "apkUrl": "https://disk.yandex.ru/d/8fDkxw-BXz302g"
      }
    ]
  },
  {
    "name": "Natsukashi Yoru Tanks",
    "icon": "assets/apps/natsukashi-tanks.webp",
    "categories": [
      "games"
    ],
    "description": "Танковая ретро-аркада с кампанией, боссами, режимом выживания и ежедневным испытанием.",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.natsukashi_tanks",
    "releases": [
      {
        "version": "1.1.0",
        "notes": "Добавлены музыка и звуковые эффекты с настройкой громкости. Вражеские танки появляются с разных сторон.",
        "apkUrl": "https://disk.yandex.ru/d/SMmDZ2jWxRnUQw"
      }
    ]
  },
  {
    "name": "Сhisana kodomo",
    "highlights": "Я сделал эту игру для друга. Получился маленький сборник с голосовыми подсказками, о котором пока мало кто знает.",
    "icon": "assets/apps/chisana-kodomo.webp",
    "categories": [
      "games"
    ],
    "description": "Девять развивающих мини-игр для детей 3–6 лет с голосовыми подсказками. Работает офлайн и без рекламы.",
    "badgeText": "Милое",
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.chisana_kodomo",
    "releases": [
      {
        "version": "1.9.9",
        "notes": "Улучшено воспроизведение голосовых подсказок и обработка нажатий в игре со звуками животных.",
        "apkUrl": "https://disk.yandex.ru/d/1yzES3C2E7AtNw"
      }
    ]
  }
];
