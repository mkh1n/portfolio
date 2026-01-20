import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "",
    description: "Мое портфолио.",
    metadata: {
      title: "Home",
      description: "Портфолио Романа Мухина.",
    },
  },
  skills: {
    title: "Скиллы",
    description: "",
    metadata: {
      title: "Skills",
      description:
        "Скиллы Мухина Романа",
    },
  },
  projects: {
    title: "Проекты",
    description: "",
    metadata: {
      title: "Проекты",
      description: "Проекты Мухина Романа.",
    },
  },
  contact: {
    title: "Контакты",
    description: "Будем на связи.",
    metadata: {
      title: "Контакты",
      description: "Контакты Романа Мухина.",
    },
  },

  resume: {
    title: "Резюме",
    description: "",
    metadata: {
      title: "Резюме",
      description: "Резюме Мухина Романа.",
    },
  },
  experience: {
    title: "Опыт",
    description: "",
    metadata: {
      title: "Опыт",
      description:
        "Опыт Мухина Романа",
    },
  },
};
