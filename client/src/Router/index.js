import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/Add/Add";
import CardPage from "../pages/Card";
import Cards from "../pages/Cards";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
    {
      path: "/cards/:id",
      element: <CardPage/>
    },
    {
      path: "/cards",
      element: <Cards/>
    }
  ]);