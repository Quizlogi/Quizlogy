import React, { useState } from 'react';
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TABLE_HEAD = ['No', 'Nama', 'Role', 'Created At', 'Updated At', 'Action'];

const TABS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Monitored',
    value: 'monitored',
  },
  {
    label: 'Unmonitored',
    value: 'unmonitored',
  },
];

const TABLE_ROWS = [
  {
    no: 1,
    name: 'Administrator',
    role: 'Admin',
    createdAt: '23/04/18',
    updatedAt: '23/04/18',
  },
  {
    no: 2,
    name: 'Alexa Liras',
    role: 'Programator',
    createdAt: '23/04/18',
    updatedAt: '23/04/18',
  },
  {
    no: 3,
    name: 'Laurent Perrier',
    role: 'Executive',
    createdAt: '19/09/17',
    updatedAt: '23/04/18',
  },
  {
    no: 4,
    name: 'Michael Levi',
    role: 'Programator',
    createdAt: '24/12/08',
    updatedAt: '23/04/18',
  },
  {
    no: 5,
    name: 'Richard Gran',
    role: 'Manager',
    createdAt: '04/10/21',
    updatedAt: '23/04/18',
  },
];

export function TableAdmin() {
  return (
    <Card className='h-full w-full'>
      <CardHeader floated={false} shadow={false} className='rounded-none'>
        <div className='mb-8 flex items-center justify-between gap-8'>
          <div>
            <Typography variant='h5' color='blue-gray'>
            List User
            </Typography>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button className='flex items-center gap-3' size='sm'>
              <UserPlusIcon strokeWidth={2} className='h-4 w-4' /> Add User
            </Button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <Tabs value='all' className='w-full md:w-max'>
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className='w-full md:w-72'>
            <Input
              label='Search'
              icon={<MagnifyingGlassIcon className='h-5 w-5' />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className='overflow-scroll px-0'>
        <table className='mt-4 w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'>
                    {head}{' '}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ no, name, role, createdAt, updatedAt }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? 'p-4'
                  : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {no}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className='flex items-center gap-3'>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {role}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'>
                        {createdAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal'>
                        {updatedAt}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content='Edit User'>
                        <IconButton variant='text'>
                          <PencilIcon className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content='Delete User'>
                        <IconButton variant='text'>
                          <RiDeleteBin6Line className='h-4 w-4' />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
        <Typography variant='small' color='blue-gray' className='font-normal'>
          Page 1 of 10
        </Typography>
        <div className='flex gap-2'>
          <Button variant='outlined' size='sm'>
            Previous
          </Button>
          <Button variant='outlined' size='sm'>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
