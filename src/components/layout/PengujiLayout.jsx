import { Outlet, ScrollRestoration } from 'react-router-dom';
import { SidebarPenguji } from '../penguji/Sidebar';

export function PengujiLayout() {
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