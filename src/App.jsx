import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Education from "./Pages/Education";
import Temple from "./Pages/Temple";
import NotFound from "./Pages/NotFound";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/temple",
        element: <Temple />,
      },
      {
        path: "/education",
        element: <Education />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
