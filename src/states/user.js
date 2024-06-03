import { create } from "zustand";

import UserAPI from "../services/admin";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  users: [],
  loading: false,
  error: false,
  fetchUsers: async () => {
    set({ loading: true });
    const users = await UserAPI.getUsers();
    set({ users, loading: false });
  },
  createUser: async (data) => {
    try {
      set({ loading: true });
      const user = await UserAPI.createUser(data);
      if (user.error) {
        alert(user.error.message);

        set({ loading: false });
        return;
      }

      set((state) => ({ users: [...state.users, user], loading: false }));
      toast.success("User created successfully");
    } catch (err) {
      toast.error("User creation failed");
    }
  },
  updateUser: async (id, data) => {
    set({ loading: true });
    const user = await UserAPI.updateUser(id, data);
    if (user.error) {
      alert(user.error.message);

      set({ loading: false });
      return;
    }

    set((state) => ({
      users: state.users.map((item) => (item.id === id ? user : item)),
      loading: false,
    }));

    toast.success("User updated successfully");
  },
  removeUser: async (id) => {
    try {
      set({ loading: true });
      await UserAPI.deleteUser(id);
      set((state) => ({
        users: state.users.filter((item) => item.id !== id),
        loading: false,
      }));

      toast.success("User deleted successfully");
    } catch (err) {
      set({ loading: false });
      toast.error("User deletion failed");
    } finally {
      set({ loading: false });
    }
  },
}));
