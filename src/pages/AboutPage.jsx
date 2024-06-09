import React from 'react';
import { NavbarDefault } from '../components/landing/Navbar';
import AboutQuizlogy from '../components/about/AboutQuizlogy';
import AboutUs from '../components/about/AboutUs';
import { LogoFooter } from '../components/landing/LogoFooter';

export default function AboutPage() {
  return (
    <div className='bg-[#ECEFF1]'>
      <NavbarDefault />
      <AboutQuizlogy />
      <AboutUs />
      <LogoFooter />
    </div>
  );
}
