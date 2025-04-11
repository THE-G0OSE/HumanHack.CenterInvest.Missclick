import { ReducersMapObject } from "redux";
import { IStore } from "./types";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer: ReducersMapObject<IStore> = {};

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type AppStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']