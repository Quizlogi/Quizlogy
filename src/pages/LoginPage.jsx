import React from 'react';
import { NavbarLogin } from '../components/auth/NavbarLogin';
import {LoginInput} from '../components/LoginInput';

const LoginPage = () => {
  return (
    <div className='bg-[#ECEFF1] h-screen overflow-hidden'>
      <NavbarLogin className='fixed postition'/>
      <div className='flex justify-center items-center h-full'>
        <LoginInput />
      </div>
    </div>
  );
};

export default LoginPage;
