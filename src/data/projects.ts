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
      title: "A scalable front-end starting point for a new product",
      organization: "Happ · confidential product",
      context:
        "A new product needed an accessible front-end foundation that could grow without fragmenting the interface.",
      role: "Front-end developer — requirements, architecture, and implementation.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Established a reusable component base and a multi-language-ready interface, making new features easier to deliver consistently.",
      challenge:
        "Translate early product requirements into a structure that stayed clear for both the team and future features.",
      approach: [
        "Partnered on requirements and defined a component and file architecture before feature work accelerated.",
        "Implemented shared UI patterns with Flowbite and Tailwind to keep screens aligned with the Figma system.",
        "Added internationalization to keep language expansion from becoming a later rewrite.",
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
      title: "Improving a mature automotive platform without slowing delivery",
      organization: "iCar",
      context:
        "A mature automotive platform needed new capabilities while the front end was being refactored for maintainability.",
      role: "Front-end developer — incremental refactoring and feature delivery.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Ant Design",
      ],
      result:
        "Supported a cleaner, more readable front-end codebase and a steadier path for extending product functionality.",
      challenge:
        "Improve the codebase and make product decisions without putting everyday delivery or production stability at risk.",
      approach: [
        "Contributed to front-end decisions for new functionality and the technical shape of each change.",
        "Refactored incrementally, prioritizing legibility and maintainability around the areas being touched.",
        "Kept production reliability central while collaborating across several company projects.",
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
      title: "A customer-facing chat flow for messages and files",
      organization: "Jumpitt",
      context:
        "Teams needed real-time chat and file exchange that was dependable enough to demonstrate directly to clients.",
      role: "Front-end developer — real-time experience, authentication, and client demos.",
      technologies: ["React", "WebSockets", "OAuth", "Node.js", "Amazon EC2"],
      result:
        "Delivered authenticated real-time messaging and file exchange, then helped explain the product in client demos.",
      challenge:
        "Make a live communication experience feel dependable while connecting front-end interactions to the supporting services.",
      approach: [
        "Implemented WebSocket-based messaging and file sharing for immediate feedback in the interface.",
        "Integrated OAuth login and contributed to the service connection behind the real-time chat.",
        "Presented the product with clients, turning implementation decisions into a clear, usable story.",
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
      title:
        "Un punto de partida escalable para el front-end de un nuevo producto",
      organization: "Happ · producto confidencial",
      context:
        "Un producto nuevo necesitaba una base de front-end accesible, capaz de crecer sin fragmentar la interfaz.",
      role: "Desarrollador Frontend — requisitos, arquitectura e implementación.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Flowbite", "i18n"],
      result:
        "Establecí una base de componentes reutilizables y una interfaz preparada para varios idiomas, facilitando la entrega consistente de nuevas funcionalidades.",
      challenge:
        "Convertir requisitos iniciales de producto en una estructura clara para el equipo y para las funcionalidades futuras.",
      approach: [
        "Participé en el levantamiento de requisitos y definí una arquitectura de archivos y componentes antes de acelerar el desarrollo.",
        "Implementé patrones de UI compartidos con Flowbite y Tailwind para mantener las pantallas alineadas con el sistema de Figma.",
        "Incorporé internacionalización para evitar que la expansión de idiomas se convirtiera en una reescritura posterior.",
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
      title: "Mejorar una plataforma automotriz madura sin frenar la entrega",
      organization: "iCar",
      context:
        "Una plataforma automotriz madura necesitaba nuevas capacidades mientras se refactorizaba el front-end para hacerlo más mantenible.",
      role: "Desarrollador Frontend — refactorización incremental y entrega de funcionalidades.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GraphQL",
        "Apollo Client",
        "Ant Design",
      ],
      result:
        "Contribuí a una base de código de front-end más clara y legible, y a una ruta más estable para extender las funcionalidades del producto.",
      challenge:
        "Mejorar la base de código y tomar decisiones de producto sin poner en riesgo la entrega diaria ni la estabilidad en producción.",
      approach: [
        "Participé en decisiones de front-end para nuevas funcionalidades y en la forma técnica de cada cambio.",
        "Refactoricé de forma incremental, priorizando legibilidad y mantenibilidad en las áreas intervenidas.",
        "Mantuve la confiabilidad en producción como criterio central mientras colaboraba en distintos proyectos de la empresa.",
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
      title: "Un flujo de chat con mensajes y archivos para clientes",
      organization: "Jumpitt",
      context:
        "Los equipos necesitaban chat y envío de archivos en tiempo real, lo bastante confiables para demostrarlos directamente a clientes.",
      role: "Desarrollador Frontend — experiencia en tiempo real, autenticación y demos con clientes.",
      technologies: ["React", "WebSockets", "OAuth", "Node.js", "Amazon EC2"],
      result:
        "Implementé mensajería y envío de archivos en tiempo real con acceso autenticado, y ayudé a explicar el producto en demos con clientes.",
      challenge:
        "Lograr que una experiencia de comunicación en vivo se sintiera confiable, conectando las interacciones de la interfaz con los servicios de soporte.",
      approach: [
        "Implementé mensajería y envío de archivos con WebSockets para dar respuesta inmediata desde la interfaz.",
        "Integré el inicio de sesión con OAuth y contribuí al servicio de conexión del chat en tiempo real.",
        "Presenté el producto a clientes, traduciendo las decisiones de implementación en una historia de uso clara.",
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
