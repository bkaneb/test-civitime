import React, { useContext } from "react";
import AvatarContext from "../../contexts/AvatarContext";
import { ShirtColors, SkinColors, HairColors } from "../Colors";
import Avatar from "../Avatar";

const ResponsesMan = () => {
    const { currentAvatar, currentSkinMan, currentShirtMan, currentHairMan } =
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
            `../assets/color-${HairColors[currentHairMan]}.svg`
          }
          alt={`color ${HairColors[currentHairMan]}`}
        />
      </span>{" "}
      <br />
      <span>
        Couleur peau :
        <img
          src={
            process.env.PUBLIC_URL +
            `../assets/color-${SkinColors[currentSkinMan]}.svg`
          }
          alt={`color ${SkinColors[currentSkinMan]}`}
        />
      </span>{" "}
      <br />
      <span>
        Couleur du T-shirt :{" "}
        <img
          src={
            process.env.PUBLIC_URL +
            `../assets/color-${ShirtColors[currentShirtMan]}.svg`
          }
          alt={`color ${ShirtColors[currentShirtMan]}`}
        />
      </span>{" "}
    </div>
  );
};

export default ResponsesMan;
