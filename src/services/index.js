import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://quiz-dev.mengkodingkan.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
