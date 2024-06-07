import { create } from "zustand";

export const useStore = create((set) => ({
  authUser: {},
  setAuthUser: (user) => set({ authUser: user }),
}));