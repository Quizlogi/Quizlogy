import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../components/layout/MainLayout";
import { AdminLayout } from "../components/layout/AdminLayout";
import { PengujiLayout } from "../components/layout/PengujiLayout";
import { AuthLayout } from "../components/layout/AuthLayout";

import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import AboutPage from "../pages/AboutPage";

import Error500 from '../pages/500';
import Error404 from '../pages/404';


import DashboardUser from "../pages/main/DashboardUser";
import DetailQuiz from "../pages/main/DetailQuiz";
import CategoryPageUser from "../pages/main/CategoryPage";
import StartQuiz from "../pages/StartQuiz";
import ProfileUser from "../pages/main/ProfileUser";

import DashboardAdmin from "../pages/admin/Dashboard";
import UserPage from "../pages/admin/User";
import RolePage from "../pages/admin/Role";
import CategoryPage from '../pages/admin/Category';

import DashboardPenguji from "../pages/penguji/Dashboard";
import QuizPage from "../pages/penguji/QuizPage";
import CreateQuiz from "../pages/penguji/CreateQuiz";
import QuestionQuiz from "../pages/penguji/QuestionQuiz";
import EditQuiz from "../pages/penguji/EditQuiz";
import QuizByCategoryPage from "../pages/main/QuizByCategoryPage";
import HistoryPage from "../pages/main/HistoryPage";
import SearchPage from "../pages/main/SearchPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <Error500 />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error500 />,
    children: [
      {
        path: "dashboard",
        element: <DashboardUser />,
      },
      {
        path: "dashboard/profile",
        element: <ProfileUser />,
      },
      {
        path: "quiz/:id",
        element: <DetailQuiz />,
      },
      {
        path: "category",
        element: <CategoryPageUser />,
      },
      {
        path: "category/:id",
        element: <QuizByCategoryPage />,
      },
      {
        path: "history",
        element: <HistoryPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "quiz/session/:sessionId",
        element: <StartQuiz />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardAdmin />,
      },
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "roles",
        element: <RolePage />,
      },
      {
        path: "categories",
        element: <CategoryPage />,
      },
    ],
  },
  {
    path: "/penguji",
    element: <PengujiLayout />,
    errorElement: <Error500 />,
    children: [
      {
        index: true,
        element: <Navigate to="/penguji/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardPenguji />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "quiz/:id",
        element: <EditQuiz />,
      },
      {
        path: "quiz/:id/questions",
        element: <QuestionQuiz />,
      },
      {
        path: "create",
        element: <CreateQuiz />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  // // not found
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default routes;
