import { useStore } from "../states/auth";
import { useEffect } from "react";
import { hasToken } from "../utils/tokenHandler";

export default function useAuthCheck() {
  const { user, setUser } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  useEffect(() => {
    if (hasToken) {
      setUser();
    } else {
      setUser(null);
    }
  }, [setUser]);

  return [user, setUser];
}
