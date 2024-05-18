import React from 'react';
import { NavbarLogin } from '../components/auth/NavbarLogin';
import {LoginInput} from '../components/LoginInput';

const LoginPage = () => {
  return (
    <div className='bg-[#ECEFF1]'>
      <NavbarLogin />
      <div className='flex justify-center items-center h-screen'>
        <LoginInput />
      </div>
    </div>
  );
};

export default LoginPage;
