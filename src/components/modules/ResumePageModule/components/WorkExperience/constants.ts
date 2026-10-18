import { EXPRESSJS, NODEJS, PRISMA } from "@constants/backendStack";
import {
  ANT_DESIGN,
  AXIOS,
  AWS_AMPLIFY,
  FLOWBITE,
  GRAPHQL,
  I18N,
  JWT,
  NEXTJS,
  REACT,
  REDUX,
  REDUX_SAGA,
  SENTRY,
  TAILWIND,
  TYPESCRIPT,
  WEBPACK,
  ZOD,
} from "@constants/frontendStack";
import { AMAZON_WEB_SERVICES_EC2, VERCEL } from "@constants/othersStack";

export const TECHNOLOGIES = [
  [
    REACT,
    TYPESCRIPT,
    ZOD,
    AXIOS,
    REDUX,
    AWS_AMPLIFY,
    FLOWBITE,
    TAILWIND,
    SENTRY,
    I18N,
  ],
  [NEXTJS, GRAPHQL, AXIOS, ANT_DESIGN, VERCEL, JWT],
  [
    REACT,
    REDUX,
    REDUX_SAGA,
    WEBPACK,
    AXIOS,
    ANT_DESIGN,
    EXPRESSJS,
    PRISMA,
    JWT,
    AMAZON_WEB_SERVICES_EC2,
  ],
  [NODEJS, EXPRESSJS],
];
