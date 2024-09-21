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
  GRAPHQL,
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
    AXIOS,
    ANT_DESIGN,
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
    JWT,
  ],
];
