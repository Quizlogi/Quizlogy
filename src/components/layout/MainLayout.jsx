import { Outlet, ScrollRestoration } from 'react-router-dom';
import { NavbarMain } from '../navbar/NavbarMain';
import { LogoFooter } from '../landing/LogoFooter';

export function MainLayout() {
    return (
        <>
            <NavbarMain />

            <main>
                <Outlet />
                <ScrollRestoration />
            </main>

            <LogoFooter />
        </>
    );
}