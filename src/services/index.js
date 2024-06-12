import Axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axios = Axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
