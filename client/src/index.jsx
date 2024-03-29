import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import { ChakraProvider } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Application from './components/Application';
import Game from './components/main';
import Consent from './components/Consent';
import Users from './components/users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />
  },
  {
    path: "/main",
    element: <Game />
  },
  {
    path: "/consent",
    element: <Consent />
  },
  {
    path: "/users",
    element: <Users />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>

);