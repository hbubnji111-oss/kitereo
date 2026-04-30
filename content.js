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
  //  АГЕНТСТВО — ОБЩАЯ ИНФОРМАЦИЯ
  //  Меняется в одном месте и отражается по всему сайту.
  // ===========================================================================
  agency: {
    // Год основания (отображается в шапке и подвале)
    foundedYear: "2022",

    // Слоган агентства (подвал сайта)
    taglineEn: "Full-cycle digital. From idea to result.",
    taglineRu: "Full-cycle digital. От идеи до результата.",
  },

  // ===========================================================================
  //  СТАТИСТИКА
  //  Цифры отображаются в блоке "О нас" и на главном экране.
  //  Обновляйте когда меняется количество проектов или стран.
  // ===========================================================================
  stats: {
    projects:  "50+",   // количество проектов
    countries: "8",     // количество стран
  },

  // ===========================================================================
  //  ФОРМА ЗАЯВКИ — FORMSPREE
  //
  //  Чтобы заявки с сайта приходили вам на почту:
  //  1. Зайдите на https://formspree.io и зарегистрируйтесь (бесплатно)
  //  2. Создайте новую форму, укажите ваш email
  //  3. Скопируйте ID формы (8 символов, например "xrgndkpb")
  //  4. Вставьте его ниже между кавычками
  //
  //  Если оставить "" — кнопка "Отправить" просто покажет сообщение без отправки.
  // ===========================================================================
  formspreeId: "",   // например: "xrgndkpb"

  // ===========================================================================
  //  ССЫЛКА НА ПОЛНОЕ ПОРТФОЛИО
  //  Кнопка "Все работы →" под блоком кейсов.
  //  Оставьте "" чтобы скрыть кнопку.
  // ===========================================================================
  portfolioUrl: "",   // например: "https://behance.net/kitereo"

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
  //  ШОУРИЛ (видео справа в блоке "О нас")
  //
  //  show: true  — показывать блок
  //  show: false — полностью скрыть блок
  // ===========================================================================
  showreel: {
    show: true,

    // Вариант A — свой видеофайл (mp4/webm). Загрузите файл в папку images/ и укажите путь:
    //   videoFileUrl: "images/showreel-2025.mp4"
    // Или вставьте прямую ссылку на файл.
    // Если заполнено — видео играет зациклено и без звука. Имеет приоритет над YouTube.
    videoFileUrl: "",

    // Вариант B — YouTube. Вставьте ссылку на видео (любой формат).
    // Если оба поля пусты — покажется заглушка с надписью "Скоро".
    youtubeUrl: "",  // например: "https://youtu.be/dQw4w9WgXcQ"
  },

  // ===========================================================================
  //  БЕГУЩАЯ СТРОКА (под главным экраном)
  //
  //  Список услуг в анимированной строке.
  //  Можно добавлять, удалять или переименовывать.
  //  Минимум 5–6 для красивой анимации.
  // ===========================================================================
  ticker: [
    { en: "Video",          ru: "Видео" },
    { en: "Advertising",    ru: "Реклама" },
    { en: "Design / Logo",  ru: "Дизайн / Лого" },
    { en: "Websites",       ru: "Сайты" },
    { en: "Rebrand",        ru: "Ребрендинг" },
    { en: "Content",        ru: "Контент" },
    { en: "Strategy",       ru: "Стратегия" },
    { en: "Infographics",   ru: "Инфографика" },
  ],

  // ===========================================================================
  //  УСЛУГИ
  //
  //  Карточки в разделе "Услуги". Можно переименовывать и изменять описания.
  //  show: false — скрыть карточку.
  //
  //  Последняя карточка (консультация) — особая: она показывает кнопку-ссылку
  //  вместо стрелки. Не удаляйте у неё поле isConsult: true.
  // ===========================================================================
  services: [
    {
      show:    true,
      titleEn: "Video & Film",
      titleRu: "Видео и кино",
      descEn:  "Music videos, short films, commercials and brand videos. From script to final edit.",
      descRu:  "Клипы, короткометражки, рекламные и брендовые видео. От сценария до финального монтажа.",
    },
    {
      show:    true,
      titleEn: "Social Media Content",
      titleRu: "Контент для соцсетей",
      descEn:  "Reels, Shorts, TikTok, vertical videos. Content that grows reach and sales.",
      descRu:  "Reels, Shorts, TikTok, вертикальные видео. Контент, который растит охват и продажи.",
    },
    {
      show:    true,
      titleEn: "Targeted Advertising",
      titleRu: "Таргетированная реклама",
      descEn:  "Meta, Google, TikTok, Yandex. We run campaigns in Russia, Europe and beyond.",
      descRu:  "Meta, Google, TikTok, Яндекс. Запускаем кампании в России, Европе и за её пределами.",
    },
    {
      show:    true,
      titleEn: "Websites",
      titleRu: "Сайты",
      descEn:  "Landing pages and multi-page websites on Tilda and Webflow.",
      descRu:  "Лендинги и многостраничные сайты на Tilda и Webflow.",
    },
    {
      show:    true,
      titleEn: "Logos & Branding",
      titleRu: "Логотипы и брендинг",
      descEn:  "Identity that works: logo, style, brand guidelines.",
      descRu:  "Айдентика, которая работает: логотип, стиль, брендбук.",
    },
    {
      show:    true,
      titleEn: "Graphic Design",
      titleRu: "Графический дизайн",
      descEn:  "Banners, presentations, packaging, social media kit.",
      descRu:  "Баннеры, презентации, упаковка, SMM-кит.",
    },
    {
      show:      true,
      isConsult: true,   // не удаляйте это поле
      titleEn:   "Not sure where to start?",
      titleRu:   "Не знаете с чего начать?",
      descEn:    "Book a free 30-minute consultation. We'll help you create a plan and estimate your budget.",
      descRu:    "Назначим бесплатную 30-минутную консультацию. Поможем составить план и оценить бюджет.",
      ctaEn:     "Book a call",
      ctaRu:     "Записаться",
    },
  ],

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
  //  role      — должность
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
  //  Расположение карточек на сайте (по два в ряд, можно добавлять бесконечно):
  //    [ Кейс 1 ]  [ Кейс 2 ]
  //    [ Кейс 3 ]  [ Кейс 4 ]
  //    [ Кейс 5 ]  [ Кейс 6 ]
  //    ...
  //
  //  Чтобы добавить кейс — скопируйте блок от { до }, и вставьте ниже.
  //  Чтобы удалить — удалите блок от { до } вместе с запятой.
  //
  //  ── МЕДИА: ФОТО или ВИДЕО ──────────────────────────────────────────────
  //
  //  videoUrl — ссылка на видео. Два варианта:
  //
  //    Вариант A — свой файл (mp4/webm). Загрузите в папку images/ и укажите:
  //       videoUrl: "images/project1.mp4"
  //       → Видео играет зациклено и без звука прямо на карточке.
  //
  //    Вариант B — YouTube:
  //       videoUrl: "https://youtu.be/dQw4w9WgXcQ"
  //       → На карточке появится превью + кнопка ▶, клик откроет YouTube.
  //
  //    Оставьте "" если видео нет.
  //
  //  imageUrl — обложка-фото. Три варианта:
  //
  //    1. Файл из папки images/ на GitHub:
  //       imageUrl: "images/project1.jpg"
  //
  //    2. Google Drive (ссылка "Все у кого есть ссылка"):
  //       imageUrl: "https://drive.google.com/file/d/XXXXXXXXXXXXXXX/view"
  //
  //    3. Любая прямая ссылка на изображение:
  //       imageUrl: "https://example.com/photo.jpg"
  //
  //    Оставьте "" — будет тёмный градиент-заглушка.
  //
  //  link — куда ведёт клик на карточку (если нет YouTube-видео).
  //         Оставьте "#" если отдельной страницы нет.
  // ===========================================================================
  cases: [
    {
      // ── Кейс 1 (верхний левый) ──────────────────────────────────────────
      tagEn:    "Video",
      tagRu:    "Видео",
      year:     "2025",
      titleEn:  "Brand 01 — Music Video",
      titleRu:  "Brand 01 — Music Video",
      descEn:   "Music video for a Serbian artist, 2M views in a week",
      descRu:   "Музыкальный клип для артиста из Сербии, 2 млн просмотров за неделю",
      videoUrl: "",
      imageUrl: "",
      link:     "#",
    },
    {
      // ── Кейс 2 (верхний правый) ─────────────────────────────────────────
      tagEn:    "Advertising",
      tagRu:    "Реклама",
      year:     "2025",
      titleEn:  "Brand 02 — Performance",
      titleRu:  "Brand 02 — Performance",
      descEn:   "Campaign launch in 5 countries in 30 days, ROAS x4.2",
      descRu:   "Запуск кампании в 5 странах за 30 дней, ROAS x4.2",
      videoUrl: "",
      imageUrl: "",
      link:     "#",
    },
    {
      // ── Кейс 3 (нижний левый) ───────────────────────────────────────────
      tagEn:    "Website + Branding",
      tagRu:    "Сайт + Брендинг",
      year:     "2024",
      titleEn:  "Brand 03 — Rebrand",
      titleRu:  "Brand 03 — Rebrand",
      descEn:   "Full rebrand and new website for a fintech startup",
      descRu:   "Полный ребрендинг и новый сайт для финтех-стартапа",
      videoUrl: "",
      imageUrl: "",
      link:     "#",
    },
    {
      // ── Кейс 4 (нижний правый) ──────────────────────────────────────────
      tagEn:    "Content",
      tagRu:    "Контент",
      year:     "2024",
      titleEn:  "Brand 04 — Content",
      titleRu:  "Brand 04 — Content",
      descEn:   "120 pieces of social media content in one quarter",
      descRu:   "120 единиц контента для соцсетей за квартал",
      videoUrl: "",
      imageUrl: "",
      link:     "#",
    },
  ],

  // ===========================================================================
  //  ГЕОГРАФИЯ (раздел "Мы работаем по всему миру")
  //
  //  Два списка: основные рынки и дополнительные.
  //  Можно добавлять и удалять строки.
  // ===========================================================================
  geography: {
    primary: [
      "Bosnia · Босния",
      "Serbia · Сербия",
      "Slovenia · Словения",
      "Slovakia · Словакия",
      "Romania · Румыния",
      "Russia · Россия",
    ],
    additional: [
      "Switzerland",
      "Israel",
      "USA",
      "Germany",
    ],
  },

  // ===========================================================================
  //  FAQ — ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
  //
  //  Можно добавлять и удалять вопросы.
  //  Чтобы добавить — скопируйте блок от { до }, и вставьте ниже.
  //  Чтобы удалить — удалите блок от { до } вместе с запятой.
  // ===========================================================================
  faq: [
    {
      qEn: "How long does a project take?",
      qRu: "Сколько времени занимает проект?",
      aEn: "Depends on the task. A landing page — 2–3 weeks. A music video — from 3 weeks to 2 months. An ad campaign launches in 7–14 days. We'll set the exact timeline at the brief.",
      aRu: "Зависит от задачи. Лендинг — 2–3 недели. Музыкальный клип — от 3 недель до 2 месяцев. Рекламная кампания запускается за 7–14 дней. Точные сроки оговариваем на брифинге.",
    },
    {
      qEn: "How much does it cost?",
      qRu: "Сколько это стоит?",
      aEn: "The cost depends on the type of service, scope and timeline. Write to us — we'll send an estimate within 24 hours.",
      aRu: "Стоимость зависит от вида услуги, объёма и сроков. Напишите нам — пришлём смету в течение 24 часов.",
    },
    {
      qEn: "How does payment work?",
      qRu: "Как устроена оплата?",
      aEn: "Standard scheme — 50% upfront, 50% upon delivery. For long-term projects — monthly billing. We work under contract with individuals and companies in Russia and the EU.",
      aRu: "Стандартная схема — 50% предоплата, 50% по факту. Для долгосрочных проектов — помесячная оплата. Работаем по договору с физлицами и юрлицами в России и ЕС.",
    },
    {
      qEn: "Can we work remotely?",
      qRu: "Можно ли работать удалённо?",
      aEn: "Yes, 90% of work happens online. For shoots, we travel to any country. The team works from several locations in Europe — this speeds up the process.",
      aRu: "Да, 90% работы проходит онлайн. На съёмки выезжаем в любую страну. Команда работает из нескольких точек в Европе — это ускоряет процесс.",
    },
    {
      qEn: "What languages do you work in?",
      qRu: "На каких языках вы работаете?",
      aEn: "Russian, English, Serbian. We can bring in specialists for other languages — for example, for ad localization.",
      aRu: "Русский, английский, сербский. Можем привлечь специалистов для других языков — например, для локализации рекламы.",
    },
    {
      qEn: "I have a small budget — is it worth contacting you?",
      qRu: "У меня небольшой бюджет — стоит ли обращаться?",
      aEn: "Yes. We'll find a format that works. Sometimes it's better to create one strong piece of content than ten weak ones. Write to us — let's discuss the options.",
      aRu: "Да. Найдём формат, который сработает. Иногда лучше сделать один сильный материал, чем десять слабых. Напишите — обсудим варианты.",
    },
    {
      qEn: "Are you willing to sign an NDA?",
      qRu: "Подписываете ли вы NDA?",
      aEn: "Yes, for all projects with confidential information. We sign the NDA at the start — before any work begins.",
      aRu: "Да, для всех проектов с конфиденциальной информацией. Подписываем NDA в начале — до начала любых работ.",
    },
    {
      qEn: "What do I need to do to get started?",
      qRu: "Что нужно сделать чтобы начать?",
      aEn: "Write to us via the form below or directly by email. At the brief we'll discuss your task and send a proposal within 1–2 days.",
      aRu: "Напишите нам через форму ниже или напрямую на почту. На брифинге обсудим задачу и пришлём предложение в течение 1–2 дней.",
    },
  ],

  // ===========================================================================
  //  ОТЗЫВЫ
  //  (раздел скрыт на сайте по решению заказчика, данные сохранены для будущего)
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
