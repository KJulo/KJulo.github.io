import Certification from "./components/Certification/Certification.astro";
import Education from "./components/Education/Education.astro";
import Languages from "./components/Languages/Languages.astro";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation.astro";
import WorkExperience from "./components/WorkExperience/WorkExperience.astro";

import WorkIcon from "@icons/resume/Work.svg?raw";
import ContactIcon from "@icons/resume/Contact.svg?raw";
import EducationIcon from "@icons/resume/Education.svg?raw";
import CertificationIcon from "@icons/resume/Certification.svg?raw";
import LanguageIcon from "@icons/resume/Language.svg?raw";
import type { MessagesInterface } from "astro/types/MessagesInterface";

export const getSections = (messages: MessagesInterface) => [
  {
    title: messages.resume_personalInformation_title(),
    id: "personal-information",
    render: PersonalInformation,
    icon: ContactIcon,
    iconClassname: "stroke-black fill-red dark:fill-white dark:stroke-white",
  },
  {
    title: messages.resume_workExperience_title(),
    id: "work-experience",
    render: WorkExperience,
    icon: WorkIcon,
    iconClassname: "fill-black dark:fill-white",
  },
  {
    title: messages.resume_education_title(),
    id: "education",
    render: Education,
    icon: EducationIcon,
    iconClassname: "fill-black dark:fill-white",
  },
  {
    title: messages.resume_certifications_title(),
    id: "certifications",
    render: Certification,
    icon: CertificationIcon,
    iconClassname: "stroke-black fill-black dark:fill-white dark:stroke-white",
  },
  {
    title: messages.resume_languages_title(),
    id: "languages",
    render: Languages,
    icon: LanguageIcon,
    iconClassname: "stroke-black dark:stroke-white",
  },
];
