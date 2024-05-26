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
      <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
        <div className='mb-2 p-4 '>
          <img src="/quizlogy-logo-horizontal.png" alt="Logo" className='h-10 mr-2 object-contain' />
          {/* <Typography variant='h5' color='blue-gray'>
            Sidebar
          </Typography> */}
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
        </List>
      </Card>
    );
  }
  