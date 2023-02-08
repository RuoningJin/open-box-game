import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);