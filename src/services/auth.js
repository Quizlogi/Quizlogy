import Axios from "./";
import { setToken } from "../utils/tokenHandler";
import toast from "react-hot-toast";

const login = async ({ email, password }) => {
  try {
    const response = await Axios.post("/login", {
      email,
      password,
    });
    const token = response.data.data.token;
    setToken(token);

    return response.data.data;
  } catch (error) {
    return { error: error.response.data };
  }
};

const register = async ({ name, email, username, password }) => {
  try {
    const response = await Axios.post("/register", {
      name,
      email,
      username,
      password,
    });
    if (response.data) {
      toast.success("Register success! please Login..");
    }
    console.log(response.data);
  } catch (error) {
    console.error("Register Error:", error);
  }
};

export default { login, register };