import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

import { useEffect } from "react";

export function AuthLayout() {
  const navigate = useNavigate();

  const [user, loading] = useAuthCheck();

  useEffect(() => {
    if (loading) return;

    switch (user?.role) {
      case 3:
        navigate("/admin");
        break;
      case 2:
        navigate("/penguji");
        break;
      case 1:
        navigate("/dashboard");
        break;
      default:
        break;
    }
  }, [user, navigate, loading]);

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}