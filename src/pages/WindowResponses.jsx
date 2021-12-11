import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AvatarContext from "../contexts/AvatarContext";
import ResponsesMan from "../components/genreResponses/ResponsesMan";
import ResponsesWoman from "../components/genreResponses/ResponsesWoman";

function WindowResponses() {
  const { currentAvatar } = useContext(AvatarContext);
  return (
    <div className="app-body">
      <div className="app-body-box-response">
        {currentAvatar === 0 ? <ResponsesMan /> : <ResponsesWoman />}
        <br />
        <Link to="/" className="app-link">
          <div className="app-btn">
            <span>Retour au choix</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WindowResponses;
