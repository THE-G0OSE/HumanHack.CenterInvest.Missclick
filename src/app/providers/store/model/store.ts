import { ReducersMapObject } from "redux";
import { IStore } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user/";
import { projectsReducer } from "@/entities/project/";
import { authApi } from "@/features/auth/api/AuthApi";
import { usersApi } from "@/entities/user/model/usersApi";

const rootReducer: ReducersMapObject<IStore> = {
  user: userReducer,
  projects: projectsReducer,
  AuthApi: authApi.reducer,
  UsersApi: usersApi.reducer,
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware).concat(usersApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
