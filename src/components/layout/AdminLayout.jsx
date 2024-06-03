import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SidebarAdmin } from '../admin/SidebarAdmin';
import NotFound  from '../../pages/404';
import { useStore } from '../../states/authUser/auth';

export function AdminLayout() { 
    const authUser = useStore((state) => state.authUser);
    console.log(authUser);
    if (authUser.role !== 3) {
        return (
            <NotFound />
        );
    }
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