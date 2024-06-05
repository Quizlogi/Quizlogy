import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SidebarPenguji } from '../penguji/Sidebar';
import NotFound from '../../pages/404';
import { useStore } from '../../states/authUser/auth';

export function PengujiLayout() {
    const authUser = useStore((state) => state.authUser);
    if (authUser.role !== 2) {
        return (
            <NotFound />
        );
    }
    return (
        <>
            <main>
                <div className='bg-gray-100 flex flex-col md:flex-row h-dvh'>
                    <SidebarPenguji />
                    <Outlet />
                    <ScrollRestoration />
                </div>
            </main>
        </>
    );
}