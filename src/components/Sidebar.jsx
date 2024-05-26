import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
  } from '@material-tailwind/react';
  import {
    PresentationChartBarIcon,
    PowerIcon,
  } from '@heroicons/react/24/solid';
  
  export function Sidebar() {
    return (
      <Card className='md:w-[20rem] lg:w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5'>
        <div className='mb-2 p-4 '>
          <img src="/quizlogy-logo-horizontal.png" alt="Logo" className='h-10 mr-2 object-contain' />
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
      </Card>
    );
  }
  