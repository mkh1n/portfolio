import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "React-фреймворк с поддержкой SSR, SSG, маршрутизацией и API роутами.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Библиотека для создания пользовательских интерфейсов с компонентным подходом.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Nest.js",
    description:
      "Прогрессивный Node.js фреймворк для создания масштабируемых серверных приложений.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Express.js",
    description: "Минималистичный и гибкий Node.js фреймворк для веб-приложений.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description: "Среда выполнения JavaScript на стороне сервера.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "TypeScript",
    description: "Язык программирования с статической типизацией на основе JavaScript.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description: "Мультипарадигменный язык программирования для веб-разработки.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML5",
    description: "Стандарт разметки для структурирования и представления контента в вебе.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS3",
    description: "Язык описания стилей и внешнего вида веб-страниц.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description: "Фреймворк для разработки нативных мобильных приложений на React.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Redux",
    description: "Контейнер предсказуемого состояния для JavaScript приложений.",
    rating: 4,
    icon: Icons.redux,
  },
  {
    name: "Bootstrap",
    description: "CSS-фреймворк с набором компонентов и утилит для быстрой верстки.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description: "Реляционная система управления базами данных с открытым исходным кодом.",
    rating: 2,
    icon: Icons.mysql,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);