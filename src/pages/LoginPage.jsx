import { LoginInput } from "../components/auth/LoginInput";
import { NavbarAuth } from "../components/navbar/NavbarAuth";

import { useStore } from "../states/auth";
import useInput from "../hooks/useInput";

const LoginPage = () => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const { login } = useStore((state) => ({
    user: state.user,
    login: state.login,
  }));

  const onSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <>
      <div className="bg-[#ECEFF1] h-screen overflow-hidden flex items-center justify-center">
        <NavbarAuth type="login" />
        <LoginInput
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default LoginPage;
