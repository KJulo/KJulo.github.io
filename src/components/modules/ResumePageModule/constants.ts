import Certification from "./components/Certification/Certification.astro";
import Education from "./components/Education/Education.astro";
import Languages from "./components/Languages/Languages.astro";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation.astro";
import WorkExperience from "./components/WorkExperience/WorkExperience.astro";

export const getSections = (message) => [
  {
    title: message.resume_personalInformation_title(),
    id: "personal-information",
    render: PersonalInformation,
  },
  {
    title: message.resume_workExperience_title(),
    id: "work-experience",
    render: WorkExperience,
  },
  {
    title: message.resume_education_title(),
    id: "education",
    render: Education,
  },
  {
    title: message.resume_certifications_title(),
    id: "certifications",
    render: Certification,
  },
  {
    title: message.resume_languages_title(),
    id: "languages",
    render: Languages,
  },
];
