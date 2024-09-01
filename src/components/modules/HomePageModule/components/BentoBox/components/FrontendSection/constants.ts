//Frontend stack
import NextJs from "@icons/stack/frontend/Nextjs.svg?raw";
import AntDesign from "@icons/stack/frontend/AntDesign.svg?raw";
import Redux from "@icons/stack/frontend/Redux.svg?raw";
import ReduxSaga from "@icons/stack/frontend/ReduxSaga.svg?raw";
import Tailwind from "@icons/stack/frontend/Tailwind.svg?raw";
import Axios from "@icons/stack/frontend/Axios.svg?raw";
import GraphQL from "@icons/stack/frontend/GraphQL.svg?raw";
import ApolloClient from "@icons/stack/frontend/ApolloClient.svg?raw";

export const FRONTEND_STACK: {
  title: string;
  description: string;
  icon: string;
  className: string;
}[] = [
  {
    title: "Next.js",
    description: "React framework for production",
    icon: NextJs,
    className: "dark:fill-white",
  },
  {
    title: "Ant Design",
    description: "React UI library",
    icon: AntDesign,
    className: "",
  },
  {
    title: "Redux",
    description: "State management",
    icon: Redux,
    className: "",
  },
  {
    title: "Redux sagas",
    description: "Side effect model for Redux",
    icon: ReduxSaga,
    className: "",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: Tailwind,
    className: "",
  },
  {
    title: "Axios",
    description: "Promise based HTTP client",
    icon: Axios,
    className: "",
  },
  {
    title: "GraphQL",
    description: "Query language for APIs",
    icon: GraphQL,
    className: "",
  },
  {
    title: "Apollo Client",
    description: "GraphQL client",
    icon: ApolloClient,
    className: "",
  },
];
