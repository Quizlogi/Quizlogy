import { create } from "zustand";

import PengujiAPI from "../services/penguji";

export const useStore = create((set) => ({
  quiz: [],
  loading: false,
  getDiscovery: async () => {
    set({ loading: true });
    try {
      const response = await PengujiAPI.getDiscovery();
      set({ quiz: response.data });
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
    
