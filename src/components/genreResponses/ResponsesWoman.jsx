import React, { useContext } from "react";
import AvatarContext from "../../contexts/AvatarContext";
import { ShirtColors, SkinColors, HairColors } from "../Colors";
import Avatar from "../Avatar";

const ResponsesWoman = () => {
    const { currentAvatar, currentSkinWoman, currentShirtWoman, currentHairWoman } =
    useContext(AvatarContext);
  return (
    <div>
      <span>
        Votre choix : &ensp;
        {currentAvatar === 0 ? <Avatar paramID={0} /> : <Avatar paramID={1} />}
      </span>{" "}
      <br />
      <span>
        Couleur de cheveux :
        <img
          src={
            process.env.PUBLIC_URL +
            `../assets/color-${HairColors[currentHairWoman]}.svg`
          }
          alt={`color ${HairColors[currentHairWoman]}`}
        />
      </span>{" "}
      <br />
      <span>
        Couleur peau :
        <img
          src={
            process.env.PUBLIC_URL +
            `../assets/color-${SkinColors[currentSkinWoman]}.svg`
          }
          alt={`color ${SkinColors[currentSkinWoman]}`}
        />
      </span>{" "}
      <br />
      <span>
        Couleur du T-shirt :{" "}
        <img
          src={
            process.env.PUBLIC_URL +
            `../assets/color-${ShirtColors[currentShirtWoman]}.svg`
          }
          alt={`color ${ShirtColors[currentShirtWoman]}`}
        />
      </span>{" "}
    </div>
  );
};

export default ResponsesWoman;
