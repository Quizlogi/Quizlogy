import { create } from "zustand";

import SessionAPI from "../services/quizSession";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  quizSession: {},
  loading: false,
  getQuizSession: async (id) => {
    try {
      set({ loading: true });

      const quizSession = await SessionAPI.getQuizSession(id);
      if(quizSession.error) {
        toast.error(quizSession.error);
        return;
      }
      set({ quizSession });

      set({ loading: false });
      return quizSession;
    } catch (error) {
      toast.error("Failed to fetch quiz session");
      set({ loading: false });
    }
  },
  createQuizSession: async (quizId) => {
    try {
      set({ loading: true });
      
      const response = await SessionAPI.createQuizSession(quizId);
      
      set({ loading: false });
      return response;
    } catch (error) {
      toast.error("Failed to create quiz session");
      set({ loading: false });
    }
  },
  getQuizSessionById: async (sessionId, quizId) => {
    try {
      set({ loading: true });

      const quizSession = await SessionAPI.getSessionById(sessionId, quizId);
      set({ quizSession });
      console.log(quizSession);

      set({ loading: false });
    } catch (error) {
      toast.error("Failed to fetch quiz session");
      set({ loading: false });
    }
  },
}));