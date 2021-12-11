import React, { useContext } from "react";
import PageAffichageContext from "../contexts/PageAffichageContext";
import AvatarContext from "../contexts/AvatarContext";
import ResponsesMan from "./genreResponses/ResponsesMan";
import ResponsesWoman from "./genreResponses/ResponsesWoman";

function WindowResponses() {
  const { validateChoice } = useContext(PageAffichageContext);
  const { currentAvatar } = useContext(AvatarContext);
  return (
    <div className="app-body-box-response">
      {currentAvatar === 0 ? <ResponsesMan /> : <ResponsesWoman />}
      <br />
      <div
        className="app-btn"
        onClick={(e) => {
          validateChoice(e);
        }}
      >
        <span>Retour au choix</span>
      </div>
    </div>
  );
}

export default WindowResponses;
