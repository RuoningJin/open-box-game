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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />
  },
  {
    path: "/main",
    element: <Trials />
  },
  {
    path: "/consent",
    element: <Consent />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>

);