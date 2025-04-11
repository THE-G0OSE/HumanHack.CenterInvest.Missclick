import { IProjectsData, projectsSlice } from "@/entities/project/model/slice";
import { IUserData, userSlice } from "@/entities/user/model/slice";

export interface IStore {
  [userSlice.reducerPath]: IUserData;
  [projectsSlice.reducerPath]: IProjectsData;
}