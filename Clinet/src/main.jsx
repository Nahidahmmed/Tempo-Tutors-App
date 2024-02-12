import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import AllClasses from './Pages/AllClasses/AllClasses';
import InstructorsPage from './Pages/InstructorsPage/InstructorsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/allClasses',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/instructors',
        element: <InstructorsPage></InstructorsPage>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
