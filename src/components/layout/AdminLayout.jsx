import { useNavigate } from "react-router-dom";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SidebarAdmin } from "../admin/SidebarAdmin";

import { useEffect } from "react";

import { useStore } from "../../states/auth";

export function AdminLayout() {
  const { user, loading } = useStore((state) => ({
    user: state.user,
    loading: state.loading,
  }));

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;

    if (user?.role?.id === 2) {
      navigate("/penguji");
    } else if (user?.role?.id === 1) {
      navigate("/dashboard");
    }
  }, [user, navigate, loading]);

  return (
    <>
      <main>
        <div className="bg-gray-100 flex flex-col md:flex-row h-dvh">
          <SidebarAdmin />
          <Outlet />
          <ScrollRestoration />
        </div>
      </main>
    </>
  );
}
