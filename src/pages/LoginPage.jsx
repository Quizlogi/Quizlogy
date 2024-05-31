import { LoginInput } from "../components/auth/LoginInput";
import { NavbarAuth } from "../components/navbar/NavbarAuth";

const LoginPage = () => {
  return (
    <>
      <div className="bg-[#ECEFF1] h-screen overflow-hidden flex items-center justify-center">
        <NavbarAuth type="login" />
        <LoginInput />
      </div>
    </>
  );
};

export default LoginPage;
