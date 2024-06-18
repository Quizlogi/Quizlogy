import { useNavigate } from "react-router-dom";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SidebarAdmin } from "../admin/SidebarAdmin";

import useAuthCheck from "../../hooks/useAuthCheck";
import { useEffect } from "react";

export function AdminLayout() {
  const navigate = useNavigate();
  const [user] = useAuthCheck();

  useEffect(() => {
    if (user?.role.id === 2) {
      navigate("/penguji");
    } else if (user?.role.id === 1) {
      navigate("/dashboard");
    } else if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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
