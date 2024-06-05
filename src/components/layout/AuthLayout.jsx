import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
export function AuthLayout() {
  const navigate = useNavigate();

  const [user] = useAuthCheck();

  switch (user?.role) {
    case 3:
      navigate("/admin");
      return;
    case 2:
      navigate("/penguji");
      return;
    case 1:
      navigate("/dashboard");
      return;
    default:
  }

  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}