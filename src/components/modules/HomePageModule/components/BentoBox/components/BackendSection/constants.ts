//Backend stack
import NodeJs from "@icons/stack/backend/Nodejs.svg?raw";
import ExpressJs from "@icons/stack/backend/Expressjs.svg?raw";
import Mongodb from "@icons/stack/backend/Mongodb.svg?raw";
import PostgreSQL from "@icons/stack/backend/PostgreSQL.svg?raw";
import Docker from "@icons/stack/backend/Docker.svg?raw";

export const BACKEND_STACK: {
  title: string;
  description: string;
  icon: string;
  className: string;
}[] = [
  {
    title: "Node.js",
    description: "JavaScript runtime",
    icon: NodeJs,
    className: "",
  },
  {
    title: "Express",
    description: "Node.js framework",
    icon: ExpressJs,
    className: "fill-white",
  },
  {
    title: "MongoDB",
    description: "NoSQL database",
    icon: Mongodb,
    className: "",
  },
  {
    title: "PostgreSQL",
    description: "Relational database",
    icon: PostgreSQL,
    className: "",
  },
  {
    title: "Docker",
    description: "Containerization platform",
    icon: Docker,
    className: "",
  },
];
