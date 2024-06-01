import { create } from "zustand";

import UserAPI from "../services/admin";

export const useStore = create((set) => ({
  users: [],
  roles: [],
  loading: false,
  error: false,
  fetchUsers: async () => {
    set({ loading: true });
    const users = await UserAPI.getUsers();
    set({ users, loading: false });
  },
  fetchRoles: async () => {
    set({ loading: true });
    const roles = await UserAPI.getRoles();
    set({ roles, loading: false });
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
      alert("User created successfully");
    } catch (err) {
      alert("Failed to create user");
    }
  },
  updateUser: async (id, data) => {
    set({ loading: true });
    await UserAPI.updateUser(id, data);
    set({ loading: false });
  },
}));
