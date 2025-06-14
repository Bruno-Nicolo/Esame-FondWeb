import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./router/HomePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateItem from "./router/Create.jsx";
import Favourites from "./router/Favourite.jsx";
import { Profile } from "./router/Profile.jsx";
import Registration from "./router/Registration.jsx";
import Login from "./router/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/homepage/:userId",
    element: <HomePage />,
  },
  {
    path: "/create/:userId",
    element: <CreateItem />,
  },
  {
    path: "/favourites/:userId",
    element: <Favourites />,
  },
  {
    path: "/profile/:userId",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
