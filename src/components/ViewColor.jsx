import React, { useContext } from "react";
import * as PropTypes from "prop-types";
import AvatarContext from "../contexts/AvatarContext";
import PageAffichageContext from "../contexts/PageAffichageContext";

const ViewColor = (props) => {
  const { Colors, paramID, selected, selectedCategory } = props;
  const {
    currentAvatar,
    setCurrentSkinMan,
    setCurrentShirtMan,
    setCurrentHairMan,
    setCurrentHairWoman,
    setCurrentSkinWoman,
    setCurrentShirtWoman,
  } = useContext(AvatarContext);

  const { setMessageErrorWoman } = useContext(PageAffichageContext);

  const handleEvent = (e) => {
    e.preventDefault();
    if (currentAvatar === 1 && paramID === 3 && selectedCategory === 2)
      return setMessageErrorWoman(true);
    else setMessageErrorWoman(false);
    if (selectedCategory === 0) {
      if (currentAvatar === 0) return setCurrentHairMan(paramID);
      else return setCurrentHairWoman(paramID);
    }

    if (selectedCategory === 1) {
      if (currentAvatar === 0) return setCurrentSkinMan(paramID);
      else return setCurrentSkinWoman(paramID);
    }

    if (selectedCategory === 2) {
      if (currentAvatar === 0) return setCurrentShirtMan(paramID);
      else return setCurrentShirtWoman(paramID);
    }
  };

  return (
    <div
      className={
        "clickable profil-styles-color" +
        (selected === paramID ? " selected-color" : "")
      }
    >
      <img
        src={process.env.PUBLIC_URL + `../assets/color-${Colors[paramID]}.svg`}
        alt={`color ${Colors[paramID]}`}
        onClick={(e) => {
          handleEvent(e);
        }}
      />
    </div>
  );
};

ViewColor.propTypes = {
  Colors: PropTypes.array.isRequired,
  paramID: PropTypes.number.isRequired,
  selected: PropTypes.number.isRequired,
  selectedCategory: PropTypes.number.isRequired,
};

export default ViewColor;
