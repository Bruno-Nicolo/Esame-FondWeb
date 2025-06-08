import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./router/HomePage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateItem from "./router/Create.jsx";
import Favourites from "./router/Favourite.jsx";
import { Profile } from "./router/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/create",
    element: <CreateItem />,
  },
  {
    path: "/favourites",
    element: <Favourites />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
