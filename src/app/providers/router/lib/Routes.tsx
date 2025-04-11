import {
  Home,
  About,
  Achivments,
  Login,
  MyProjects,
  PasswordReset,
  Project,
  Projects,
  Register,
  Settings,
  Dashboard,
} from "@/pages";
import { RoutePath } from "@/shared/config/route-path/route-path";
import { RouteProps } from "react-router";

export const Routes: RouteProps[] = [
  {
    path: RoutePath.HOME.fullPath,
    element: <Home />,
  },
  {
    path: RoutePath.ABOUT.fullPath,
    element: <About />,
  },
  {
    path: RoutePath.DASHBOARD.fullPath,
    element: <Dashboard />,
  },
  {
    path: RoutePath.PROJECTS.fullPath,
    element: <Projects />,
  },
  {
    path: RoutePath.LOGIN.fullPath,
    element: <Login />,
  },
  {
    path: RoutePath.REGISTER.fullPath,
    element: <Register />,
  },
  {
    path: RoutePath.RESET_PASSWORD.fullPath,
    element: <PasswordReset />,
  },
  {
    path: RoutePath.ACHIVMENTS.fullPath,
    element: <Achivments />,
  },
  {
    path: RoutePath.SETTINGS.fullPath,
    element: <Settings />,
  },
  {
    path: RoutePath.MYPROJECTS.fullPath,
    element: <MyProjects />,
  },
  {
    path: RoutePath.PROJECT_DETAIL.fullPath,
    element: <Project />,
  },
];
