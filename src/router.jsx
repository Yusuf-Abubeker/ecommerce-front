import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProfileDetail from "./pages/UserProfileDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/auth/login", element: <Login /> },
      {path:"/auth/signUp",element:<SignUp/>},
      {path:"/me",element:<UserProfileDetail/>}
    ],
  },
]);

export default router;
