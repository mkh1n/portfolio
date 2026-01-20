import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "task-management-app",
    companyName: "Веб-приложение для управления задачами",
    type: "Личный",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Полнофункциональное веб-приложение для управления задачами с современным интерфейсом и интуитивным UX.",
    websiteLink: "https://task-tracker-zeta-ten-49.vercel.app/",
    githubLink: "https://github.com/mkh1n/task-tracker",
    techStack: [
      "React",
      "Typescript",
      "Redux",
      "Node.js",
      "express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: "/projects/task/task-1.webp",
    pagesInfoArr: [
      {
        title: "Главная страница",
        description:
          "Современный интерфейс с досками задач, фильтрами и сортировкой",
        imgArr: ["/projects/task/task-1.webp",
          "/projects/task/task-2.webp",
          "/projects/task/task-3.webp",
          "/projects/task/task-4.webp",
          "/projects/task/task-5.webp",
          "/projects/task/task-6.webp",
                    "/projects/task/task-7.webp"


        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал веб-приложение для управления задачами с использованием современного стека технологий.",
        "Приложение включает функции создания проектов, назначения задач, установки сроков и отслеживания прогресса. Реализованная возможность загрузки файлов для проектов, а также управление пользователями",
      ],
      bullets: [
        "Создал полнофункциональное приложение для управления задачами с React и TypeScript",
        "Реализовал систему авторизации и разделение прав доступа",
                "Реализовал систему загрузки файлов",

      ],
    },
  },
  {
    id: "movie-rating-app",
    companyName: "Веб-приложение для оценки фильмов",
    type: "Личный",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Платформа для оценки и рецензирования фильмов с рекомендательной системой.",
    websiteLink: "",
    githubLink: "",
    techStack: [
      "Next.js",
      "Typescript",
      "Prisma",
      "PostgreSQL",
      "TMDB API",
      "Tailwind CSS",
    ],
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-10-01"),
    companyLogoImg: "/projects/movie/movie-1.webp",
    pagesInfoArr: [
      {
        title: "Каталог фильмов",
        description:
          "Обширный каталог фильмов с поиском, фильтрацией и сортировкой",
        imgArr: ["/projects/movie/movie-1.webp",
          "/projects/movie/movie-2.webp",
          "/projects/movie/movie-3.webp",
          "/projects/movie/movie-4.webp"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал платформу для оценки фильмов с интеграцией TMDB API.",
        "Пользователи могут создавать рецензии, ставить оценки и получать рекомендации на основе своих предпочтений.",
      ],
      bullets: [
        "Интегрировал TMDB API для получения актуальных данных о фильмах",
        "Создал рекомендательную систему на основе пользовательских оценок",
        "Реализовал систему рецензий с возможностью лайков и комментариев",
        "Добавил личные коллекции фильмов для каждого пользователя",
      ],
    },
  },
  {
    id: "e-commerce-redesign",
    companyName: "Доработка сайта интернет магазина",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Модернизация и доработка существующего интернет-магазина для улучшения пользовательского опыта.",
    websiteLink: "https://collectionchel.ru/",
    techStack: [
      "Vue.js",
      "JavaScript",
      "SCSS",
      "Laravel",
      "MySQL",
      "Webpack",
    ],
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-08-01"),
    companyLogoImg: "/projects/shop/shop-1.webp",
    pagesInfoArr: [
      {
        title: "Обновленный интерфейс",
        description: "Современный дизайн с улучшенной навигацией и UX",
        imgArr: ["/projects/shop/shop-1.webp",
          "/projects/shop/shop-3.webp",
          "/projects/shop/shop-4.webp",
          "/projects/shop/shop-4.webp",

        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Провел комплексную доработку интернет-магазина клиента для улучшения конверсии и пользовательского опыта.",
        "Основное внимание уделялось оптимизации процесса покупки и повышению скорости загрузки страниц.",
      ],
      bullets: [
        "Улучшил скорость загрузки сайта на 40% через оптимизацию кода и изображений",
        "Реализовал адаптивный дизайн для мобильных устройств",
      ],
    },
  },
  {
    id: "actor-visiting-card",
    companyName: "Адаптивная актерская визитка",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Адаптивный сайт-визитка для актера с портфолио и контактной информацией.",
    websiteLink: "https://mkh1n.github.io/ritasmirnova/",
    githubLink: "https://github.com/mkh1n/ritasmirnova",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP", "SASS"],
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-04-15"),
    companyLogoImg: "/projects/actress/actress-1.webp",
    pagesInfoArr: [
      {
        title: "Главная страница",
        description: "Элегантный дизайн с портфолио и видеопрезентацией",
        imgArr: ["/projects/actress/actress-1.webp",
          "/projects/actress/actress-2.webp",
          "/projects/actress/actress-3.webp",
          "/projects/actress/actress-4.webp",
                    "/projects/actress/actress-5.webp",


        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Создал адаптивный сайт-визитку для актера с акцентом на презентацию портфолио и контактную информацию.",
        "Сайт включает галерею работ, видео-презентацию и форму обратной связи.",
      ],
      bullets: [
        "Разработал полностью адаптивный дизайн для всех устройств",
        "Создал галерею работ с фильтрацией по категориям",
      ],
    },
  },
  {
    id: "theater-website",
    companyName: "Адаптивная верстка сайта для спектакля",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "Адаптивный сайт для продвижения театрального спектакля с информацией о постановке.",
    websiteLink: "https://mkh1n.github.io/chelovecheck/",
    githubLink: "https://github.com/mkh1n/chelovecheck",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-03-15"),
    companyLogoImg: "/projects/show/show-1.webp",
    pagesInfoArr: [
      {
        title: "Лендинг спектакля",
        description: "Захватывающий дизайн с информацией о спектакле и актерах",
        imgArr: ["/projects/show/show-1.webp",
          "/projects/show/show-3.webp",
          "/projects/show/show-4.webp",

        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал адаптивный сайт для продвижения театрального спектакля.",
        "Сайт включает информацию о постановке, актерском составе, расписании и покупке билетов.",
      ],
      bullets: [
        "Оптимизировал производительность для быстрой загрузки",
                "Реализовал красивые и плавные анимации",

      ],
    },
  },
  {
    id: "user-search-app",
    companyName: "Поиск пользователей",
    type: "Личный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Приложение для поиска и фильтрации пользователей с использованием внешнего API.",
    websiteLink: "https://mkh1n.github.io/user-searcher/",
    githubLink: "https://github.com/mkh1n/user-searcher",
    techStack: ["React", "JavaScript", "Axios", "Material-UI", "REST API"],
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-02-15"),
    companyLogoImg: "/projects/users/users-1.webp",
    pagesInfoArr: [
      {
        title: "Интерфейс поиска",
        description: "Чистый интерфейс с поиском и фильтрацией пользователей",
        imgArr: ["/projects/users/users-1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал приложение для поиска пользователей с интеграцией Random User API.",
        "Приложение позволяет фильтровать пользователей по различным параметрам и просматривать детальную информацию.",
      ],
      bullets: [
        "Интегрировал Random User API для получения тестовых данных",
        "Создал детальные карточки пользователей с полной информацией",
        "Добавил пагинацию и бесконечную прокрутку",
      ],
    },
  },
  {
    id: "magic-ball",
    companyName: "Магический шар",
    type: "Личный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      'Интерактивное веб-приложение "Магический шар" для получения случайных ответов на вопросы.',
    websiteLink: "https://mkh1n.github.io/magic-8-ball/",
    githubLink: "https://github.com/mkh1n/magic-8-ball",
    techStack: ["HTML", "CSS", "JavaScript", "Canvas API"],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-01-15"),
    companyLogoImg: "/projects/8-ball/ball-1.webp",
    pagesInfoArr: [
      {
        title: "Интерактивный шар",
        description: "Анимированный магический шар с случайными ответами",
        imgArr: ["/projects/8-ball/ball-1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        'Создал интерактивное веб-приложение "Магический шар" со случайнми ответами.',
        "Пользователи могут задавать вопросы и получать случайные ответы, как в настоящем магическом шаре.",
      ],
      bullets: [
        "Добавил библиотеку случайных ответов",
        "Создал адаптивный дизайн для мобильных устройств",
      ],
    },
  },
  {
    id: "rss-aggregator",
    companyName: "RSS агрегатор",
    type: "Личный",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Веб-приложение для агрегации и чтения RSS-лент из различных источников.",
    websiteLink: "https://frontend-project-11-rust-one.vercel.app/",
    githubLink: "https://github.com/mkh1n/frontend-project-11",
    techStack: ["Node.js", "Express", "MongoDB", "React", "RSS-parser"],
    startDate: new Date("2022-10-01"),
    endDate: new Date("2022-11-30"),
    companyLogoImg: "/projects/rss/rss-1.webp",
    pagesInfoArr: [
      {
        title: "Панель управления",
        description: "Управление RSS-подписками и чтение новостей",
        imgArr: ["/projects/rss/rss-1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал RSS-агрегатор для сбора и чтения новостей из различных источников.",
        "Приложение позволяет добавлять собственные RSS-ленты и читать в удобном формате.",
      ],
      bullets: [
        "Реализовал парсинг RSS-лент с различных источников",
      ],
    },
  },
  {
    id: "chat-app",
    companyName: "Чат для обмена сообщениями",
    type: "Личный",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Веб-приложение для обмена сообщениями в реальном времени с комнатами и уведомлениями.",
    websiteLink: "https://frontend-project-12-806g.onrender.com/",
    githubLink: "https://github.com/mkh1n/frontend-project-12",
    techStack: ["Socket.io", "Node.js", "React", "MongoDB", "JWT"],
    startDate: new Date("2022-08-01"),
    endDate: new Date("2022-09-30"),
    companyLogoImg: "/projects/chat/chat-1.webp",
    pagesInfoArr: [
      {
        title: "Интерфейс чата",
        description: "Современный интерфейс с комнатами и уведомлениями",
        imgArr: ["/projects/chat/chat-1.webp",
          "/projects/chat/chat-2.webp"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал веб-приложение для обмена сообщениями в реальном времени с использованием WebSocket.",
        "Приложение поддерживает создание комнат, приватные сообщения и уведомления.",
      ],
      bullets: [
        "Реализовал обмен сообщениями в реальном времени через Socket.io",
        "Создал систему комнат и приватных чатов",
        "Добавил уведомления о новых сообщениях",
        "Реализовал систему авторизации и аутентификации",
      ],
    },
  },
  {
    id: "dream-diary",
    companyName: 'Веб-приложение "Дневник Снов"',
    type: "Личный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Приложение для записи и анализа снов с тегами, поиском и статистикой.",
    websiteLink: "",
    githubLink: "",
    techStack: ["React", "TypeScript", "Firebase", "Chart.js", "Tailwind CSS"],
    startDate: new Date("2022-06-01"),
    endDate: new Date("2022-07-31"),
    companyLogoImg: "/projects/dream/dream-1.webp",
    pagesInfoArr: [
      {
        title: "Запись снов",
        description: "Интерфейс для записи и категоризации снов",
        imgArr: ["/projects/dream/dream-1.webp",
          "/projects/dream/dream-2.webp"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        'Создал веб-приложение "Дневник Снов" для записи, анализа и поиска закономерностей в сновидениях.',
        "Приложение включает систему тегов для лучшего понимания снов.",
      ],
      bullets: [
        "Реализовал систему тегов и категорий для организации записей",
        "Создал поиск по содержимому снов и тегам",
      ],
    },
  },
  {
    id: "currency-exchange",
    companyName: "Адаптивная верстка для обменника валют",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Адаптивный лендинг для сервиса обмена валют с калькулятором и актуальными курсами.",
    websiteLink: "https://mkh1n.github.io/currency-exchanger/",
    githubLink: "https://github.com/mkh1n/currency-exchanger",
    techStack: ["HTML", "CSS", "JavaScript", "Exchange Rate API", "Flexbox"],
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-05-15"),
    companyLogoImg: "/projects/currency/curr-1.webp",
    pagesInfoArr: [
      {
        title: "Калькулятор валют",
        description: "Интерактивный калькулятор с актуальными курсами",
        imgArr: ["/projects/currency/curr-1.webp",
          "/projects/currency/curr-2.webp"
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал адаптивный лендинг для сервиса обмена валют с интеграцией API курсов валют.",
        "Сайт включает калькулятор, актуальные курсы и информацию о сервисе.",
      ],
      bullets: [
        "Интегрировал Exchange Rate API для получения актуальных курсов",
        "Создал интерактивный калькулятор валют",
        "Реализовал адаптивный дизайн для всех разрешений экрана",
        "Добавил таблицу сравнения курсов с разных источников",
      ],
    },
  },
  {
    id: "qr-generator",
    companyName: "Адаптивная верстка генератора QR-кодов",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Адаптивный сайт для генерации QR-кодов с настройками и предпросмотром.",
    websiteLink: "https://mkh1n.github.io/quickqr/",
    githubLink: "https://github.com/mkh1n/quickqr",
    techStack: ["HTML", "CSS", "JavaScript", "QRCode.js", "Local Storage"],
    startDate: new Date("2022-02-01"),
    endDate: new Date("2022-03-15"),
    companyLogoImg: "/projects/qr/qr-1.webp",
    pagesInfoArr: [
      {
        title: "Генератор QR",
        description: "Интерфейс генерации с настройками цвета и размера",
        imgArr: ["/projects/qr/qr-1.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Создал адаптивный сайт для генерации QR-кодов с различными настройками и параметрами.",
        "Пользователи могут настраивать цвет, размер и добавлять логотипы к QR-кодам.",
      ],
      bullets: [
        "Реализовал генерацию QR-кодов с использованием QRCode.js",
        "Добавил настройки цвета, размера и отступов",
        "Создал предпросмотр в реальном времени",
        "Реализовал сохранение настроек в Local Storage",
      ],
    },
  },
  {
    id: "weather-app",
    companyName: "Адаптивная верстка для погодного сайта",
    type: "Профессиональный",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Адаптивный сайт погоды с прогнозами, картами и детальной информацией.",
    websiteLink: "https://alexandrsperansky.github.io/WeatherReport/",
    githubLink: "https://github.com/AlexandrSperansky/WeatherReport",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API", "Geolocation API"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-02-15"),
    companyLogoImg: "/projects/weather/weather-1.webp",
    pagesInfoArr: [
      {
        title: "Прогноз погоды",
        description: "Детальный прогноз с почасовыми и недельными данными",
        imgArr: ["/projects/weather/weather-1.webp",
          "/projects/weather/weather-2.webp",
          "/projects/weather/weather-3.webp",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Разработал адаптивный сайт погоды с интеграцией Weather API и геолокации.",
        "Сайт показывает текущую погоду, прогноз на неделю и дополнительную метеорологическую информацию.",
      ],
      bullets: [
        "Интегрировал OpenWeatherMap API для получения данных о погоде",
        "Реализовал определение местоположения через Geolocation API",
        "Создал адаптивный интерфейс с темной и светлой темами",
        "Добавил карту погоды с визуализацией данных",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);