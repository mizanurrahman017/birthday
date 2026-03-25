import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/Root/ErrorPage/ErrorPages';
import Home from '../Pages/Root/Home/Home';
import Gift from '../Pages/Root/Gift/Gift';
import Scrapbook from '../Pages/Root/Scrapbook/Scrapbook';
import Note from '../Pages/Root/Note/Note';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // 👈 Root component
    errorElement: <ErrorPages />,
    children: [
      {
        index: true, // default child
        element: <Home />,
      },
      {
        path: "surprise", // relative path
        element: <Gift />,
      },
      {
        path: "scrapbook", // relative path
        element: <Scrapbook />,
      },
      {
        path:"note",
        element:<Note></Note>
      }
    ],
  },
]);