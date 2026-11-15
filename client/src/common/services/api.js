import axios from "axios";

const configuredBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.DEV
    ? "/api"
    : "https://springboot-footbal-web-production.up.railway.app/api");

export const API_BASE_URL = configuredBaseUrl.replace(/\/+$/, "");

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
