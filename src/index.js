import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AvatarContextProvider } from "./contexts/AvatarContext";
import { PageAffichageContextProvider } from "./contexts/PageAffichageContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <PageAffichageContextProvider>
        <AvatarContextProvider>
          <App />
        </AvatarContextProvider>
      </PageAffichageContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
