import { NavbarAuth } from "../components/navbar/NavbarAuth";
import { RegisterInput } from "../components/auth/RegisterInput";
import { useStore } from "../states/auth";
import useInput from "../hooks/useInput";

const RegisterPage = () => {
  const [name, setName] = useInput("");
  const [username, setUsername] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const { register } = useStore((state) => ({
    user: state.user,
    register: state.register,
  }));

  const onSubmit = async (e) => {
    e.preventDefault();

    await register({ name, username, email, password });
  }



  return (
    <div className="bg-[#ECEFF1] h-screen overflow-hidden">
      <NavbarAuth type="register" />
      <div className="flex justify-center items-center h-full">
        <RegisterInput
          name={name}
          setName={setName}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
