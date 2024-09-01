import ThemeSwitcher from "astro/components/commons/ThemeSwitcher/ThemeSwitcher.astro";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection.astro";
import ProfileSection from "./components/ProfileSection/ProfileSection.astro";
import LinkedinSection from "./components/LinkedinSection/LinkedinSection.astro";
import MailSection from "./components/MailSection/MailSection.astro";
import GitlabSection from "./components/GitlabSection/GitlabSection.astro";
import FrontendSection from "./components/FrontendSection/FrontendSection.astro";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection.astro";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection.astro";
import GithubSection from "./components/GithubSection/GithubSection.astro";
import BackendSection from "./components/BackendSection/BackendSection.astro";
import type { JSX } from "astro/jsx-runtime";

export const CONTENT: {
  key: string;
  classList: string[];
  render: JSX.Element;
  href?: string;
  ariaLabel?: string;
  target?: string;
}[] = [
  {
    key: "Profile",
    classList: [
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-6 row-span-12 ",
      "md:col-span-4 md:row-start-1 md:col-start-1 md:row-span-3",
    ],

    render: ProfileSection,
  },
  {
    key: "ThemeSwitcher",
    classList: [
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-6 row-span-12",
      "md:col-span-4  md:row-start-1 md:col-start-5 md:row-span-3",
    ],

    render: ThemeSwitcher,
  },
  {
    key: "Introduction",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-12 row-span-2 ",
      "md:col-span-6",
      "lg:col-span-4 lg:row-span-3",
    ],

    render: IntroductionSection,
  },
  {
    key: "About me",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-12 row-span-2",
      "md:col-span-6",
      "lg:col-span-4 lg:row-span-3",
    ],

    render: AboutMeSection,
  },
  {
    href: "https://www.linkedin.com/in/ignaciosilvae/",
    ariaLabel: "LinkedIn",
    target: "_blank",
    key: "LinkedInSection",
    classList: [
      "group flex h-full flex-col items-center border-blue-400 border-opacity-70 bg-blue-600 bg-opacity-10 transition-all hover:bg-blue-400 dark:border-blue-600 dark:hover:bg-blue-600",
      "col-span-3 row-span-1 ",
      "md:col-span-2  md:row-start-1 md:col-start-9",
    ],

    render: LinkedinSection,
  },
  {
    key: "Mail",
    href: "mailto:ignacio.silva.e@gmail.com",
    ariaLabel: "Mail",
    target: "_blank",
    classList: [
      "flex flex-col flex-wrap content-center border-red-400 border-opacity-70 bg-red-600 bg-opacity-10 transition-all hover:bg-red-400 dark:border-red-600 dark:hover:bg-red-600",
      "col-span-3 row-span-1 ",
      "md:col-span-2 md:row-start-1 md:col-start-11",
    ],

    render: MailSection,
  },
  {
    key: "Github",
    href: "https://github.com/KJulo",
    ariaLabel: "Github",
    target: "_blank",
    classList: [
      "flex flex-col content-center items-center border-purple-400 border-opacity-70 bg-purple-600 bg-opacity-10 transition-all hover:bg-purple-400 dark:border-purple-600 dark:hover:bg-purple-600",
      "col-span-3 row-span-1 ",
      "md:col-span-2 md:row-span-2 md:row-start-2 md:col-start-9",
    ],

    render: GithubSection,
  },
  {
    key: "Gitlab",
    href: "https://gitlab.com/isilva3",
    ariaLabel: "Gitlab",
    target: "_blank",
    classList: [
      "flex flex-grow flex-col flex-wrap content-center border-orange-400 border-opacity-70 bg-orange-600 bg-opacity-10 transition-all hover:bg-orange-400 dark:border-orange-600 dark:hover:bg-orange-600",
      "col-span-3 row-span-1 ",
      "md:col-span-2 md:row-span-2 md:row-start-2 md:col-start-11",
    ],

    render: GitlabSection,
  },
  {
    key: "FrontendSection",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-12 row-span-2",
      "md:col-span-6",
      "lg:col-span-4 lg:row-span-3",
    ],

    render: FrontendSection,
  },
  {
    key: "BackendSection",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-12 row-span-2 ",
      "md:col-span-6",
      "lg:col-span-4 lg:row-span-4 lg:row-start-7 lg:col-start-9",
    ],

    render: BackendSection,
  },
  {
    key: "Experience",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-12 row-span-3",
      "lg:col-span-8 lg:row-span-6 ",
    ],

    render: ExperienceSection,
  },
];
