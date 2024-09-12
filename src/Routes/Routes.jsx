import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut";
import BookServices from "../Pages/Book/BookServices";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path: '/bookings',
          element: <PrivateRoute><BookServices></BookServices></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;