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
        <div className=' flex justify-center'>
        <div className='w-full max-w-[500px] px-4 sm:px-6 lg:px-8 mt-8'>
          <form className='w-full space-y-6'>
            <div>
              <input
                type='text'
                placeholder='Name'
                className='w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none'
                required
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='Username'
                className='w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none'
                required
              />
            </div>
            <div>
              <input
                type='email'
                placeholder='Email'
                className='w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none'
                required
              />
            </div>
            <div>
              <input
                type='password'
                placeholder='Password'
                className='w-80 bg-transparent border-b border-black py-2 outline-none focus:outline-none'
                required
              />
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='w-48 bg-secondary hover:bg-primary transition duration-300 text-white py-3 rounded-md font-semibold text-center'>
                Save
              </button>
            </div>
          </form>
        </div>
        </div>
        
      </Card>
    </div>
  );
};

export default ProfileUser;
