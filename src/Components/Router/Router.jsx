import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import AddProduct from "../../Pages/AddProducts/AddProducts";
import BrandsProducts from "../BrandsProducts/BrandsProducts";
import UpdateProduct from "../../Pages/UpdateProduct/UpdateProduct";
import Error from "../../Pages/Error/Error";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Cart from "../../Pages/Cart/Cart";
import PrivateRoutes from "../Private/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
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
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/carts"),
      },
    ],
  },
]);
export default router;
