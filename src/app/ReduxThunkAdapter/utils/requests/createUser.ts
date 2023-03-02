import { AxiosRequestConfig } from "axios";
import { api } from "../api";
import { User } from "../types/user";

interface RequestUserByIdParams {
  params: { name: string };
  config?: AxiosRequestConfig;
}

export const createUser = ({ params, config }: RequestUserByIdParams) => {
  return api.post<User>(`/users`, params, { ...config });
};
