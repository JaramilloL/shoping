import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserState from "./context/UserState.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserState>
      <RouterProvider router={router} />
    </UserState>
  </React.StrictMode>
);
