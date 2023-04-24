import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';
import { ChakraProvider } from '@chakra-ui/react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Application from './components/Application';
import Trials from './components/main';
import Consent from './components/Consent';
import Users from './components/users';
import Searching from './components/searching-quest'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />
  },
  {
    path: "/quests",
    element: <Searching />
  },
  {
    path: "/main",
    element: <Trials />
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