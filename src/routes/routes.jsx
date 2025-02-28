import Layout from "@/components/Layout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This wraps all routes with the layout (header, main, footer)
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
