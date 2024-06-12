import { create } from "zustand";

import CategoryAPI from "../services/admin";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  categories: [],
  loading: false,
  error: false,
  fetchCategories: async () => {
    set({ loading: true });
    const categories = await CategoryAPI.getCategories();
    set({ categories, loading: false });
  },
  createCategory: async (data) => {
    set({ loading: true });
    const category = await CategoryAPI.createCategory(data);
    if (category.error) {
      set({ loading: false });

      toast.error(category.error.message);
      return;
    }

    set((state) => ({
      categories: [...state.categories, category],
      loading: false,
    }));

    toast.success("Category created successfully");
  },
  updateCategory: async (id, data) => {
    set({ loading: true });
    const category = await CategoryAPI.updateCategory(id, data);
    if (category.error) {
      set({ loading: false });

      toast.error(category.error.message);
      return;
    }

    set((state) => ({
      categories: state.categories.map((item) =>
        item.id === id ? category : item
      ),
      loading: false,
    }));

    toast.success("Category updated successfully");
  },
  removeCategory: async (id) => {
    set({ loading: true });
    const category = await CategoryAPI.deleteCategory(id);
    if (category.error) {
      set({ loading: false });

      toast.error(category.error.message);
      return;
    }

    set((state) => ({
      categories: state.categories.filter((item) => item.id !== id),
      loading: false,
    }));

    toast.success("Category deleted successfully");
  },
  reset: () => set({ categories: [], loading: false, error: false }),
}));
