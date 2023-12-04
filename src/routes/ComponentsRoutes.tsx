import Loadable from "components/loadable/Loadable";
import { lazy } from "react";

const Main = Loadable(lazy(() => import("../pages/index")));
const Quiz = Loadable(lazy(() => import("../pages/quiz/index")));
const Complete = Loadable(lazy(() => import("../pages/complete/index")));

const ComponentsRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "quiz",
      element: <Quiz />,
    },
    {
      path: "complete",
      element: <Complete />,
    },
  ],
};
export default ComponentsRoutes;
