// Версии идут от новой к старой. Для каждой версии укажите собственную публичную
// HTTPS-ссылку на файл .apk на Яндекс Диске в поле apkUrl. Если её нет, оставьте null.
const catalogApps = [
  {
    name: "Pure PDF",
    icon: "assets/apps/pure-pdf.png",
    categories: ["work", "study"],
    description: "Читайте документы без интернета. Есть поиск по тексту, закладки и ночной режим.",
    storeUrl: "https://www.rustore.ru/catalog/app/com.auskraft.purepdf",
    releases: [
      {
        version: "1.8.4",
        notes: "Код для перевода на экране поддержки стал крупнее.",
        apkUrl: null,
      },
      {
        version: "1.8.3",
        notes: "Добавлен экран добровольной поддержки.",
        apkUrl: null,
      },
      {
        version: "1.0",
        notes: "Первый выпуск с поиском и закладками.",
        apkUrl: null,
      },
    ],
  },
  {
    name: "График смен",
    icon: "assets/apps/shifts.png",
    categories: ["work"],
    description: "Календарь рабочих смен с собственными циклами и виджетами.",
    storeUrl: "https://www.rustore.ru/catalog/app/com.auskraft.rotating_shift",
    releases: [
      {
        version: "31.0.1",
        notes: "Исправлено выделение текущего дня в месячных виджетах.",
        apkUrl: null,
      },
      {
        version: "30.1.0",
        notes: "Добавлены текстуры, настройки фона и новые шрифты.",
        apkUrl: null,
      },
      {
        version: "30.0.3",
        notes: "Открыт просмотр прошлых месяцев с января 2026 года.",
        apkUrl: null,
      },
    ],
  },
  {
    name: "Заметки AUS",
    icon: "assets/apps/notes.png",
    categories: ["work", "study"],
    description: "Офлайн-заметки с папками, списками и вложениями.",
    storeUrl: "https://www.rustore.ru/catalog/app/dev.auskraft.zametka",
    releases: [
      {
        version: "1.5.0",
        notes: "Добавлено сохранение текста и файлов через «Поделиться».",
        apkUrl: null,
      },
      {
        version: "1.4.5",
        notes: "Исправлена работа клавиатуры, доработан интерфейс.",
        apkUrl: null,
      },
      {
        version: "1.3.0",
        notes: "Первый выпуск.",
        apkUrl: null,
      },
    ],
  },
];
