import { create } from "zustand";

import CategoryAPI from "../services/admin";
import MainAPI from "../services/main";

import toast from "react-hot-toast";

export const useStore = create((set, get) => ({
  categories: [],
  loading: false,
  error: false,
  fetchCategoriesMain: async () => {
    set({ loading: true });

    const categories = await MainAPI.getCategories();

    if (categories.error) {
      toast.error(categories.error.message);

      set({ loading: false });
      return;
    }

    set({ categories, loading: false });
  },
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

    const categories = get().categories;
    set({ categories: [...categories, category], loading: false });

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

    const categories = get().categories;
    const index = categories.findIndex((item) => item.id === id);
    categories[index] = category;

    set({ categories, loading: false });

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
