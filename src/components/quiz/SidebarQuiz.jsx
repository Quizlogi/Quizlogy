import React, { useState } from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  IconButton,
} from '@material-tailwind/react';
import { PresentationChartBarIcon, PowerIcon } from '@heroicons/react/24/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export function SidebarQuiz() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const SidebarContent = () => (
    <>
      <div className='mb-2 p-4'>
        <img
          src='/quizlogy-logo-horizontal.png'
          alt='Logo'
          className='h-10 mr-2 object-contain'
        />
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className='h-5 w-5' />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          Sign Out
        </ListItem>
        <button
          className='select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-3 rounded-lg bg-gray-300 text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
          type='button'>
          Create a Quiz
        </button>
      </List>
    </>
  );

  return (
    <>
      <IconButton
        variant='text'
        size='lg'
        onClick={openDrawer}
        className='md:hidden'>
        {' '}
        {isDrawerOpen ? (
          <XMarkIcon className='h-8 w-8 stroke-2' /> 
        ) : (
          <Bars3Icon className='h-8 w-8 stroke-2' />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className='md:hidden'>
        {' '}
        <Card
          color='transparent'
          shadow={false}
          className='h-[calc(100vh-2rem)] w-full p-4'>
          <SidebarContent />
        </Card>
      </Drawer>

      <Card className='hidden md:block md:w-[20rem] lg:w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5 h-screen'>
        <SidebarContent />
      </Card>
    </>
  );
}
