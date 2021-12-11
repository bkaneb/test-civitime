import React from "react";
import "./App.css";
import Window from "./components/Window";
import WindowTitle from "./components/WindowTitle";

const App = () => {
  return (
    <main>
      <div id="profil-editor">
        <WindowTitle />
        <Window />
      </div>
    </main>
  );
};

export default App;
