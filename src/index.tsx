import App from "./App";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      App()
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <RouterProvider router={router} />
);
