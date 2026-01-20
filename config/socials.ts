import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@mkh1n",
    icon: Icons.gitHub,
    link: "https://github.com/mkh1n",
  },

  {
    name: "Gmail",
    username: "romamuhino1@gmail.com",
    icon: Icons.gmail,
    link: "mailto:romamuhino1@gmail.com",
  },
];
