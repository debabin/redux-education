import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

api.interceptors.request.use(async (request) => {
  await (() => new Promise((res) => setTimeout(res, 1000)))();
  return request;
});
