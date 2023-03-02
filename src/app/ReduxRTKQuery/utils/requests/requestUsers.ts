import { AxiosRequestConfig } from "axios";
import { api } from "../api";
import { User } from "../types/user";

interface RequestUserByIdParams {
  config?: AxiosRequestConfig;
}

export const requestUsers = ({ config }: RequestUserByIdParams = {}) => {
  return api.get<User[]>(`/users`, { ...config });
};
