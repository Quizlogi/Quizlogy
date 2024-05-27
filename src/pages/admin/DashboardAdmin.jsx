import React from 'react';
import { SidebarAdmin } from '../../components/admin/SidebarAdmin';
import Card from '../../components/Card';
import EditAdmin from '../../components/admin/EditAdmin';

export default function DashboardAdmin() {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
      <SidebarAdmin />
      <div className='flex-grow p-4'>
        <Card />
        <EditAdmin />
      </div>
    </div>
  );
}
