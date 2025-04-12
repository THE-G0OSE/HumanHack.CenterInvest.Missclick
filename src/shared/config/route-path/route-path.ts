import { enumPath, IRoutePath } from "./types";

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.HOME]: {
    path: "/",
    fullPath: "/",
  },
  [enumPath.ABOUT]: {
    name: "О компании",
    path: "/about",
    fullPath: "/about",
  },
  [enumPath.DASHBOARD]: {
    name: "Профиль",
    path: "/dashboard",
    fullPath: "/dashboard",
  },
  [enumPath.ACHIVMENTS]: {
    name: "Достижения",
    path: "/dashboard",
    fullPath: "/dashboard/achivments",
  },
  [enumPath.LOGIN]: {
    name: "Авторизация",
    path: "/auth",
    fullPath: "/auth/login",
  },
  [enumPath.REGISTER]: {
    name: "регистрация",
    path: "/auth",
    fullPath: "/auth/register",
  },
  [enumPath.PROJECTS]: {
    name: "Проекты",
    path: "/projects",
    fullPath: "/projects",
  },
  [enumPath.SETTINGS]: {
    name: "Настройки",
    path: "/dashboard",
    fullPath: "/dashboard/settings",
  },
  [enumPath.MYPROJECTS]: {
    name: "Мои проекты",
    path: "/dashboard",
    fullPath: "/dashboard/projects",
  },
  [enumPath.PROJECT_DETAIL]: {
    name: "Проект",
    path: "/projects",
    fullPath: "/projects/:id",
  },
  [enumPath.RESET_PASSWORD]: {
    name: "Сброс пароля",
    path: "/auth",
    fullPath: "/auth/reset",
  },
  [enumPath.PROJECT_CREATE]: {
    name: "Создание проекта",
    path: "/dashboard",
    fullPath: "/dashboard/projects/create",
  },
};
