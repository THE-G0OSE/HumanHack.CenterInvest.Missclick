import { baseQuery, fetchQuery } from "@/shared/config/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { ITransaction } from "../types";

export const transactionApi = createApi({
  reducerPath: "TransactionApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    postTransaction: build.mutation<unknown, ITransaction>({
      query: (body) => ({
        url: fetchQuery.post_transaction,
        method: "POST",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: {
          amount: body.amount.toFixed(2),
          project_id: body.project_id,
        },
      }),
    }),
  }),
});

export const { usePostTransactionMutation } = transactionApi;
