import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SidebarAdmin } from '../admin/SidebarAdmin';

export function AdminLayout() { 
    return (
        <> 
            <main>
                <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
                    <SidebarAdmin />
                    <Outlet />
                    <ScrollRestoration />
                </div>
            </main>
        </>
    );
}