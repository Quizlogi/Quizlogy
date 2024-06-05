import { useNavigate } from "react-router-dom";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { SidebarAdmin } from "../admin/SidebarAdmin";

import useAuthCheck from "../../hooks/useAuthCheck";

export function AdminLayout() {
  const navigate = useNavigate();
  const [user] = useAuthCheck();

  if (!user) return navigate("/login");
  if (user.role != 3) return navigate("/");

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
