import App from "./main/App";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Auth from "./auth-pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      App()
    ),
  },
  {
    path: "/login",
    element: (
      Auth()
    ),
  }
]);

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <RouterProvider router={router} />
);
