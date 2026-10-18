export const PROJECT_SLUGS = [
  "product-foundations",
  "platform-evolution",
  "realtime-communication",
] as const;

type ProjectSlug = (typeof PROJECT_SLUGS)[number];
type ProjectLocale = "en" | "es";
type ProjectVisual = "foundations" | "platform" | "realtime";

export interface Project {
  slug: ProjectSlug;
  visual: ProjectVisual;
  isNda?: boolean;
  label: string;
  title: string;
  organization: string;
  context: string;
  role: string;
  technologies: string[];
  result: string;
  challenge: string;
  approach: string[];
  backLabel: string;
  detailLabel: string;
  contextLabel: string;
  roleLabel: string;
  technologiesLabel: string;
  resultLabel: string;
  challengeLabel: string;
  approachLabel: string;
  ndaLabel: string;
  visualLabel: string;
  visualNdaLabel: string;
}

const PROJECTS: Record<ProjectLocale, Project[]> = {
  en: [
    {
      slug: "product-foundations",
      visual: "foundations",
      isNda: true,
      label: "Product foundations",
      title: "Front-end development for a new product",
      organization: "Happ · confidential product",
      context:
        "Developed the front end for a new SaaS product, translating requirements into features and contributing to the definition of its file and component architecture.",
      role: "Front-end developer — implementation, requirements gathering, and file and component architecture.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Implemented the front end, internationalization, and a design system with Flowbite and Tailwind.",
      challenge:
        "Define the file and component architecture for a new product from its requirements.",
      approach: [
        "Participated in requirements gathering and defined the file and component architecture.",
        "Implemented a design system with Flowbite and Tailwind, aligned with components defined in Figma.",
        "Implemented internationalization.",
      ],
      backLabel: "Back to portfolio",
      detailLabel: "Read case study",
      contextLabel: "Context",
      roleLabel: "My role",
      technologiesLabel: "Key technologies",
      resultLabel: "Result",
      challengeLabel: "The challenge",
      approachLabel: "How I approached it",
      ndaLabel: "Under NDA",
      visualLabel: "Conceptual interface preview",
      visualNdaLabel: "Interface preview unavailable under NDA",
    },
    {
      slug: "platform-evolution",
      visual: "platform",
      label: "Platform evolution",
      title: "Refactoring and new functionality for an existing application",
      organization: "icar",
      context:
        "An existing application was being refactored while new front-end functionality was developed.",
      role: "Front-end developer — incremental refactoring and feature delivery.",
      technologies: [
        "Next.js",
        "GraphQL",
        "Axios",
        "Ant Design",
        "Vercel",
        "JWT",
      ],
      result:
        "Contributed to application refactoring and front-end decisions for new functionality.",
      challenge:
        "Contribute to refactoring while participating in front-end decisions for new functionality.",
      approach: [
        "Participated in front-end decisions for new functionality and in several company projects.",
        "Contributed to application refactoring, focusing on code readability and maintainability.",
      ],
      backLabel: "Back to portfolio",
      detailLabel: "Read case study",
      contextLabel: "Context",
      roleLabel: "My role",
      technologiesLabel: "Key technologies",
      resultLabel: "Result",
      challengeLabel: "The challenge",
      approachLabel: "How I approached it",
      ndaLabel: "Under NDA",
      visualLabel: "Conceptual interface preview",
      visualNdaLabel: "Interface preview unavailable under NDA",
    },
    {
      slug: "realtime-communication",
      visual: "realtime",
      label: "Real-time communication",
      title: "Real-time chat for messages and files",
      organization: "Jumpitt",
      context: "The application included real-time messaging and file sharing.",
      role: "Front-end developer — real-time experience, authentication, and client demos.",
      technologies: [
        "React",
        "WebSockets",
        "OAuth",
        "ExpressJS",
        "Prisma",
        "JWT",
        "Amazon EC2",
      ],
      result:
        "Implemented real-time messaging and file sharing, OAuth sign-in, and front-end deployment on Amazon EC2.",
      challenge: "Connect the front end to a real-time chat service.",
      approach: [
        "Integrated WebSockets for real-time messaging and file sharing.",
        "Integrated OAuth login and contributed to the service connection behind the real-time chat.",
        "Demonstrated the application to clients and explained how it worked.",
      ],
      backLabel: "Back to portfolio",
      detailLabel: "Read case study",
      contextLabel: "Context",
      roleLabel: "My role",
      technologiesLabel: "Key technologies",
      resultLabel: "Result",
      challengeLabel: "The challenge",
      approachLabel: "How I approached it",
      ndaLabel: "Under NDA",
      visualLabel: "Conceptual interface preview",
      visualNdaLabel: "Interface preview unavailable under NDA",
    },
  ],
  es: [
    {
      slug: "product-foundations",
      visual: "foundations",
      isNda: true,
      label: "Bases de producto",
      title: "Desarrollo front-end para un producto nuevo",
      organization: "Happ · producto confidencial",
      context:
        "Desarrollé el front-end de un producto SaaS nuevo, traduje requisitos en funcionalidades y participé en la definición de su arquitectura de archivos y componentes.",
      role: "Desarrollador Frontend — implementación, levantamiento de requisitos y arquitectura de archivos y componentes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Implementé el front-end, internacionalización y un sistema de diseño con Flowbite y Tailwind.",
      challenge:
        "Definir la arquitectura de archivos y componentes de un producto nuevo a partir de sus requisitos.",
      approach: [
        "Participé en el levantamiento de requisitos y definí la arquitectura de archivos y componentes.",
        "Implementé un sistema de diseño con Flowbite y Tailwind, alineado con los componentes definidos en Figma.",
        "Implementé internacionalización.",
      ],
      backLabel: "Volver al portfolio",
      detailLabel: "Ver caso de estudio",
      contextLabel: "Contexto",
      roleLabel: "Mi rol",
      technologiesLabel: "Tecnologías clave",
      resultLabel: "Resultado",
      challengeLabel: "El desafío",
      approachLabel: "Cómo lo abordé",
      ndaLabel: "Bajo NDA",
      visualLabel: "Vista conceptual de la interfaz",
      visualNdaLabel: "Vista de interfaz no disponible por NDA",
    },
    {
      slug: "platform-evolution",
      visual: "platform",
      label: "Evolución de plataforma",
      title:
        "Refactorización y nuevas funcionalidades en una aplicación existente",
      organization: "icar",
      context:
        "Una aplicación existente se refactorizaba mientras se desarrollaban nuevas funcionalidades de front-end.",
      role: "Desarrollador Frontend — refactorización incremental y entrega de funcionalidades.",
      technologies: [
        "Next.js",
        "GraphQL",
        "Axios",
        "Ant Design",
        "Vercel",
        "JWT",
      ],
      result:
        "Participé en la refactorización de la aplicación y en decisiones de front-end para nuevas funcionalidades.",
      challenge:
        "Contribuir a la refactorización mientras participaba en decisiones de front-end para nuevas funcionalidades.",
      approach: [
        "Participé en decisiones de front-end para nuevas funcionalidades y en distintos proyectos de la empresa.",
        "Participé en la refactorización de la aplicación, con foco en legibilidad y mantenibilidad del código.",
      ],
      backLabel: "Volver al portfolio",
      detailLabel: "Ver caso de estudio",
      contextLabel: "Contexto",
      roleLabel: "Mi rol",
      technologiesLabel: "Tecnologías clave",
      resultLabel: "Resultado",
      challengeLabel: "El desafío",
      approachLabel: "Cómo lo abordé",
      ndaLabel: "Bajo NDA",
      visualLabel: "Vista conceptual de la interfaz",
      visualNdaLabel: "Vista de interfaz no disponible por NDA",
    },
    {
      slug: "realtime-communication",
      visual: "realtime",
      label: "Comunicación en tiempo real",
      title: "Chat en tiempo real para mensajes y archivos",
      organization: "Jumpitt",
      context:
        "La aplicación incluía mensajería y envío de archivos en tiempo real.",
      role: "Desarrollador Frontend — experiencia en tiempo real, autenticación y demos con clientes.",
      technologies: [
        "React",
        "WebSockets",
        "OAuth",
        "ExpressJS",
        "Prisma",
        "JWT",
        "Amazon EC2",
      ],
      result:
        "Implementé mensajería y envío de archivos en tiempo real, inicio de sesión con OAuth y despliegue del front-end en Amazon EC2.",
      challenge:
        "Conectar el front-end con un servicio de chat en tiempo real.",
      approach: [
        "Integré WebSockets para el envío de mensajes y archivos en tiempo real.",
        "Integré el inicio de sesión con OAuth y contribuí al servicio de conexión del chat en tiempo real.",
        "Realicé demostraciones de la aplicación a clientes y expliqué su funcionamiento.",
      ],
      backLabel: "Volver al portfolio",
      detailLabel: "Ver caso de estudio",
      contextLabel: "Contexto",
      roleLabel: "Mi rol",
      technologiesLabel: "Tecnologías clave",
      resultLabel: "Resultado",
      challengeLabel: "El desafío",
      approachLabel: "Cómo lo abordé",
      ndaLabel: "Bajo NDA",
      visualLabel: "Vista conceptual de la interfaz",
      visualNdaLabel: "Vista de interfaz no disponible por NDA",
    },
  ],
};

export function getProjects(locale: ProjectLocale) {
  return PROJECTS[locale];
}

export function getProject(locale: ProjectLocale, slug: string) {
  return PROJECTS[locale].find((project) => project.slug === slug);
}

export function getProjectHref(slug: ProjectSlug, locale: ProjectLocale) {
  const prefix = locale === "es" ? "/es" : "";
  return `${prefix}/projects/${slug}`;
}
