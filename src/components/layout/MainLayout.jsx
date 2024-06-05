import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavbarMain } from '../navbar/NavbarMain';
import { LogoFooter } from '../landing/LogoFooter';

import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

export function MainLayout() {
  const navigate = useNavigate();
  const [user] = useAuthCheck();

  if (!user) return navigate("/login");
  return (
    <>
      <NavbarMain />

      <main>
        <Outlet />
        <ScrollRestoration />
      </main>

      <LogoFooter />
    </>
  );
}