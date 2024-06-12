import { RegisterInput } from "../components/auth/RegisterInput";
import { useStore } from "../states/auth";
import useInput from "../hooks/useInput";
import coverImage from '/cover.jpg';
import quizlogyIcon from '/quizlogy-logo-horizontal.png';
import { Link } from 'react-router-dom';

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
    <div className='w-full h-screen flex flex-col md:flex-row items-start'>
        <div className='relative w-full md:w-1/2 md:h-full flex flex-col'>
          <div className='absolute top-[20%] left-[10%] flex flex-col md:block'>
            <h1 className='text-4xl text-white font-bold my-4'>
            Create engaging quizzes effortlessly
            </h1>
            <p className='text-xl text-white font-normal'>
            Join now and inspire learners everywhere</p>
          </div>
 
          <img
            src={coverImage}
            className='w-full h-full object-cover hidden md:block'
            alt='cover'
          />
        </div>
        <div className='w-full md:w-1/2 h-full bg-[#F5F5F5] flex flex-col p-8 md:p-10 justify-between items-center sm:p-4 sm:items-start'>
          {/* <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>
            Quizlogy
          </h1> */}
          <Link to="/">
          <img
            src={quizlogyIcon}
            alt="Quizlogy Icon"
            className='w-full max-w-[130px] mx-auto text-xl mr-auto' 
          />
          </Link>
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