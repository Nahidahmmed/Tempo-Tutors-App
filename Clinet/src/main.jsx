import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import AllClasses from "./Pages/AllClasses/AllClasses";
import InstructorsPage from "./Pages/InstructorsPage/InstructorsPage";
import ClassDetail from "./Pages/ClassDetail/ClassDetail";
import InstructorsDetail from "./Pages/InstructorsDetail/InstructorsDetail";
import AuthProvider from "./Providers/AuthProvider";
import SignUp from "./Pages/SignUp/SignUp";
import Login from './Pages/Login/Login';
import MyClass from './Pages/MyClass/MyClass';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: "/instructors",
        element: <InstructorsPage></InstructorsPage>,
      },
      {
        path: "/myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "/detail/:id",
        element: <ClassDetail></ClassDetail>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/classes/${params.id}`),
      },
      {
        path: "/instructorsDetail/:id",
        element: <InstructorsDetail></InstructorsDetail>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/instructors/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
