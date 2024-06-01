import Axios from "./";
import { getToken } from "../utils/tokenHandler";

const getUsers = async () => {
  try {
    const response = await Axios.get("/admin/users", {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id) => {
  try {
    const response = await Axios.get(`/admin/users/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (data) => {
  try {
    const response = await Axios.post("/admin/users", data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (id, data) => {
  try {
    const response = await Axios.put(`/admin/users/${id}`, data, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await Axios.delete(`/admin/users/${id}`, {
      headers: {
        Authorization: getToken(),
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
