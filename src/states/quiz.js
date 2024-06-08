import { create } from "zustand";

import PengujiAPI from "../services/penguji";

export const useStore = create((set) => ({
  quiz: {},
  questions: [],
  category: [],
  loading: false,
  getCategory: async () => {
    set({ loading: true });

    const category = await PengujiAPI.getCategories();
    set({ category });

    set({ loading: false });
  },
  createQuiz: async (quiz) => {
    set({ loading: true });

    const data = new FormData();

    const q = {
      title: quiz.title,
      description: quiz.description,
      category_id: quiz.category,
    };

    data.append("quiz", JSON.stringify(q));
    data.append("image", quiz.image);

    const createdQuiz = await PengujiAPI.createQuiz(data);

    set({ quiz: createdQuiz });

    set({ loading: false });

    return createdQuiz;
  },
  getQuizById: async (id) => {
    set({ loading: true });

    const quiz = await PengujiAPI.getQuizById(id);

    set({ quiz, questions: quiz.questions });

    set({ loading: false });
  },

  getQuestionsByQuizId: async (id) => {
    set({ loading: true });

    const questions = await PengujiAPI.getQuestionsByQuizId(id);
    set({ questions });

    set({ loading: false });
  },
}));
    
