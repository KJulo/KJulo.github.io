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

export const getSections = (message) => [
  {
    title: message.resume_personalInformation_title(),
    id: "personal-information",
    render: PersonalInformation,
    icon: ContactIcon,
  },
  {
    title: message.resume_workExperience_title(),
    id: "work-experience",
    render: WorkExperience,
    icon: WorkIcon,
  },
  {
    title: message.resume_education_title(),
    id: "education",
    render: Education,
    icon: EducationIcon,
    iconClassname: "fill-black dark:fill-white",
  },
  {
    title: message.resume_certifications_title(),
    id: "certifications",
    render: Certification,
    icon: CertificationIcon,
    iconClassname: "fill-black dark:fill-white",
  },
  {
    title: message.resume_languages_title(),
    id: "languages",
    render: Languages,
    icon: LanguageIcon,
    iconClassname: "stroke-black dark:stroke-white",
  },
];
