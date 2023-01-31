import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Application from './components/Application';
import Trials from './components/main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />
  },
  {
    path: "/main",
    element: <Trials />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);