import Axios from "./";
import { getToken } from "../utils/tokenHandler";

const getQuiz = async () => {
  try {
    const response = await Axios.get("instructure/quiz", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const createQuiz = async (data) => {
  try {
    const response = await Axios.post("instructure/quiz", data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const getCategories = async () => {
  try {
    const response = await Axios.get('/instructure/category', {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

export default {
  getQuiz,
  createQuiz,
  getCategories,
};