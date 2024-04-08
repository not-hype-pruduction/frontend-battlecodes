import App from "./main/App";
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
  
]);

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <RouterProvider router={router} />
);
