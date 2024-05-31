import { Outlet, ScrollRestoration } from 'react-router-dom';

export function AuthLayout() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    );
}