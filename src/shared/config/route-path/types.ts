export interface IRoutePath {
  name?: string;
  path: string;
  fullPath: string;
}

export enum enumPath {
  HOME = "HOME",
  ABOUT = "ABOUT",
  DASHBOARD = "DASHBOARD",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  ACHIVMENTS = "ACHIVMENTS",
  PROJECTS = "PROJECTS",
  SETTINGS = "SETTINGS",
  MYPROJECTS = "MYPROJECTS",
  PROJECT_DETAIL = "PROJECT_DETAIL",
  PROJECT_CREATE = "PROJECT_CREATE",
}
