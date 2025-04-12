import { IProjectsData, projectsSlice } from "@/entities/project/model/slice";
import { IUserData, userSlice } from "@/entities/user/model/slice";
import { usersApi } from "@/entities/user/model/usersApi";
import { authApi } from "@/features/auth/api/AuthApi";

export interface IStore {
  [userSlice.reducerPath]: IUserData;
  [projectsSlice.reducerPath]: IProjectsData;
  [authApi.reducerPath]: ReturnType<typeof authApi.reducer>;
  [usersApi.reducerPath]: ReturnType<typeof usersApi.reducer>;
}
