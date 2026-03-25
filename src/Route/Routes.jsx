import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../Pages/Root/Root';
import ErrorPages from '../Pages/Root/ErrorPage/ErrorPages';
import Home from '../Pages/Root/Home/Home';
import Gift from '../Pages/Root/Gift/Gift';
import Scrapbook from '../Pages/Root/Scrapbook/Scrapbook';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPages></ErrorPages>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
            path:"surprise",
            element:<Gift></Gift>
        },
        {
            path:"/scrapbook",
            element:<Scrapbook></Scrapbook>
        },
    ]
  },
]);

