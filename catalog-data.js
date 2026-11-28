// Данные из листов «Приложения» и «Версии». badgeText и highlights — необязательные поля.
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
        "version": "14.1.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D0%B4%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%BF%D1%83%D0%BB%D1%8C%D1%81%D0%B0/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D0%B4%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%BF%D1%83%D0%BB%D1%8C%D1%81%D0%B0%20%E2%80%94%2014.1.5%20%28%D0%BA%D0%BE%D0%B4%2031%29.apk"
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
        "version": "10.1.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D1%83%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%20%28GLP-1%29/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D1%83%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%20%28GLP-1%29%20%E2%80%94%2010.1.6%20%28%D0%BA%D0%BE%D0%B4%2017%29.apk"
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
        "version": "8.3.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%BA%D0%B8%20%E2%80%94%20%D0%BF%D1%80%D0%B8%D1%91%D0%BC%20%D0%BB%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%BA%D0%B8%20%E2%80%94%20%D0%BF%D1%80%D0%B8%D1%91%D0%BC%20%D0%BB%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2%20%E2%80%94%208.3.5%20%28%D0%BA%D0%BE%D0%B4%2015%29.apk"
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
        "version": "8.3.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D1%86%D0%B0/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D1%86%D0%B0%20%E2%80%94%208.3.5%20%28%D0%BA%D0%BE%D0%B4%2033%29.apk"
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
        "version": "1.8.7",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/Pure%20PDF/Pure%20PDF%20%E2%80%94%201.8.7%20%28%D0%BA%D0%BE%D0%B4%20187%29.apk"
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
        "version": "31.0.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D1%81%D0%BC%D0%B5%D0%BD/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%20%D1%81%D0%BC%D0%B5%D0%BD%20%E2%80%94%2031.0.6%20%28%D0%BA%D0%BE%D0%B4%2019%29.apk"
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
        "version": "31.0.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD%20%E2%80%94%2031.0.6%20%28%D0%BA%D0%BE%D0%B4%2047%29.apk"
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
    "storeUrl": "https://www.rustore.ru/catalog/app/com.auskraft.shiftplus",
    "releases": [
      {
        "version": "1.0.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD%20PRO/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD%20PRO%20%E2%80%94%201.0.6%20%28%D0%BA%D0%BE%D0%B4%2035%29.apk"
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
        "version": "1.0.7",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD%20%D0%9F%D0%92%D0%97/%D0%93%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D1%81%D0%BC%D0%B5%D0%BD%20%D0%9F%D0%92%D0%97%20%E2%80%94%201.0.7%20%28%D0%BA%D0%BE%D0%B4%208%29.apk"
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
        "version": "11.1.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%97%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8%20AUS/%D0%97%D0%B0%D0%BC%D0%B5%D1%82%D0%BA%D0%B8%20AUS%20%E2%80%94%2011.1.6%20%28%D0%BA%D0%BE%D0%B4%2028%29.apk"
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
        "version": "1.0.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C/%D0%9A%D0%B0%D0%BB%D0%B5%D0%BD%D0%B4%D0%B0%D1%80%D1%8C%20%E2%80%94%201.0.4%20%28%D0%BA%D0%BE%D0%B4%20104%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%92%D0%B8%D1%80%D0%B4/%D0%92%D0%B8%D1%80%D0%B4%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%94%D1%83%D0%B0/%D0%94%D1%83%D0%B0%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "0.1.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%97%D0%B0%D0%BA%D1%8F%D1%82/%D0%97%D0%B0%D0%BA%D1%8F%D1%82%20%E2%80%94%200.1.5%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9A%D0%B0%D0%B4%D0%B0%20%28%D0%A2%D1%80%D0%B5%D0%BA%D0%B5%D1%80%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7%D0%BE%D0%B2%29/%D0%9A%D0%B0%D0%B4%D0%B0%20%28%D0%A2%D1%80%D0%B5%D0%BA%D0%B5%D1%80%20%D0%BF%D1%80%D0%BE%D0%BF%D1%83%D1%89%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%B0%D0%BC%D0%B0%D0%B7%D0%BE%D0%B2%29%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9C%D1%83%D1%85%D0%B0%D1%81%D0%B0%D0%B1%D0%B0/%D0%9C%D1%83%D1%85%D0%B0%D1%81%D0%B0%D0%B1%D0%B0%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.3",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A1%D0%B0%D0%BB%D1%8F%D1%82%20%28%D0%9D%D0%B0%D0%BC%D0%B0%D0%B7%29/%D0%A1%D0%B0%D0%BB%D1%8F%D1%82%20%28%D0%9D%D0%B0%D0%BC%D0%B0%D0%B7%29%20%E2%80%94%201.1.3%20%28%D0%BA%D0%BE%D0%B4%205%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A1%D0%B0%D1%83%D0%BC/%D0%A1%D0%B0%D1%83%D0%BC%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.7",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A1%D1%83%D0%BD%D0%BD%D1%8B%20%28%D8%B3%D9%8F%D9%86%D9%8E%D9%91%D8%A9%E2%80%8E%20%29/%D0%A1%D1%83%D0%BD%D0%BD%D1%8B%20%28%D8%B3%D9%8F%D9%86%D9%8E%D9%91%D8%A9%E2%80%8E%20%29%20%E2%80%94%201.1.7%20%28%D0%BA%D0%BE%D0%B4%2010%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A3%D0%BC%D1%80%D0%B0/%D0%A3%D0%BC%D1%80%D0%B0%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A5%D0%B8%D1%84%D0%B7/%D0%A5%D0%B8%D1%84%D0%B7%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.0.9",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D0%B0/%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%20%D0%BF%D0%B8%D1%82%D0%BE%D0%BC%D1%86%D0%B0%20%E2%80%94%201.0.9%20%28%D0%BA%D0%BE%D0%B4%2011%29.apk"
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
        "version": "1.0.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%90%D1%80%D1%85%D0%B8%D0%B2%D0%B0%D1%82%D0%BE%D1%80%20AUS/%D0%90%D1%80%D1%85%D0%B8%D0%B2%D0%B0%D1%82%D0%BE%D1%80%20AUS%20%E2%80%94%201.0.4%20%28%D0%BA%D0%BE%D0%B4%205%29.apk"
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
        "version": "8.1.8",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Chime%20Noir%29/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Chime%20Noir%29%20%E2%80%94%208.1.8%20%28%D0%BA%D0%BE%D0%B4%2014%29.apk"
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
        "version": "8.1.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Chime%29/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Chime%29%20%E2%80%94%208.1.6%20%28%D0%BA%D0%BE%D0%B4%2020%29.apk"
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
        "version": "2.8.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Morn%C3%A9%29/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20%28Morn%C3%A9%29%20%E2%80%94%202.8.4%20%28%D0%BA%D0%BE%D0%B4%20284%29.apk"
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
        "version": "2.0.8",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20Chime%20Pro/%D0%91%D1%83%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%20Chime%20Pro%20%E2%80%94%202.0.8%20%28%D0%BA%D0%BE%D0%B4%2029%29.apk"
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
        "version": "1.0.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9A%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%20AUS/%D0%9A%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%20AUS%20%E2%80%94%201.0.5%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "2.1.3",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B5%D1%80%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82/%D0%9A%D0%BE%D0%BD%D0%B2%D0%B5%D1%80%D1%82%D0%B5%D1%80%20%D0%B2%D0%B0%D0%BB%D1%8E%D1%82%20%E2%80%94%202.1.3%20%28%D0%BA%D0%BE%D0%B4%20213%29.apk"
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
        "version": "0.1.5",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D0%BB%D0%BA%D0%B8%D0%BD/%D0%9E%D1%82%D0%BA%D1%80%D1%8B%D0%B2%D0%B0%D0%BB%D0%BA%D0%B8%D0%BD%20%E2%80%94%200.1.5%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.0.3",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A4%D0%BE%D0%BD%D0%B0%D1%80%D0%B8%D0%BA%20%28Pharos%29/%D0%A4%D0%BE%D0%BD%D0%B0%D1%80%D0%B8%D0%BA%20%28Pharos%29%20%E2%80%94%201.0.3%20%28%D0%BA%D0%BE%D0%B4%204%29.apk"
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
        "version": "1.8.6",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/Natsukashi%20Yoru/Natsukashi%20Yoru%20%E2%80%94%201.8.6%20%28%D0%BA%D0%BE%D0%B4%208%29.apk"
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
        "version": "1.1.4",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/Natsukashi%20Yoru%20Tanks/Natsukashi%20Yoru%20Tanks%20%E2%80%94%201.1.4%20%28%D0%BA%D0%BE%D0%B4%206%29.apk"
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
        "version": "1.9.13",
        "notes": "Юридические документы доступны без интернета. При подключении загружается актуальная редакция.",
        "apkUrl": "https://auskraft.ru/support-apps/APK%20%D0%B4%D0%BB%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0/%D0%A1hisana%20kodomo/%D0%A1hisana%20kodomo%20%E2%80%94%201.9.13%20%28%D0%BA%D0%BE%D0%B4%209%29.apk"
      }
    ]
  }
];
