import type { AstroComponentFactory } from "astro/runtime/server/index.js";

import AboutMeSection from "./components/AboutMeSection/AboutMeSection.astro";
import BackendSection from "./components/BackendSection/BackendSection.astro";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection.astro";
import FrontendSection from "./components/FrontendSection/FrontendSection.astro";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection.astro";
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
      "border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-[22rem] sm:col-span-4 sm:min-h-[24rem] lg:col-span-8 lg:row-span-2 lg:min-h-[28rem]",
    ],
    render: IntroductionSection,
  },
  {
    key: "Profile",
    classList: [
      "hidden lg:flex border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "lg:col-span-4 lg:min-h-56",
    ],
    render: ProfileSection,
  },
  {
    key: "About me",
    classList: [
      "border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-36 sm:col-span-4 lg:col-span-4 lg:min-h-48",
    ],
    render: AboutMeSection,
  },
  {
    key: "Experience",
    classList: [
      "border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-[23rem] sm:col-span-4 sm:min-h-[22rem] lg:col-span-12",
    ],
    render: ExperienceSection,
  },
  {
    key: "FrontendSection",
    classList: [
      "border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-44 sm:col-span-2 lg:col-span-6",
    ],
    render: FrontendSection,
  },
  {
    key: "BackendSection",
    classList: [
      "border-zinc-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
      "col-span-2 min-h-44 sm:col-span-2 lg:col-span-6",
    ],
    render: BackendSection,
  },
];
