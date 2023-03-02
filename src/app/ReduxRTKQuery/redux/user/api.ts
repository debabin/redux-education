import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { api } from "../../utils/api";
import { requestUsers } from "../../utils/requests";

import { User } from "../../utils/types/user";

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: api.defaults.baseURL! }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }: any) => {
    try {
      const response = await api.request({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return response;
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      queryFn: async () => {
        const response = await requestUsers();
        return { data: response.data };
      },
      // query: () => ({ url: "/users", method: "get" }),
      providesTags: ["Users"],
    }),
    addUser: builder.mutation<User, { name: string }>({
      query: ({ name }) => ({ url: "/users", method: "post", data: { name } }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useAddUserMutation, useGetUsersQuery } = userApi;
