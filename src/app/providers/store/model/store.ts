import { ReducersMapObject } from "redux";
import { IStore } from "./types";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/entities/user/";
import { projectsReducer } from "@/entities/project/";
import { authApi } from "@/features/auth/api/AuthApi";
import { usersApi } from "@/entities/user/model/usersApi";
import { projectsApi } from "@/entities/project/model/api/projectsApi";
import { transactionApi } from "@/entities/transaction/model/api/transactionApi";

const rootReducer: ReducersMapObject<IStore> = {
  user: userReducer,
  projects: projectsReducer,
  AuthApi: authApi.reducer,
  UsersApi: usersApi.reducer,
  projectsApi: projectsApi.reducer,
  TransactionApi: transactionApi.reducer,
};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(usersApi.middleware)
        .concat(projectsApi.middleware)
        .concat(transactionApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
