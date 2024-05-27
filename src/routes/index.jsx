import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';

import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPenguji from '../pages/DashboardPenguji';
import DashboardUser from '../pages/DashboardUser';
import QuizPage from '../pages/QuizPage';
import DashboardAdmin from '../pages/DashboardAdmin';
import Error500 from '../pages/500';
import Error404 from '../pages/404';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'dashboard/',
        element: <DashboardUser />,
      },
      {
        path: 'quizpage',
        element: <QuizPage />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AppLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'dashboardadmin',
        element: <DashboardAdmin />,
      },
    ],
  },
  {
    path: '/penguji',
    element: <AppLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'dashboarpenguji',
        element: <DashboardPenguji />,
      },
      {
        path: 'quizpage',
        element: <QuizPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  // not found
  {
    path: '*',
    element: <Error404 />,
  },
]);

export default routes;
