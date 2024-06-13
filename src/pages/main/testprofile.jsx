import React from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Avatar } from '@material-tailwind/react';

const ProfileUser = () => {
  return (
    <div className='flex flex-col items-center pt-10 min-h-screen'>
      <Card color='transparent' shadow={false} className='w-full sm:w-auto'>
        <div>
          <Typography variant='h4' color='blue-gray' className='text-center'>
            Profile
          </Typography>
        </div>

        {/* Avatar */}
        <div className='flex justify-center items-center mt-8'>
          <Avatar
            src='https://ui-avatars.com/api/?name=John+Doe'
            alt='avatar'
            size='xxl'
          />
        </div>

        {/* Form */}
        <div className='w-full flex flex-col max-w-[500px] mb-12 md:mb-24 p-4 md:p-0 sm:max-w-full sm:p-2'>
          <div className='w-full flex flex-col mb-6 md:mb-10 sm:mb-4'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>
              Welcome Back! Please enter your details
            </p>
          </div>
          <form className='w-full flex flex-col mb-6 md:mb-10'>
            <div>
              <input
                type='email'
                placeholder='Email'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                required
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                required
              />
            </div>

            <div className='w-full flex flex-col my-4'>
              <button
                type='submit'
                className='w-full text-white my-2 font-semibold bg-secondary rounded-md p-4 text-center flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer'>
                Log In
              </button>
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
      </Card>
    </div>
  );
};

export default ProfileUser;
