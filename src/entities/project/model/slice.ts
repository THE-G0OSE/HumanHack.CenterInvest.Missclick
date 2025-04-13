import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project, ProjectItem } from "./types";

export interface IProjectsData {
  items: ProjectItem[];
  loading: boolean;
  error: string | null;
}

const initialState: IProjectsData = {
  items: [],
  loading: false,
  error: null,
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.items = action.payload;
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.items.push(action.payload);
    },
    updateProject: (state, action: PayloadAction<Project>) => {
      const index = state.items.findIndex(
        (project) => project.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteProject: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { setProjects, addProject, updateProject, deleteProject } =
  projectsSlice.actions;

export const projectsReducer = projectsSlice.reducer;
