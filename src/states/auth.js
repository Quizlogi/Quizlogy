import { create } from "zustand";

import UserAPI from "../services/main";
import AuthAPI from "../services/auth";
import toast from "react-hot-toast";
import { removeToken } from "../utils/tokenHandler";

export const useStore = create((set) => ({
  user: null,
  setUser: async () => {
    try {
      const me = await UserAPI.me();

      if (me.error) {
        if (location.pathname !== "/login" && location.pathname !== "/register")
          return toast.error(me.error.message);
      }

      set({ user: me });
    } catch (error) {
      console.error(error);
    }
  },
  login: async (email, password) => {
    const user = await AuthAPI.login({ email, password });
    if (user.error) {
      return toast.error(user.error.message);
    }

    toast.success("Login success!");
    set({ user });
  },
  logout: async () => {
    set({ user: null });
    removeToken();
    toast.success("Logout success!");
  },
}));
