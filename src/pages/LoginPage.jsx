import { LoginInput } from '../components/auth/LoginInput';
import { useStore } from '../states/auth';
import useInput from '../hooks/useInput';
import { Toaster } from 'react-hot-toast';
import coverImage from '/cover.jpg';
import quizlogyIcon from '/quizlogy-logo-horizontal.png';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

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
      <Toaster />
      <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
          <div className='absolute top-[20%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-4'>
            Create engaging quizzes effortlessly
            </h1>
            <p className='text-xl text-white font-normal'>
            Join now and inspire learners everywhere</p>
          </div>
 
          <img
            src={coverImage}
            className='w-full h-full object-cover'
            alt='cover'
          />
        </div>
        <div className='w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center'>
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
          <LoginInput
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
