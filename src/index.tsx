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
import ParticlesComponent from "./components/particles";
import "./main/App.css";

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
  <>
    <ParticlesComponent id="particles"></ParticlesComponent>
    <RouterProvider router={router} />
  </>
);
