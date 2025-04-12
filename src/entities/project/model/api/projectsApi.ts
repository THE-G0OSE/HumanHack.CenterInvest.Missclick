import { baseQuery, fetchQuery } from "@/shared/config/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IGetProjectResponse,
  IGetProjectsResponse,
  IPatchProjectResponse,
  IPostProjectResponse,
} from "./response-types";
import { IPatchProject, IPostProject } from "./request-types";

const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getProjects: builder.query<IGetProjectsResponse, unknown>({
      query: () => ({
        url: fetchQuery.get_projects,
        method: "GET",
      }),
    }),
    getProject: builder.query<IGetProjectResponse, number>({
      query: (id) => ({
        url: fetchQuery.get_project + id,
        method: "GET",
      }),
    }),
    postProject: builder.mutation<IPostProjectResponse, IPostProject>({
      query: (body) => ({
        url: fetchQuery.post_project,
        method: "POST",
        body,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    updateProject: builder.mutation<IPatchProjectResponse, IPatchProject>({
      query: (body) => ({
        url: fetchQuery.patch_project + body.id,
        method: "PATCH",
        body,
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }),
    }),
    deleteProject: builder.mutation<unknown, number>({
        query: (id) => ({
            url: fetchQuery.delete_project + id,
            method: 'DELETE'
        })
    })
  }),
});
