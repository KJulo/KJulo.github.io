import { MONGODB, NODEJS, POSTGRESQL } from "@constants/backendStack";
import {
  JWT,
  NEXTJS,
  REACT,
  TAILWIND,
  TYPESCRIPT,
} from "@constants/frontendStack";
import { AMAZON_WEB_SERVICES_EC2 } from "@constants/othersStack";

export const TECHNOLOGIES = [
  [REACT, TYPESCRIPT, TAILWIND],
  [NEXTJS, TYPESCRIPT, REACT],
  [REACT, JWT, AMAZON_WEB_SERVICES_EC2],
  [REACT, NODEJS, MONGODB, POSTGRESQL],
];
