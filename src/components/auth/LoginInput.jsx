import propTypes from 'prop-types';

export function LoginInput({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}) {
  return (
    <div className='w-full flex flex-col max-w-[500px] mb-24'>
      {' '}
      <div className='w-full flex flex-col mb-10'>
        <h3 className='text-3xl font-semibold mb-2'>Login</h3>
        <p className='text-base mb-2'>
          Welcome Back! Please enter your details
        </p>
      </div>
      <form className='w-full flex flex-col mb-10' onSubmit={onSubmit}>
        {' '}
        <div>
          <input
            type='email'
            placeholder='Email'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            value={email}
            onInput={setEmail}
            required
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            value={password}
            onInput={setPassword}
            required
          />
        </div>

        <div className='w-full flex flex-col my-4'>
          <button
            type='submit'
            className='w-full text-white my-2 font-semibold bg-secondary rounded-md p-4 text-center flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer'>
            Log In
          </button>{' '}
        </div>
      </form>
      <div className='w-full flex items-center justify-center'>
        <p className='text-sm font-normal text-[#060606]'>
          Don't have an account?{' '}
          <a
            href='/register'
            className='font-semibold underline underline-offset-2 cursor-pointer'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

LoginInput.propTypes = {
  email: propTypes.string.isRequired,
  setEmail: propTypes.func.isRequired,
  password: propTypes.string.isRequired,
  setPassword: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
};
