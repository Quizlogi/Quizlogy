import { useState } from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  IconButton,
  Button,
} from '@material-tailwind/react';
import { PresentationChartBarIcon, PowerIcon } from '@heroicons/react/24/solid';
import { LuFileQuestion } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useStore as useStoreAuth } from "../../states/auth";

export function SidebarPenguji() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { logout } = useStoreAuth((state) => ({
    logout: state.logout,
  }));

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const SidebarContent = () => (
    <>
      <div className='mb-2 p-4 '>
        <img
          src='/quizlogy-logo-horizontal.png'
          alt='Logo'
          className='h-10 mr-2 object-contain'
        />
      </div>
      <List className='gap-2'>
        <Link to='/penguji/dashboard'>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className='h-5 w-5' />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link to='/penguji/quiz'>
          <ListItem>
            <ListItemPrefix>
              <LuFileQuestion className='h-5 w-5' />
            </ListItemPrefix>
            Quiz
          </ListItem>
        </Link>
        <ListItem onClick={logout}>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          Sign Out
        </ListItem>
          <Link to='/penguji/create'>
            <Button className='w-[13rem]'>
              Create Quiz
            </Button>
          </Link> 
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
        {isDrawerOpen ? (
          <XMarkIcon className='h-8 w-8 stroke-2' />
        ) : (
          <Bars3Icon className='h-8 w-8 stroke-2' />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className='md:hidden'>
        <Card
          color='transparent'
          shadow={false}
          className='h-[calc(100vh-2rem)] w-full p-4'>
          <SidebarContent />
        </Card>
      </Drawer>
      <Card className='hidden md:block md:w-[20rem] lg:w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5'>
        <SidebarContent />
      </Card>
    </>
  );
}
