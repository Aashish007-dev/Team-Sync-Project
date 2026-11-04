import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../../features/auth/ui/pages/Login";
import Register from "../../features/auth/ui/pages/Register";
import DashboardLayout from "../layout/DashboardLayout";
// import Home from "../../features/dashboard/ui/pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./commonRoutes";
import RoleBasedRoute from "../protectedRoutes/RoleBasedRoute";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            ...commonRoutes,
            {
              element: <RoleBasedRoute allowedRoles={'admin'}/>,
              children: adminRoutes
            },
            {
              element: <RoleBasedRoute allowedRoles={'employee'}/>,
              children: employeeRoutes
            },
          ]
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
