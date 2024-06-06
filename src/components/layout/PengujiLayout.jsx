import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

import { Outlet, ScrollRestoration } from "react-router-dom";
import { SidebarPenguji } from "../penguji/Sidebar";

export function PengujiLayout() {
  const navigate = useNavigate();
  const [user, loading] = useAuthCheck();

  useEffect(() => {
    if (loading) return;

    if (user?.role === 3) {
      navigate("/admin");
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
          <SidebarPenguji />
          <Outlet />
          <ScrollRestoration />
        </div>
      </main>
    </>
  );
}
