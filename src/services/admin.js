import Axios from "./";
import { getToken } from "../utils/tokenHandler";

const getUsers = async () => {
  try {
    const response = await Axios.get("/admin/users", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getUserById = async (id) => {
  try {
    const response = await Axios.get(`/admin/users/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const createUser = async (data) => {
  try {
    const response = await Axios.post("/admin/users", data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await Axios.put(`/admin/users/${id}`, data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const deleteUser = async (id) => {
  try {
    const response = await Axios.delete(`/admin/users/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getRoles = async () => {
  try {
    const response = await Axios.get("/admin/roles", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

const getRoleById = async (id) => {
  try {
    const response = await Axios.get(`/admin/roles/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    console.log(err);
  }
};

const updateRole = async (id, data) => {
  try {
    const response = await Axios.put(`/admin/roles/${id}`, data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getCategories = async () => {
  try {
    const response = await Axios.get("/admin/category", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const getCategoryById = async (id) => {
  try {
    const response = await Axios.get(`/admin/category/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const createCategory = async (data) => {
  try {
    const response = await Axios.post("/admin/category", data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const updateCategory = async (id, data) => {
  try {
    const response = await Axios.put(`/admin/category/${id}`, data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data.data;
  } catch (err) {
    return { error: err.response.data };
  }
};

const deleteCategory = async (id) => {
  try {
    const response = await Axios.delete(`/admin/category/${id}`, {
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
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getRoles,
  getRoleById,
  updateRole,
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
