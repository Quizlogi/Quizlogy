// src/pages/LoginPage.jsx
import React from 'react';
import { NavbarRegister } from '../components/auth/NavbarRegister';
import {RegisterInput} from '../components/RegisterInput';


const RegisterPage = () => {
    return (
        <div className='bg-[#ECEFF1]'>
            <NavbarRegister />
            <div className='flex justify-center items-center h-screen'>
                <RegisterInput />
            </div>
        </div>
      );
};

export default RegisterPage;
