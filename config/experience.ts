import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "collection-ecommerce",
    position: "Frontend Developer",
    company: "Collection (интернет-магазин)",
    location: "Удаленно",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2025-05-01"),
    description: [
      "Работа над интернет-магазином Collection: доработка веб-интерфейса, верстка, изменение функционала",
      "Оптимизация производительности и скорости загрузки страниц",
      "Исправление багов и улучшение пользовательского опыта",
    ],
    achievements: [
      "Доработал веб-интерфейс интернет-магазина, улучшив UX и удобство навигации",
      "Повысил скорость загрузки страниц на 40% через оптимизацию кода и ресурсов",
      "Реализовал адаптивный дизайн для корректного отображения на мобильных устройствах",
      "Улучшил работоспособность ключевых функций магазина: корзина, оформление заказа, фильтрация товаров",
      "Оптимизировал производительность основных страниц, уменьшив время отклика",
    ],
    skills: [
      "PHP",
      "JavaScript",
      "HTML 5",
      "CSS 3",
      "TypeScript",
      "Webpack",
    ],
    companyUrl: "#",
    logo: "/experience/collection.webp",
  },
  {
    id: "kwork-freelance",
    position: "Fullstack Developer (фриланс)",
    company: "Kwork.ru",
    location: "Удаленно",
    startDate: new Date("2024-03-01"),
    endDate: "Present",
    description: [
      "Выполнение заказов на фриланс-бирже Kwork: разработка веб-приложений и сайтов",
      "Работа с React, верстка, backend разработка, создание парсеров",
      "Разработка полного цикла: от проектирования до развертывания",
    ],
    achievements: [
      "Выполнил 50+ успешных проектов на фриланс-бирже с высоким рейтингом",
      "Разработал 15+ веб-приложений на React с полным функционалом",
      "Создал парсеры данных для различных платформ с высокой производительностью",
      "Реализовал 20+ адаптивных версток с современным дизайном",
      "Построил 10+ backend-систем на Node.js с базами данных",
      "Получил 100% положительных отзывов от заказчиков",
    ],
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML 5",
      "CSS 3",
      "Redux",
      "Bootstrap",
      "MySQL",
    ],
    companyUrl: "https://kwork.ru",
    logo: "/experience/kwork.webp",
  },
];