import { baseQuery, fetchQuery } from "@/shared/config/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { UserResponse } from "./types";

export const usersApi = createApi({
  reducerPath: "UsersApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getME: build.query<UserResponse, string>({
      query: (token) => ({
        url: fetchQuery.get_me,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useGetMEQuery } = usersApi;
