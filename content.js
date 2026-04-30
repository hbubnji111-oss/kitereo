// =============================================================================
//  KITEREO — ФАЙЛ НАСТРОЕК САЙТА
//  Здесь можно менять весь изменяемый контент без знания программирования.
//
//  КАК РЕДАКТИРОВАТЬ:
//  1. Найдите нужный раздел ниже (описания разделов написаны заглавными буквами)
//  2. Замените текст между кавычками " " на свой
//  3. Нажмите кнопку "Commit changes" на GitHub
//  4. Через ~1 минуту изменения появятся на сайте
//
//  ВАЖНО: не удаляйте запятые, кавычки и скобки — только меняйте текст внутри
// =============================================================================

const SITE_CONTENT = {

  // ===========================================================================
  //  КОНТАКТЫ
  // ===========================================================================
  contacts: {
    // Основной email агентства
    email: "kitereoagency@gmail.com",

    // Ссылка на Telegram (например: "https://t.me/username")
    // Оставьте "" если не нужно показывать
    telegram: "",

    // Ссылка на WhatsApp (например: "https://wa.me/79001234567")
    // Оставьте "" если не нужно показывать
    whatsapp: "",
  },

  // ===========================================================================
  //  СОЦИАЛЬНЫЕ СЕТИ
  //  Вставьте полные ссылки. Оставьте "" чтобы скрыть иконку.
  // ===========================================================================
  socials: {
    instagram: "",   // например: "https://instagram.com/kitereoagency"
    behance:   "",   // например: "https://behance.net/kitereo"
    youtube:   "",   // например: "https://youtube.com/@kitereo"
    linkedin:  "",   // например: "https://linkedin.com/company/kitereo"
  },

  // ===========================================================================
  //  ШОУРИЛ (видео в блоке "О нас")
  //
  //  show: true  — показывать блок
  //  show: false — полностью скрыть блок
  //
  //  youtubeUrl: вставьте ссылку на YouTube-видео (любой формат ссылки)
  //              если оставить "" — покажется заглушка с надписью "Скоро"
  // ===========================================================================
  showreel: {
    show: true,
    youtubeUrl: "",  // например: "https://youtu.be/dQw4w9WgXcQ"
  },

  // ===========================================================================
  //  КОМАНДА
  //
  //  Можно оставить одного человека или добавить сколько угодно.
  //  Чтобы добавить нового — скопируйте блок от { до }, и вставьте ниже.
  //  Чтобы удалить — удалите блок от { до } вместе с запятой.
  //
  //  initial   — первая буква имени (отображается в кружке-фото)
  //  nameEn    — имя на английском
  //  nameRu    — имя на русском
  //  role      — должность (одинаково для обоих языков, можно написать по-русски)
  // ===========================================================================
  team: [
    {
      initial: "A",
      nameEn:  "First Last",
      nameRu:  "Имя Фамилия",
      role:    "Founder & Creative Dir.",
    },
    {
      initial: "M",
      nameEn:  "First Last",
      nameRu:  "Имя Фамилия",
      role:    "Head of Production",
    },
    {
      initial: "S",
      nameEn:  "First Last",
      nameRu:  "Имя Фамилия",
      role:    "Performance Lead",
    },
    {
      initial: "D",
      nameEn:  "First Last",
      nameRu:  "Имя Фамилия",
      role:    "Design Lead",
    },
  ],

  // ===========================================================================
  //  КЛИЕНТЫ (бегущая строка под шапкой кейсов)
  //
  //  Просто список названий. Можно добавить или удалить строки.
  //  Минимум 4–5 для красивой анимации.
  // ===========================================================================
  clients: [
    "Aurora Records",
    "Meridian Co.",
    "Velvet Studio",
    "North Bureau",
    "Atlas Brands",
    "Linea Coffee",
    "Hyperion",
    "Studio Forma",
  ],

  // ===========================================================================
  //  КЕЙСЫ / ПОРТФОЛИО
  //
  //  Можно добавлять и удалять кейсы (всегда будет чётное число карточек).
  //  link — ссылка на страницу кейса или на YouTube/Behance.
  //         Оставьте "#" если отдельной страницы нет.
  //
  //  imageUrl — обложка кейса. Три варианта:
  //
  //  1. ФАЙЛ ИЗ ПАПКИ images/ (загрузить файл в папку images/ на GitHub):
  //     imageUrl: "images/project1.jpg"
  //
  //  2. GOOGLE DRIVE (открыть доступ "Все у кого есть ссылка", скопировать ссылку):
  //     imageUrl: "https://drive.google.com/file/d/XXXXXXXXXXXXXXX/view"
  //     (сайт сам конвертирует в рабочую ссылку)
  //
  //  3. ЛЮБАЯ ПРЯМАЯ ССЫЛКА на изображение из интернета:
  //     imageUrl: "https://example.com/photo.jpg"
  //
  //  Оставьте "" — будет тёмный градиент-заглушка с текстом.
  // ===========================================================================
  cases: [
    {
      tagEn:    "Video",
      tagRu:    "Видео",
      year:     "2025",
      titleEn:  "Brand 01 — Music Video",
      titleRu:  "Brand 01 — Music Video",
      descEn:   "Music video for a Serbian artist, 2M views in a week",
      descRu:   "Музыкальный клип для артиста из Сербии, 2 млн просмотров за неделю",
      imageUrl: "",
      link:     "#",
    },
    {
      tagEn:    "Advertising",
      tagRu:    "Реклама",
      year:     "2025",
      titleEn:  "Brand 02 — Performance",
      titleRu:  "Brand 02 — Performance",
      descEn:   "Campaign launch in 5 countries in 30 days, ROAS x4.2",
      descRu:   "Запуск кампании в 5 странах за 30 дней, ROAS x4.2",
      imageUrl: "",
      link:     "#",
    },
    {
      tagEn:    "Website + Branding",
      tagRu:    "Сайт + Брендинг",
      year:     "2024",
      titleEn:  "Brand 03 — Rebrand",
      titleRu:  "Brand 03 — Rebrand",
      descEn:   "Full rebrand and new website for a fintech startup",
      descRu:   "Полный ребрендинг и новый сайт для финтех-стартапа",
      imageUrl: "",
      link:     "#",
    },
    {
      tagEn:    "Content",
      tagRu:    "Контент",
      year:     "2024",
      titleEn:  "Brand 04 — Content",
      titleRu:  "Brand 04 — Content",
      descEn:   "120 pieces of social media content in one quarter",
      descRu:   "120 единиц контента для соцсетей за квартал",
      imageUrl: "",
      link:     "#",
    },
  ],

  // ===========================================================================
  //  ОТЗЫВЫ
  //
  //  initial — первая буква имени (в кружке-аватаре)
  //  name    — имя и фамилия (одинаково для обоих языков)
  // ===========================================================================
  testimonials: [
    {
      textEn:  "KITEREO did what three previous agencies couldn't. The campaign paid off in the first month.",
      textRu:  "KITEREO сделали то, что не смогли три предыдущих агентства. Кампания окупилась за первый месяц.",
      initial: "A",
      name:    "Anna K.",
      roleEn:  "CMO · Brand Name",
      roleRu:  "CMO · Brand Name",
    },
    {
      textEn:  "They produced a video that got 2 million views in a week. True professionals.",
      textRu:  "Сняли клип, который собрал 2 млн просмотров за неделю. Профессионалы от и до.",
      initial: "M",
      name:    "Marko D.",
      roleEn:  "Artist",
      roleRu:  "Артист",
    },
    {
      textEn:  "Rare case when an agency understands business, not just design.",
      textRu:  "Редкий случай, когда агентство понимает бизнес, а не только дизайн.",
      initial: "S",
      name:    "Stefan P.",
      roleEn:  "CEO · Brand Name",
      roleRu:  "CEO · Brand Name",
    },
  ],

};
