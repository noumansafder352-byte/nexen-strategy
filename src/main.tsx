import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

// The pre-built HTML carries this page's title/description for crawlers.
// Drop it so the router's <HeadContent /> is the only source once the app runs
// (otherwise the first <title> would stick across client-side navigation).
document.querySelectorAll("[data-static-head]").forEach((el) => el.remove());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
