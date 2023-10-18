import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/AddProducts/AddProducts";
import BrandsProducts from "../BrandsProducts/BrandsProducts";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/brand/:name",
        element: <BrandsProducts />,
      },
      {
        path: "/update/:id",
        element: <UpdateProduct />,
      },
    ],
  },
]);
export default router;
