import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";
import { mockUser } from "@/shared/mocks/user";

export interface IUserData {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: IUserData = {
  currentUser: mockUser,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload };
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, updateUser, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
