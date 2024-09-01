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
  class: string;
  render: JSX.Element;
  href?: string;
  ariaLabel?: string;
  target?: string;
}[] = [
  {
    key: "Profile",
    class:
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: ProfileSection,
  },
  {
    key: "Introduction",
    class:
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: IntroductionSection,
  },
  {
    key: "ThemeSwitcher",
    class:
      "flex border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: ThemeSwitcher,
  },
  {
    href: "https://www.linkedin.com/in/ignaciosilvae/",
    ariaLabel: "LinkedIn",
    target: "_blank",
    key: "LinkedInSection",
    class:
      "group flex h-full flex-col items-center border-blue-400 border-opacity-70 bg-blue-600 bg-opacity-10 transition-all hover:bg-blue-400 dark:border-blue-600 dark:hover:bg-blue-600",

    render: LinkedinSection,
  },
  {
    key: "Mail",
    href: "mailto:ignacio.silva.e@gmail.com",
    ariaLabel: "Mail",
    target: "_blank",
    class:
      "flex flex-col flex-wrap content-center border-red-400 border-opacity-70 bg-red-600 bg-opacity-10 transition-all hover:bg-red-400 dark:border-red-600 dark:hover:bg-red-600",

    render: MailSection,
  },
  {
    key: "Github",
    href: "https://github.com/KJulo",
    ariaLabel: "Github",
    target: "_blank",
    class:
      "flex flex-col content-center items-center border-purple-400 border-opacity-70 bg-purple-600 bg-opacity-10 transition-all hover:bg-purple-400 dark:border-purple-600 dark:hover:bg-purple-600",

    render: GithubSection,
  },
  {
    key: "Gitlab",
    href: "https://gitlab.com/isilva3",
    ariaLabel: "Gitlab",
    target: "_blank",
    class:
      "flex flex-grow flex-col flex-wrap content-center border-orange-400 border-opacity-70 bg-orange-600 bg-opacity-10 transition-all hover:bg-orange-400 dark:border-orange-600 dark:hover:bg-orange-600",

    render: GitlabSection,
  },
  {
    key: "FrontendSection",
    class:
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: FrontendSection,
  },
  {
    key: "BackendSection",
    class:
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: BackendSection,
  },
  {
    key: "Experience",
    class:
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: ExperienceSection,
  },
  {
    key: "About me",
    class:
      "border border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",

    render: AboutMeSection,
  },
];
