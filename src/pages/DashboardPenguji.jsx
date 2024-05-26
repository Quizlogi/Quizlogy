import React from 'react';
import { Sidebar } from '../components/Sidebar';
import Card from '../components/Card';
import Edit from '../components/Edit';

export default function DashboardPenguji() {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
        <Sidebar />
        <div className='flex-grow p-4'>
            <Card />
            <Edit />
        </div>
    </div>
  );
}
