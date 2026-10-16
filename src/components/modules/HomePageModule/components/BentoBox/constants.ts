import LanguageSwitcher from "@commons/LanguageSwitcher/LanguageSwitcher.astro";
import ThemeSwitcher from "@commons/ThemeSwitcher/ThemeSwitcher.astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import AboutMeSection from "./components/AboutMeSection/AboutMeSection.astro";
import BackendSection from "./components/BackendSection/BackendSection.astro";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection.astro";
import FrontendSection from "./components/FrontendSection/FrontendSection.astro";
import GithubSection from "./components/GithubSection/GithubSection.astro";
import GitlabSection from "./components/GitlabSection/GitlabSection.astro";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection.astro";
import LinkedinSection from "./components/LinkedinSection/LinkedinSection.astro";
import MailSection from "./components/MailSection/MailSection.astro";
import ProfileSection from "./components/ProfileSection/ProfileSection.astro";

export const CONTENT: {
  key: string;
  classList: string[];
  render: AstroComponentFactory;
  href?: string;
  ariaLabel?: string;
  target?: string;
}[] = [
  {
    key: "Introduction",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-[22rem] sm:col-span-4 sm:min-h-[24rem] lg:col-span-8 lg:min-h-[28rem]",
    ],

    render: IntroductionSection,
  },
  {
    key: "Profile",
    classList: [
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-[20rem] sm:col-span-4 sm:min-h-[22rem] lg:col-span-4 lg:min-h-0",
    ],

    render: ProfileSection,
  },
  {
    key: "ThemeSwitcher",
    classList: [
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],

    render: ThemeSwitcher,
  },
  {
    key: "Language Switcher",
    classList: [
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],
    render: LanguageSwitcher,
  },
  {
    href: "https://www.linkedin.com/in/ignaciosilvae/",
    ariaLabel: "LinkedIn",
    target: "_blank",
    key: "LinkedInSection",
    classList: [
      "group flex h-full flex-col items-center border-blue-400/70  bg-blue-600/10 transition-all duration-150 hover:bg-blue-400 dark:border-blue-600 dark:hover:bg-blue-600",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],

    render: LinkedinSection,
  },
  {
    key: "Mail",
    href: "mailto:ignacio.silva.e@gmail.com",
    ariaLabel: "Mail",
    target: "_blank",
    classList: [
      "flex flex-col flex-wrap content-center border-red-400/70 bg-red-600/10 transition-all duration-150 hover:bg-red-400 dark:border-red-600 dark:hover:bg-red-600",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],

    render: MailSection,
  },
  {
    key: "Github",
    href: "https://github.com/KJulo",
    ariaLabel: "Github",
    target: "_blank",
    classList: [
      "flex flex-col content-center items-center border-purple-400/70  bg-purple-600/10 transition-all duration-150 hover:bg-purple-400 dark:border-purple-600 dark:hover:bg-purple-600",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],

    render: GithubSection,
  },
  {
    key: "Gitlab",
    href: "https://gitlab.com/isilva3",
    ariaLabel: "Gitlab",
    target: "_blank",
    classList: [
      "flex grow flex-col flex-wrap content-center border-orange-400/70  bg-orange-600/10 transition-all duration-150 hover:bg-orange-400 dark:border-orange-600 dark:hover:bg-orange-600",
      "col-span-1 min-h-28 sm:min-h-32 lg:col-span-2 lg:min-h-28",
    ],

    render: GitlabSection,
  },
  {
    key: "About me",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-48 sm:col-span-4 sm:min-h-52 lg:col-span-4 lg:min-h-64",
    ],

    render: AboutMeSection,
  },
  {
    key: "FrontendSection",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-48 sm:min-h-52 lg:col-span-4 lg:min-h-64",
    ],

    render: FrontendSection,
  },
  {
    key: "BackendSection",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-48 sm:min-h-52 lg:col-span-4 lg:min-h-64",
    ],

    render: BackendSection,
  },
  {
    key: "Experience",
    classList: [
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-[23rem] sm:col-span-4 sm:min-h-[22rem] lg:col-span-12",
    ],

    render: ExperienceSection,
  },
];
