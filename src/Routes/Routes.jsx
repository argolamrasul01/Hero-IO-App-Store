import React from "react";
import { createBrowserRouter } from "react-router";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Installation from "../Pages/installation";
import ErrorPage from "../Pages/ErrorPage";
import AppsPreview from "../Pages/AppsPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "apps/:id",
        element: <AppsPreview />,
      },
    ],
  },
]);

export default router;
