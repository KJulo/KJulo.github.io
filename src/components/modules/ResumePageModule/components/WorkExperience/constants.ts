import {
  EXPRESSJS,
  MONGODB,
  NODEJS,
  POSTGRESQL,
  PRISMA,
} from "@constants/backendStack";

import {
  ANT_DESIGN,
  APOLLO_CLIENT,
  AXIOS,
  CSS3,
  GRAPHQL,
  HTML5,
  JAVASCRIPT,
  JWT,
  NEXTJS,
  REACT,
  REDUX,
  REDUX_SAGA,
  WEBPACK,
} from "@constants/frontendStack";

import { AMAZON_WEB_SERVICES_EC2, VERCEL } from "@constants/othersStack";

export const TECHNOLOGIES = [
  [NEXTJS, ANT_DESIGN, AXIOS, APOLLO_CLIENT, GRAPHQL, VERCEL, JWT],
  [
    REACT,
    REDUX,
    REDUX_SAGA,
    WEBPACK,
    ANT_DESIGN,
    AXIOS,
    HTML5,
    CSS3,
    JAVASCRIPT,
    NODEJS,
    EXPRESSJS,
    PRISMA,
    MONGODB,
    POSTGRESQL,
    AMAZON_WEB_SERVICES_EC2,
    JWT,
  ],
  [
    REACT,
    WEBPACK,
    ANT_DESIGN,
    AXIOS,
    NODEJS,
    EXPRESSJS,
    MONGODB,
    POSTGRESQL,
    AMAZON_WEB_SERVICES_EC2,
  ],
];
