import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import AvatarContext from "../contexts/AvatarContext";
import Man from "./genreAvatar/Man";
import Woman from "./genreAvatar/Woman";

export default function Avatar(props) {
  const { paramID } = props;
  const { currentAvatar, setCurrentAvatar } = useContext(AvatarContext);
  const handleClickAvatar = (e) => {
    e.preventDefault();
    setCurrentAvatar(paramID);
  };

  return (
    <div
      className={
        "clickable avatar" +
        (paramID === currentAvatar ? " avatar-selected" : "")
      }
      onClick={(e) => {
        handleClickAvatar(e);
      }}
    >
      {paramID === 0 ? <Man /> : <Woman />}
    </div>
  );
}

Avatar.propTypes = {
  paramID: PropTypes.number.isRequired,
};
