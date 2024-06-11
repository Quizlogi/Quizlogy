import { create } from "zustand";

import PengujiAPI from "../services/penguji";

export const useStore = create((set, get) => ({
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
  updateQuiz: async (id, quiz) => {
    set({ loading: true });

    const data = new FormData();

    const q = {
      title: quiz.title,
      description: quiz.description,
      category_id: quiz.category,
    };

    data.append("quiz", JSON.stringify(q));
    data.append("image", quiz.image);

    const updatedQuiz = await PengujiAPI.updateQuiz(id, data);

    set({ quiz: updatedQuiz });

    set({ loading: false });
  },
  getQuizById: async (id) => {
    set({ loading: true });

    const quiz = await PengujiAPI.getQuizById(id);

    set({ quiz: quiz, questions: quiz.questions });

    set({ loading: false });
  },

  getQuestionsByQuizId: async (id) => {
    set({ loading: true });

    const questions = await PengujiAPI.getQuestionsByQuizId(id);
    set({ questions });

    set({ loading: false });
  },
  createQuestion: async (quizId, question) => {
    set({ loading: true });

    const createdQuestion = await PengujiAPI.createQuestion(quizId, question);

    // get the current questions state
    const questions = get().questions;

    createdQuestion.options = [];

    // add the new question to the state
    set({ questions: [...questions, createdQuestion] });

    set({ loading: false });
  },
  updateQuestion: async (id, value) => {
    set({ loading: true });

    await PengujiAPI.updateQuestion(id, value);

    // get the current questions state
    const questions = get().questions;

    // update the question
    const updatedQuestions = questions.map((question) => {
      if (question.id === id) {
        return { ...question, question: value };
      }

      return question;
    });

    set({ questions: updatedQuestions });

    set({ loading: false });
  },
  deleteQuestion: async (id) => {
    set({ loading: true });

    await PengujiAPI.deleteQuestion(id);

    // get the current questions state
    const questions = get().questions;

    // remove the question
    const updatedQuestions = questions.filter((question) => question.id !== id);

    set({ questions: updatedQuestions });

    set({ loading: false });
  },
  createOption: async (questionId, option) => {
    set({ loading: true });

    const createdOption = await PengujiAPI.createOption(questionId, option);

    // get the current questions state
    const questions = get().questions;

    // update the question
    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return { ...question, options: [...question.options, createdOption] };
      }

      return question;
    });

    set({ questions: updatedQuestions });

    set({ loading: false });
  },
  updateOption: async (id, value) => {
    set({ loading: true });

    await PengujiAPI.updateOption(id, value);

    // get the current questions state
    const questions = get().questions;

    // update the question
    const updatedQuestions = questions.map((question) => {
      const options = question.options.map((option) => {
        if (option.id === id) {
          return { ...option, ...value };
        }

        return { ...option, is_correct: false };
      });

      return { ...question, options };
    });

    set({ questions: updatedQuestions });

    set({ loading: false });
  },
  deleteOption: async (id) => {
    set({ loading: true });

    await PengujiAPI.deleteOption(id);

    // get the current questions state
    const questions = get().questions;

    // update the question
    const updatedQuestions = questions.map((question) => {
      const options = question.options.filter((option) => option.id !== id);

      return { ...question, options };
    });

    set({ questions: updatedQuestions });

    set({ loading: false });
  },
}));
    
