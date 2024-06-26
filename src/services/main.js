import Axios from "./";

import { getToken } from "../utils/tokenHandler";

const me = async () => {
  try {
    const response = await Axios.get("me", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const updateMe = async ({ name, email, username, password }) => {
  // make password is optional
  const data = { name, email, username };
  if (password) data.password = password;

  try {
    const response = await Axios.put("me", data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getDiscovery = async () => {
  try {
    const response = await Axios.get("quiz/discovery", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const search = async (query) => {
  try {
    const response = await Axios.get(`quiz/search?query=${query}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getHistoryQuiz = async () => {
  try {
    const response = await Axios.get("quiz/history", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getQuiz = async (id) => {
  try {
    const response = await Axios.get(`quiz/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
}

const getCategories = async () => {
  try {
    const response = await Axios.get("quiz/category", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getQuizByCategory = async (id) => {
  try {
    const response = await Axios.get(`quiz/category/${id}`, {
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
  me,
  getDiscovery,
  getQuiz,
  search,
  getHistoryQuiz,
  getCategories,
  getQuizByCategory,
  updateMe,
};
