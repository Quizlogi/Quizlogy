import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { useStore } from "../../states/auth";

export function AuthLayout() {
  const navigate = useNavigate();

  const { user } = useStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    switch (user?.role?.id) {
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
  }, [user, navigate]);

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}