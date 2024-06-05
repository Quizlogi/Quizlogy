import { useState } from "react";
import { useStore } from "../states/auth";
import { hasToken } from "../utils/tokenHandler";
import { useEffect } from "react";

export default function useAuthCheck() {
  const { user, setUser } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hasToken() && !user) {
      setUser().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user, setUser]);

  return [user, loading];
}
