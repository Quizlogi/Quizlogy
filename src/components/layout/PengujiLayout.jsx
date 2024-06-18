import { useEffect } from "react";
import { Outlet, ScrollRestoration, useNavigate } from "react-router-dom";

import { SidebarPenguji } from "../penguji/Sidebar";
import { useStore } from "../../states/auth";

export function PengujiLayout() {
  const navigate = useNavigate();

  const { user } = useStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    if (user?.role?.id === 3) {
      navigate("/admin");
    } else if (user?.role?.id === 1) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <>
      <main>
        <div className="bg-gray-100 flex flex-col md:flex-row h-max">
          <SidebarPenguji />
          <Outlet />
          <ScrollRestoration />
        </div>
      </main>
    </>
  );
}
