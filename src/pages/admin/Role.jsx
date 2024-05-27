import React from 'react';
import { SidebarAdmin } from '../../components/admin/SidebarAdmin';
import { TableRole } from '../../components/admin/TableRole';

export default function Role() {
  return (
    <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
      <SidebarAdmin />
      <div className='flex-grow p-4'>
        <TableRole />
      </div>
    </div>
  );
}
