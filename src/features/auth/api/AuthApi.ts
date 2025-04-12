import { baseQuery, fetchQuery } from "@/shared/config/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  I2FAResponse,
  IEmailCodeResponse,
  IEmailVerificationResponse,
  ILoginResponse,
  IRegisterResponse,
} from "./response-types";
import {
  I2FA,
  IEmailCode,
  IEmailVerification,
  ILogin,
  IRegister,
} from "./request-types";

export const authApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    register: build.mutation<IRegisterResponse, IRegister>({
      query: (body) => ({
        url: fetchQuery.register,
        method: "POST",
        body,
      }),
    }),
    login: build.mutation<ILoginResponse, ILogin>({
      query: (body) => ({
        url: fetchQuery.login,
        method: "POST",
        body,
      }),
    }),
    emailVerification: build.mutation<
      IEmailVerificationResponse,
      IEmailVerification
    >({
      query: (body) => ({
        url: fetchQuery.send_email_code,
        method: "POST",
        body,
      }),
    }),
    emailCode: build.mutation<IEmailCodeResponse, IEmailCode>({
      query: (body) => ({
        url: fetchQuery.verify_email,
        method: "POST",
        body,
      }),
    }),
    verification2FA: build.mutation<I2FAResponse, I2FA>({
      query: (body) => ({
        url: fetchQuery.verify_2fa,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useEmailVerificationMutation,
  useEmailCodeMutation,
  useVerification2FAMutation,
} = authApi;
