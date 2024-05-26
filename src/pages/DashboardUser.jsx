import React from 'react';
import ImageCard from '../components/ImageCard';
import { NavbarDefault } from '../components/Navbar';
import { Card, Typography } from '@material-tailwind/react';
import { OriginalCard } from '../components/OriginalCard';
import { LogoFooter } from '../components/LogoFooter';

export default function DashboardUser() {
  return (
    <>
      <NavbarDefault />
      <div className='mx-auto my-12 max-w-[1006px] bg-[#ECEFF1]'>
        <div>
          <OriginalCard />
        </div>
        <div className="mx-auto my-12 max-w-[1006px]">
          <Typography color='black' variant="h4" className="mb-2">
            Quiz Populer
          </Typography>
          <div className='flex flex-wrap gap-4'>
            <ImageCard />
            <ImageCard />
            <ImageCard />
          </div>
        </div>
      </div>
      <LogoFooter />
    </>
  );
}