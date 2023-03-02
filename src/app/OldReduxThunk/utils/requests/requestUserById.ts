import { AxiosRequestConfig } from "axios";
import { api } from "../api";
import { User } from "../types/user";

interface RequestUserByIdParams {
  params: { id: number };
  config?: AxiosRequestConfig;
}

export const requestUserById = ({ params, config }: RequestUserByIdParams) => {
  return api.get<User>(`/users/${params.id}`, { ...config });
};
