import {
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./Home";
import ForgotPassword from "./ForgotPassword";
import RestPassword from "./Rest-Password";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />, // Wrap the Home component with the ProtectedRoute component
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/rest-password/:resetToken",
    element: <RestPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
