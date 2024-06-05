import { useNavigate } from "react-router-dom";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SidebarAdmin } from "../admin/SidebarAdmin";

import useAuthCheck from "../../hooks/useAuthCheck";
import { useEffect } from "react";

export function AdminLayout() {
  const navigate = useNavigate();
  const [user, loading] = useAuthCheck();

  useEffect(() => {
    if (loading) return;

    if (user?.role === 3) {
      navigate("/admin");
    } else if (user?.role === 2) {
      navigate("/penguji");
    } else if (user?.role === 1) {
      navigate("/dashboard");
    } else if (!user) {
      navigate("/login");
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
