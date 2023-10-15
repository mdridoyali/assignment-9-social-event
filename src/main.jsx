import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from './Pages/About';
import Login from './Pages/Login';
import Root from './Root/Root';
import Register from './Pages/Register';
import AuthProvider from "./Provider/AuthProvider";
import SeeDetails from './Pages/SeeDetails';
import PrivetRoot from "./Privet/PrivetRoot";
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/about",
        element: <PrivetRoot><About></About> </PrivetRoot>,
      },
      {
        path: "/register",
        element: <Register></Register> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/contact",
        element: <PrivetRoot><Contact></Contact></PrivetRoot> ,
      },
      {
        path: "/card/:id",
        element: <PrivetRoot><SeeDetails></SeeDetails></PrivetRoot> ,
        loader: () => fetch('/data.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);

