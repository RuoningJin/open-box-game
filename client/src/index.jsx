import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Application from './components/Application';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Application />
  },
  {
    path: "/main",
    element: <mainApp />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


