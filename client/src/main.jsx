import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/homePage/HomePage.jsx";
import Login from "./components/pages/LoginAndRegistration/Login.jsx";
import Register from "./components/pages/LoginAndRegistration/Register.jsx";
import Authprovider from "./provider/Authprovider.jsx";
import CourseDetailsPage from "./components/pages/homePage/Classes/CourseDetailsPage.jsx";
import MainDashboard from "./components/pages/Dashboard/MainDashboard.jsx";
import Profile from "./components/pages/Dashboard/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/courseDetailsPage",
        element: <CourseDetailsPage></CourseDetailsPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <MainDashboard></MainDashboard>,
    children: [
      {
        path: "/dashboard",
        element: <Profile></Profile>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
