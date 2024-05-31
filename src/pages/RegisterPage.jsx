import { NavbarAuth } from "../components/navbar/NavbarAuth";
import { RegisterInput } from "../components/auth/RegisterInput";

const RegisterPage = () => {
  return (
    <div className="bg-[#ECEFF1] h-screen overflow-hidden">
      <NavbarAuth type="register" />
      <div className="flex justify-center items-center h-full">
        <RegisterInput />
      </div>
    </div>
  );
};

export default RegisterPage;
