import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AvatarContextProvider } from "./contexts/AvatarContext";
import { PageAffichageContextProvider } from "./contexts/PageAffichageContext";

ReactDOM.render(
  <React.StrictMode>
    <PageAffichageContextProvider>
      <AvatarContextProvider>
        <App />
      </AvatarContextProvider>
    </PageAffichageContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
