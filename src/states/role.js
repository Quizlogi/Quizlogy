import { create } from "zustand";

import RoleAPI from "../services/admin";
import toast from "react-hot-toast";

export const useStore = create((set) => ({
  roles: [],
  loading: false,
  error: false,
  fetchRoles: async () => {
    set({ loading: true });
    const roles = await RoleAPI.getRoles();
    set({ roles, loading: false });
  },
  updateRole: async (id, data) => {
    set({ loading: true });
    const role = await RoleAPI.updateRole(id, data);
    if (role.error) {
      toast.error(role.error.message);

      set({ loading: false });
      return;
    }

    set((state) => ({
      roles: state.roles.map((item) => (item.id === id ? role : item)),
      loading: false,
    }));

    toast.success("Role updated successfully");
  },
}));
