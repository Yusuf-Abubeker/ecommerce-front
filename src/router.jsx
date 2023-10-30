import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ProductDetailPage from "./pages/ProductDetailPage";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/cart";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserProfileDetail from "./pages/UserProfileDetail";
import Logout from "./auth/Logout";
import CreateProduct from "./components/products/CreateProduct";
import ProductManagement from "./pages/merchant/ProductManagement";
import CreateNewCategory from "./components/categories/CreateNewCategory";
import MerchantDashboard from "./pages/merchant/MerchantDashboard";
import ProductEdit from "./components/products/ProductEdit";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagementDashboard from "./pages/admin/UserManagementDashboard";
import AnalyticsReportingDashboard from "./pages/admin/AnalyticsReportingDashboard";

function getUserRole() {
  const token = localStorage.getItem("accessToken");

  if (token) {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decoding the base64 token
      const userRole = decodedToken.role; // Assuming "role" is the key in the JWT containing the user's role
      return userRole;
    } catch (error) {
      console.error("Error parsing JWT token:", error);
    }
  }

  return "default"; // Replace with an appropriate default role or error handling logic.
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "products/:id", element: <ProductDetailPage /> },
      {
        path: "/auth/login",
        element: <Login />,
      },
      { path: "/auth/signUp", element: <SignUp /> },
      { path: "/auth/logout", element: <Logout /> },
      { path: "me", element: <UserProfileDetail /> },
      {
        path: "operations/Product Management",
        element:
          getUserRole() === "merchant" ? <ProductManagement /> : <ErrorPage />,
      },
      {
        path: "/createPro",
        element:
          getUserRole() === "merchant" ? <CreateProduct /> : <ErrorPage />,
      },
      {
        path: "cart",
        element: getUserRole() === "buyer" ? <Cart /> : <ErrorPage />,
      },
      {
        path: "/newCategory",
        element:
          getUserRole() === "merchant" ? <CreateNewCategory /> : <ErrorPage />,
      },
      {
        path: "/merchant",
        element:
          getUserRole() === "merchant" ? <MerchantDashboard /> : <ErrorPage />,
      },
      {
        path: "/admin",
        element:
          getUserRole() === "merchant" ? <AdminDashboard /> : <ErrorPage />,
      },
    ],
  },
  {
    path: "/adminOperations/User Management",
    element:
      getUserRole() === "merchant" ? <UserManagementDashboard /> : <ErrorPage />,
  },
  {
    path: "/adminOperations/Analytics and Reporting",
    element:
      getUserRole() === "merchant" ? <AnalyticsReportingDashboard /> : <ErrorPage />,
  },
]);

export default router;
