import { create } from "zustand";

import QuizAPI from "../services/main";
import InstructureAPI from "../services/penguji";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  quiz: [],
  loading: false,
  getDiscovery: async () => {
    try {
      set({ loading: true });

      const quiz = await QuizAPI.getDiscovery();
      set({ quiz });

      set({ loading: false });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    }
  },
  getQuiz: async () => {
    try {
      set({ loading: true });

      const quiz = await InstructureAPI.getQuiz();
      set({ quiz });

      set({ loading: false });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    }
  },
}));
