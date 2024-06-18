import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavbarMain } from '../navbar/NavbarMain';
import { LogoFooter } from "../landing/LogoFooter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useStore } from "../../states/auth";

export function MainLayout() {
  const navigate = useNavigate();

  const { user } = useStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    if (user?.role?.id === 3) {
      navigate("/admin");
    } else if (user?.role?.id === 2) {
      navigate("/penguji");
    }
  }, [user, navigate]);
  return (
    <div
      className="h-full"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavbarMain />

      <main style={{ flex: 1 }}>
        <Outlet />
        <ScrollRestoration />
      </main>

      <LogoFooter />
    </div>
  );
}