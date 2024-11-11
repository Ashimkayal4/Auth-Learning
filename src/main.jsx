import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import AuthProvider from './Providers/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import Profile from './Components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'signUp',
        element:<SignUp></SignUp>
      },
      {
        path: 'orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes> ,
      },
      {
        path: "profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
