import { create } from "zustand";

import QuizAPI from "../services/main";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  quiz: [],
  detailQuiz: {},
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
  getDetail: async (id) => {
    try {
      set({ loading: true });

      const detailQuiz = await QuizAPI.getQuiz(id);
      set({ detailQuiz });

      set({ loading: false });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    }
  },
  reset: () => set({ quiz: [], detailQuiz: {} }),
}));
