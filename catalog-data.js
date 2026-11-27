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
        "version": "14.1.4",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/SkZWNkx2l37b4A"
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
        "version": "10.1.3",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/gBnIpuCRlFN4cw"
      },
      {
        "version": "10.1.2",
        "notes": "Исправлено восстановление авторизации Яндекс Диска после переустановки.",
        "apkUrl": "https://disk.yandex.ru/d/OEHyPb57Cy2YxQ"
      },
      {
        "version": "10.1.1",
        "notes": "В календаре отображаются места сделанных инъекций.",
        "apkUrl": null
      },
      {
        "version": "10.1.0",
        "notes": "Появилась отметка инъекций прямо из уведомления. Можно отложить напоминание и задать интервал повторов для каждого профиля.",
        "apkUrl": null
      },
      {
        "version": "10.0.0",
        "notes": "Добавлены отдельные записи веса и объёмов тела с редактированием и графиками.",
        "apkUrl": null
      },
      {
        "version": "4.8.8",
        "notes": "- Если отметить приём или укол раньше запланированного времени, уведомление за уже выполненный слот больше не появляется.\n- Следующие напоминания продолжают работать по расписанию.\n- Улучшена надёжность уведомлений для дополнительных профилей.",
        "apkUrl": null
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
        "version": "8.3.2",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/Hb2EnkaYSJdYqQ"
      },
      {
        "version": "8.3.1",
        "notes": "Теперь название препарата, добавленного вручную, можно исправить прямо в форме редактирования. Измените название и нажмите «Сохранить». Расписание и история приёмов сохранятся.",
        "apkUrl": "https://disk.yandex.ru/d/gnhTtn75a4D0QQ"
      },
      {
        "version": "8.3.0",
        "notes": "Приём можно отметить прямо в развёрнутом уведомлении. Для нескольких лекарств есть кнопка «Принял всё». Напоминание можно отложить, а интервал повторов задать от 5 до 90 минут.",
        "apkUrl": "https://disk.yandex.ru/d/oTWY45lE2fbmeg"
      },
      {
        "version": "8.2.0",
        "notes": "Длительность курса теперь можно задать в днях, неделях и месяцах. Приложение рассчитает дату окончания и количество препарата по расписанию.",
        "apkUrl": null
      },
      {
        "version": "8.1.0",
        "notes": "Добавлены необязательный учёт запаса лекарств, напоминания о пополнении и единое оформление формы препарата.",
        "apkUrl": null
      },
      {
        "version": "8.0.0",
        "notes": "В настройках появился выбор размера текста приложения по системным настройкам Android.",
        "apkUrl": null
      },
      {
        "version": "1.0.0",
        "notes": "Выпущено отдельное приложение с расписаниями лекарств, напоминаниями, виджетами и совместимым форматом резервных копий.",
        "apkUrl": null
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
        "version": "8.3.2",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/thahkRAzLtbqnQ"
      },
      {
        "version": "8.3.1",
        "notes": "Теперь название препарата, добавленного вручную, можно исправить прямо в форме редактирования. Измените название и нажмите «Сохранить». Расписание и история приёмов сохранятся.",
        "apkUrl": "https://disk.yandex.ru/d/aIktXahwjejoLw"
      },
      {
        "version": "8.3.0",
        "notes": "Приём можно отметить прямо в развёрнутом уведомлении. Для нескольких лекарств есть кнопка «Принял всё». Напоминание можно отложить, а интервал повторов задать от 5 до 90 минут.",
        "apkUrl": "https://disk.yandex.ru/d/HK2kAmzubnpiiQ"
      },
      {
        "version": "8.2.0",
        "notes": "Длительность курса теперь можно задать в днях, неделях и месяцах. Приложение рассчитает дату окончания и количество препарата по расписанию.",
        "apkUrl": null
      },
      {
        "version": "8.1.0",
        "notes": "Добавлены необязательный учёт запаса лекарств, напоминания о пополнении и единое оформление формы препарата.",
        "apkUrl": null
      },
      {
        "version": "7.2.4",
        "notes": "Добавлены компактные виджеты 2×2 с ближайшим приёмом, названиями препаратов и прогрессом дня.",
        "apkUrl": null
      },
      {
        "version": "7.1.1",
        "notes": "Интервал повторных напоминаний можно выбрать отдельно для каждого профиля — от 5 до 90 минут. Повторы прекращаются после отметки «Принял» или «Пропустил».",
        "apkUrl": null
      },
      {
        "version": "7.0.0",
        "notes": "Обновлена доставка напоминаний на Tecno, Infinix и itel. Добавлены проверка доступа к точным будильникам и восстановление расписания после быстрой перезагрузки.",
        "apkUrl": null
      },
      {
        "version": "6.1.3",
        "notes": "Расширен отчёт для врача в PDF. Он показывает текущие и завершённые курсы, сводку приёма за 30 дней и подробный журнал за неделю.",
        "apkUrl": null
      },
      {
        "version": "6.0.0",
        "notes": "Для препаратов можно указать описание и выбрать цвет значка. Точные часы и периоды суток теперь учитываются вместе в расписании.",
        "apkUrl": null
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
        "version": "1.8.6",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/yPaNV2M8x1otEg"
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
        "version": "31.0.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/ENMNr2l7dFTOCQ"
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
        "version": "31.0.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/HzPXJgCmU3vO1g"
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
        "version": "1.0.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/0EdRA2WC2ImpFw"
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
        "version": "1.0.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/26aM_g31NIPaXA"
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
        "version": "11.1.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/PQhT_UQtzfOwaw"
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
        "version": "1.0.3",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/4Wkfo_rO6ZMekw"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/675RzpiwLkgxwg"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/I76tNlz4t4jB-A"
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
        "version": "0.1.4",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/OUmn40kW8ubSYA"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/e3J2REZc4_pMrQ"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/trM_h3qEDvC52Q"
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
        "version": "1.1.1",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/OXqN6hv_op3_SA"
      },
      {
        "version": "1.1",
        "notes": "Добавлен экран добровольной поддержки. Приложение называется «Салят (Намаз)».",
        "apkUrl": "https://disk.yandex.ru/d/tOFwv7vTzGNa7g"
      },
      {
        "version": "1.0",
        "notes": "Первая версия",
        "apkUrl": null
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/OtcwJ0zrdClBmQ"
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
        "version": "1.1.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/Kp3xLYsmPAffgA"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/DaRPRaCCo08YhQ"
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
        "version": "1.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/RJfJ2LDHrBizhg"
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
        "version": "1.0.6",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/VNZhE0c0VZ7zGg"
      },
      {
        "version": "1.0.5",
        "notes": "Обновлено окно оценки приложения. Оно открывается в компактной панели и не мешает вводу, документам или действиям по напоминаниям.",
        "apkUrl": "https://disk.yandex.ru/d/-wbocrivKKXUlA"
      },
      {
        "version": "1.0.4",
        "notes": "Обновлены анкета питомца и отчёты, добавлены быстрые правки полей, новые варианты окраса и полный список вакцин из справочника.",
        "apkUrl": null
      },
      {
        "version": "1.0.3",
        "notes": "Улучшены повседневные сценарии дневника, добавлен виджет дня рождения, исправлена одновременная запись данных.",
        "apkUrl": null
      },
      {
        "version": "1.0.2",
        "notes": "Исправлены вёрстка первого запуска, ввод в поля и случайный выход из приложения.",
        "apkUrl": null
      },
      {
        "version": "1.0.1",
        "notes": "Исправлены настройки оформления, работа экрана согласия и удаление питомца.",
        "apkUrl": null
      },
      {
        "version": "1.0.0",
        "notes": "Первый выпуск с паспортом питомца, учётом препаратов и резервным копированием.",
        "apkUrl": null
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
        "version": "1.0.3",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/XovVsRDqIru8KQ"
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
        "version": "8.1.7",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/Xz3R7i3iHzq-CQ"
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
        "version": "8.1.5",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/wK3JS4FStuM5zA"
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
        "version": "2.8.3",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/mjvLreCpV_EeVg"
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
        "version": "2.0.7",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/S5ygTIb_rj1a5g"
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
        "version": "1.0.4",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/Y66roAxEES8TAQ"
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
        "version": "2.1.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/Jrf3aiH7uFjc0g"
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
        "version": "0.1.4",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/BT-EfZ9o-a5pvQ"
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
        "version": "1.0.2",
        "notes": "Мелкие доработки",
        "apkUrl": "https://disk.yandex.ru/d/RmE0Rfe_obl2iw"
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
        "version": "1.8.3",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/nJo2ETwZGmNRDQ"
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
        "version": "1.1.1",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/1kJQ_pcFW-B4Ig"
      },
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
        "version": "1.9.10",
        "notes": "Мелкие исправления",
        "apkUrl": "https://disk.yandex.ru/d/WqYS9KE-gzHRMw"
      },
      {
        "version": "1.9.9",
        "notes": "Улучшено воспроизведение голосовых подсказок и обработка нажатий в игре со звуками животных.",
        "apkUrl": "https://disk.yandex.ru/d/1yzES3C2E7AtNw"
      }
    ]
  }
];
