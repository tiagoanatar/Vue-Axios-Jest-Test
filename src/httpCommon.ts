import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:7000/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;