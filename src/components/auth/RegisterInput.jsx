import { Toaster } from 'react-hot-toast';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function RegisterInput({
  name,
  setName,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}) {
  return (
    <>
      <Toaster />
      <div className='w-full flex flex-col max-w-[500px] mb-12 md:mb-24 p-4 md:p-0 sm:max-w-full sm:p-2'>
        {' '}
        <div className='w-full flex flex-col mb-6 md:mb-10 sm:mb-4'>
          <div className='flex flex-col-3 items-center justify-center'>
            <h3 className='text-3xl font-semibold mb-2'>Register</h3>
          </div>
          <div className='flex flex-col-3 items-center justify-center'>
            <p className='text-base mb-2'>
              Welcome Back! Please enter your details
            </p>
          </div>
        </div>
        <form className='flex flex-col mb-6 md:mb-10' onSubmit={onSubmit}>
          {' '}
          <div></div>
          <div className='flex flex-col-3 items-center justify-center'>
            <input
              type='name'
              placeholder='Name'
              className='w-96 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              value={name}
              onInput={setName}
              required
            />
          </div>
          <div className='flex flex-col-3  items-center justify-center'>
            <input
              type='email'
              placeholder='Email'
              className='w-96 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              value={email}
              onInput={setEmail}
              required
            />
          </div>
          <div className='flex flex-col-3  items-center justify-center'>
            <input
              type='username'
              placeholder='Username'
              className='w-96 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              value={username}
              onInput={setUsername}
              required
            />
          </div>
          <div className='flex flex-col-3  items-center justify-center'>
            <input
              type='password'
              placeholder='Password'
              className='w-96 text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              value={password}
              onInput={setPassword}
              required
            />
          </div>
          <div className='flex flex-col-3 my-4 items-center justify-center'>
            <button
              type='submit'
              className='w-64 text-white my-8 font-semibold bg-secondary rounded-md p-4 text-center flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer'>
              Sign up
            </button>{' '}
          </div>
        </form>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>
            Already have an account?{' '}
            <a
              href='/login'
              className='font-semibold underline underline-offset-2 cursor-pointer'>
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

RegisterInput.propTypes = {
  name: propTypes.string.isRequired,
  setName: propTypes.func.isRequired,
  username: propTypes.string.isRequired,
  setUsername: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  setEmail: propTypes.func.isRequired,
  password: propTypes.string.isRequired,
  setPassword: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};
