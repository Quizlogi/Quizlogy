import { create } from "zustand";

import UserAPI from "../services/main";
import AuthAPI from "../services/auth";
import toast from "react-hot-toast";
import { removeToken } from "../utils/tokenHandler";

import { useStore as useStoreCategory } from "./category";
import { useStore as useStoreMain } from "./main";
import { useStore as useStoreQuiz } from "./quiz";
import { useStore as useStoreQuizzes } from "./quizzes";
import { useStore as useStoreRole } from "./role";
import { useStore as useStoreUser } from "./user";

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
  register: async (name, email, username, password) => {
    const user = await AuthAPI.register(name, email, username, password);
    if (user.error) {
      return toast.error(user.error.message);
    }
  },
  logout: async () => {
    set({ user: null });

    useStoreCategory.getState().reset();
    useStoreMain.getState().reset();
    useStoreQuiz.getState().reset();
    useStoreQuizzes.getState().reset();
    useStoreRole.getState().reset();
    useStoreUser.getState().reset();

    removeToken();
    toast.success("Logout success!");
  },
  reset: () => set({ user: null }),
}));
