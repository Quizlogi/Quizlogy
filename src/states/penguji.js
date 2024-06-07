import { create } from "zustand";

import PengujiAPI from "../services/penguji";

export const useInstructureStore = create((set) => ({
  category: [],
  loading: false,
  getCategory: async () => {
    set({ loading: true });

    const category = await PengujiAPI.getCategories();
    set({ category });

    set({ loading: false });
  }
}));