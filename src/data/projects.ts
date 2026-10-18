export const PROJECT_SLUGS = [
  "product-foundations",
  "platform-evolution",
  "realtime-communication",
] as const;

type ProjectSlug = (typeof PROJECT_SLUGS)[number];
type ProjectLocale = "en" | "es";
type ProjectVisual =
  | "foundations"
  | "platform"
  | "realtime"
  | "icar-transfer"
  | "happ-site";

export interface Project {
  slug: ProjectSlug;
  visual: ProjectVisual;
  isNda?: boolean;
  label: string;
  title: string;
  organization: string;
  websiteUrl?: string;
  websiteLabel?: string;
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
      visual: "happ-site",
      label: "Product foundations",
      title: "Front-end development for a new product",
      organization: "Happ",
      websiteUrl: "https://happ.cl/",
      websiteLabel: "Visit website",
      context:
        "Built the front end for 6 flows in a new B2B preventive-health SaaS product, spanning approximately 20–25 views.",
      role: "Front-end developer — end-to-end requirements ownership, implementation, and file and component architecture.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Delivered a testable product foundation with customized design-system components, automated end-to-end coverage, lazy loading, and an English internationalization foundation pending product copy.",
      challenge:
        "Build a reliable, reusable front-end foundation for a new product while its requirements were taking shape.",
      approach: [
        "Owned requirements through implementation across 6 product flows and contributed to the file and component architecture.",
        "Customized components to the company design system with Flowbite, Tailwind, and Figma.",
        "Automated Cypress end-to-end tests for all application flows and applied lazy loading to the home and feature pages.",
        "Prepared the internationalization foundation for English; enabling it remains pending completion of product copy.",
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
      visualLabel: "Screenshot of Happ's public homepage",
      visualNdaLabel: "Interface preview unavailable under NDA",
    },
    {
      slug: "platform-evolution",
      visual: "icar-transfer",
      label: "Platform evolution",
      title: "Refactoring and new functionality for an existing application",
      organization: "icar",
      websiteUrl: "https://www.icar.cl/transferencia-vehicular",
      websiteLabel: "Visit website",
      context:
        "A digital vehicle-transfer platform needed new functionality while its front end was refactored. The work covered 4 modular flows with configurable variants, spanning approximately 40–50 views.",
      role: "Front-end developer — primary front-end ownership, autonomous sprint delivery, incremental refactoring, and feature delivery.",
      technologies: [
        "Next.js",
        "GraphQL",
        "Axios",
        "Ant Design",
        "Vercel",
        "JWT",
      ],
      result:
        "Implemented and maintained modular transaction flows, customized design-system components, and contributed to a more maintainable and stable front-end foundation.",
      challenge:
        "Evolve and refactor a user-facing flow for a regulated, high-trust transaction without slowing feature delivery.",
      approach: [
        "Independently resolved the tickets prioritized for each sprint and participated in front-end decisions for new functionality.",
        "Implemented and maintained 4 modular flows with configurable variants and components customized to the company design system.",
        "Refactored the application with a focus on readability, maintainability, initial load performance, and stability.",
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
      visualLabel: "Screenshot of the public vehicle-transfer page",
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
      visual: "happ-site",
      label: "Bases de producto",
      title: "Desarrollo front-end para un producto nuevo",
      organization: "Happ",
      websiteUrl: "https://happ.cl/",
      websiteLabel: "Visitar sitio web",
      context:
        "Construí el front-end de 6 flujos para un nuevo producto SaaS B2B de salud preventiva, con aproximadamente 20–25 vistas.",
      role: "Desarrollador Frontend — gestión de requisitos de punta a punta, implementación y arquitectura de archivos y componentes.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Entregué una base de producto testeable con componentes personalizados del sistema de diseño, cobertura end-to-end automatizada, lazy loading y una base de internacionalización para inglés pendiente de contenidos.",
      challenge:
        "Construir una base front-end confiable y reutilizable para un producto nuevo mientras sus requisitos tomaban forma.",
      approach: [
        "Gestioné los requisitos hasta su implementación en 6 flujos de producto y contribuí a la arquitectura de archivos y componentes.",
        "Personalicé componentes conforme al sistema de diseño de la empresa con Flowbite, Tailwind y Figma.",
        "Automaticé pruebas end-to-end con Cypress para todos los flujos de la aplicación y apliqué lazy loading en la home y páginas.",
        "Preparé la base de internacionalización para inglés; su activación depende de completar los contenidos del producto.",
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
      visualLabel: "Captura de la página pública de Happ",
      visualNdaLabel: "Vista de interfaz no disponible por NDA",
    },
    {
      slug: "platform-evolution",
      visual: "icar-transfer",
      label: "Evolución de plataforma",
      title:
        "Refactorización y nuevas funcionalidades en una aplicación existente",
      organization: "icar",
      websiteUrl: "https://www.icar.cl/transferencia-vehicular",
      websiteLabel: "Visitar sitio web",
      context:
        "Una plataforma digital de transferencias vehiculares necesitaba nuevas funcionalidades mientras se refactorizaba su front-end. El trabajo abarcó 4 flujos modulares con variantes activables y aproximadamente 40–50 vistas.",
      role: "Desarrollador Frontend — responsabilidad principal del front-end, entrega autónoma por sprint, refactorización incremental y funcionalidades.",
      technologies: [
        "Next.js",
        "GraphQL",
        "Axios",
        "Ant Design",
        "Vercel",
        "JWT",
      ],
      result:
        "Implementé y mantuve flujos transaccionales modulares, componentes personalizados del sistema de diseño y una base front-end más mantenible y estable.",
      challenge:
        "Evolucionar y refactorizar un flujo transaccional regulado y basado en la confianza sin frenar la entrega de funcionalidades.",
      approach: [
        "Resolví de forma autónoma los tickets priorizados de cada sprint y participé en decisiones de front-end para nuevas funcionalidades.",
        "Implementé y mantuve 4 flujos modulares con variantes activables y componentes personalizados conforme al sistema de diseño de la empresa.",
        "Refactoricé la aplicación con foco en legibilidad, mantenibilidad, carga inicial y estabilidad.",
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
      visualLabel: "Captura de la página pública de transferencia vehicular",
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
