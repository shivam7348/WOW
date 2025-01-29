import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import About from "./components/Pages/About";
import Product from "./components/Pages/Product";
import Contact from "./components/Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
       path: "contact",
       element: <Contact/>
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

export default router;
