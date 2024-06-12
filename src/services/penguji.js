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

const updateQuiz = async (id, data) => {
  try {
    const response = await Axios.put(`instructure/quiz/${id}`, data, {
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

const deleteQuiz = async (id) => {
  try {
    const response = await Axios.delete(`instructure/quiz/${id}`, {
      headers: {
        Authorization: getToken(),
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

const createQuestion = async (id, value) => {
  try {
    const response = await Axios.post(
      `instructure/quiz/${id}/question`,
      { question: value },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const updateQuestion = async (id, value) => {
  const url = location.href;
  const quizId = url.split("/").pop();

  try {
    const response = await Axios.put(
      `instructure/quiz/${quizId}/question/${id}`,
      { question: value },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const deleteQuestion = async (id) => {
  try {
    const response = await Axios.delete(`instructure/question/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const createOption = async (questionId, option) => {
  try {
    const response = await Axios.post(
      `instructure/question/${questionId}/option`,
      { option },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const updateOption = async (id, value) => {
  try {
    const response = await Axios.put(
      `instructure/question/${value.question_id}/option/${id}`,
      { ...value },
      {
        headers: {
          Authorization: getToken(),
        },
      }
    );

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const deleteOption = async (id) => {
  try {
    const response = await Axios.delete(`instructure/option/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

export default {
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getCategories,
  getQuestionsByQuizId,
  getQuizById,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  createOption,
  updateOption,
  deleteOption,
};