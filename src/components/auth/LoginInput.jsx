import propTypes from 'prop-types';

export function LoginInput({
  email,
  setEmail,
  password,
  setPassword,
  onSubmit,
}) {
  return (
    <div className='w-full flex flex-col max-w-[500px]'>
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
        {/* <div className='w-full flex items-center justify-between'>
          <div className='w-full flex items-center'>
            <input type='checkbox' className='w-4 h-4 mr-2' />
            <p className='text-sm'>Remember me</p>
          </div>
          <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>
            Forgot Password?
          </p>
        </div> */}
        <div className='w-full flex flex-col my-4'>
          <button
            type='submit'
            className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
            Log In
          </button>{' '}
          {/* <button
            className='w-full text-[#060606] my-2 font-semibold bg-white border border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer '
            type='submit'>
            Register
          </button> */}
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
