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

const getQuizById = async (id) => {
  try {
    const response = await Axios.get(`instructure/quiz/${id}`, {
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
        "Content-Type": "multipart/form-data",
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
    const response = await Axios.get("/instructure/category", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getQuestionsByQuizId = async (id) => {
  try {
    const response = await Axios.get(`/instructure/quiz/${id}/question`, {
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
  getQuestionsByQuizId,
  getQuizById,
};