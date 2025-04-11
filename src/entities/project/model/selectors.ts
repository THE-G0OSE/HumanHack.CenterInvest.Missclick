import { RootState } from "@/app/providers/store";
import { ProjectItem } from "./types";

export const selectAllProjects = (state: RootState) => state.projects.items;
export const selectFeaturedProjects = (state: RootState) =>
  state.projects.items.filter((project: ProjectItem) => project.featured);
export const selectLatestProjects = (state: RootState) =>
  state.projects.items.slice(0, 6);
export const selectProjectById = (id: string) => (state: RootState) =>
  state.projects.items.find((project: ProjectItem) => project.id === id);
