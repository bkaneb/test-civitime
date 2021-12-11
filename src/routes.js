import React from "react";
import { useRoutes } from "react-router-dom";
import WindowHome from "./pages/WindowHome";
import WindowResponses from "./pages/WindowResponses";

export default function Routers() {
  const routes = useRoutes([
    { path: "/", element: <WindowHome /> },
    { path: "/responses", element: <WindowResponses /> },
  ]);
  return routes;
}
