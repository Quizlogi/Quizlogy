import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavbarMain } from '../navbar/NavbarMain';
import { LogoFooter } from "../landing/LogoFooter";
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useEffect } from "react";
export function MainLayout() {
  const navigate = useNavigate();
  const [user, loading] = useAuthCheck();

  useEffect(() => {
    if (loading) return;

    if (user?.role === 3) {
      navigate("/admin");
    } else if (user?.role === 2) {
      navigate("/penguji");
    } else if (!user) {
      navigate("/login");
    }
  }, [user, navigate, loading]);
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