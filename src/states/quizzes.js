import { create } from "zustand";

import QuizAPI from "../services/main";
import InstructureAPI from "../services/penguji";
import toast from "react-hot-toast";

export const useStore = create((set, get) => ({
  quiz: [],
  loading: false,
  getDiscovery: async () => {
    try {
      set({ loading: true });

      const quiz = await QuizAPI.getDiscovery();
      set({ quiz });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  getQuizByCategory: async (id) => {
    try {
      get().reset();

      set({ loading: true });

      const data = await QuizAPI.getQuizByCategory(id);
      set({ quiz: data.quiz });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  getQuiz: async () => {
    try {
      set({ loading: true });

      const quiz = await InstructureAPI.getQuiz();
      set({ quiz });
    } catch (error) {
      toast.error("Failed to fetch quiz");
      set({ loading: false });
    } finally {
      set({ loading: false });
    }
  },
  deleteQuiz: async (id) => {
    try {
      set({ loading: true });

      await InstructureAPI.deleteQuiz(id);

      const quiz = get().quiz.filter((q) => q.id !== id);
      set({ quiz });

      toast.success("Quiz deleted");

      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      toast.error("Failed to delete quiz");
    }
  },
  reset: () => set({ quiz: [] }),
}));
