import { useStore } from "../states/auth";
import { hasToken } from "../utils/tokenHandler";
import { useEffect } from "react";

export default function useAuthCheck() {
  const { user, setUser, setLoading, loading } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    loading: state.loading,
    setLoading: state.setLoading,
  }));

  useEffect(() => {
    if (hasToken() && !user) {
      setUser();
    } else if (hasToken() && user) {
      setLoading(false);
    } else {
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== "/register"
      )
        window.location.href = "/login";
    }
  }, [user, setUser, setLoading]);

  return [user, loading];
}
