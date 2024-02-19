import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AllClass from './Pages/AllClass/AllClass';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import MyCart from './Pages/MyCart/MyCart';
import AllUsers from './Pages/AllUsers/AllUsers';

import AddClasses from './Pages/AddClasses/AddClasses';
import AboutUs from './Pages/AboutUs/AboutUs';

import ClassDetail from './Pages/ClassDetail/ClassDetail';
import InstructorsDetail from './Pages/InstructorsDetail/InstructorsDetail';
import AllInstructors from './Pages/AllInstructors/AllInstructors';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/classes',
        element: <AllClass></AllClass>
      },
      {
        path: '/instructors',
        element: <AllInstructors></AllInstructors>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
      {
        path: '/users',
        element: <AllUsers></AllUsers>
      },
      {
        path: '/addclass',
        element: <AddClasses></AddClasses>
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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
