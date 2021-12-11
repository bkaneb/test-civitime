import React from "react";
import "./App.css";
import Routers from "./routes";
import WindowTitle from "./components/WindowTitle";

const App = () => {
  return (
    <main>
      <div id="profil-editor">
        <WindowTitle />
        <Routers />
      </div>
    </main>
  );
};

export default App;
