import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PageAffichageContext from "../contexts/PageAffichageContext";
import AvatarContext from "../contexts/AvatarContext";
import ErrorTshirt from "../components/ErrorTshirt";
import { ShirtColors, SkinColors, HairColors } from "../components/Colors";
import ViewColor from "../components/ViewColor";
import Avatar from "../components/Avatar";

const Window = () => {
  const {
    currentAvatar,
    currentHairMan,
    currentHairWoman,
    currentShirtWoman,
    currentShirtMan,
    currentSkinMan,
    currentSkinWoman,
  } = useContext(AvatarContext);
  const {
    messageErrorWoman,
    setMessageErrorWoman,
  } = useContext(PageAffichageContext);

  return (
    <div className="app-body">
        <div className="app-body-box">
          <h2 className="app-body-title">
            Lequel de ces deux avatars préférez-vous ?
          </h2>

          <div className="avatars">
            <Avatar paramID={0} />
            <Avatar paramID={1} />
          </div>

          <div className="profil-styles">
            <div className="profil-styles-row">
              <img
                src={process.env.PUBLIC_URL + "/assets/hair.svg"}
                className="profil-styles-img"
                alt="hair tone"
              />
              <ViewColor
                Colors={HairColors}
                selectedCategory={0}
                paramID={0}
                selected={
                  currentAvatar === 0 ? currentHairMan : currentHairWoman
                }
              />
              <ViewColor
                Colors={HairColors}
                selectedCategory={0}
                paramID={1}
                selected={
                  currentAvatar === 0 ? currentHairMan : currentHairWoman
                }
              />
              <ViewColor
                Colors={HairColors}
                selectedCategory={0}
                paramID={2}
                selected={
                  currentAvatar === 0 ? currentHairMan : currentHairWoman
                }
              />
              <ViewColor
                Colors={HairColors}
                selectedCategory={0}
                paramID={3}
                selected={
                  currentAvatar === 0 ? currentHairMan : currentHairWoman
                }
              />
            </div>

            <div className="profil-styles-row">
              <img
                src={process.env.PUBLIC_URL + "/assets/skin.svg"}
                className="profil-styles-img"
                alt="skin tone"
              />
              <ViewColor
                Colors={SkinColors}
                selectedCategory={1}
                paramID={0}
                selected={
                  currentAvatar === 0 ? currentSkinMan : currentSkinWoman
                }
              />
              <ViewColor
                Colors={SkinColors}
                selectedCategory={1}
                paramID={1}
                selected={
                  currentAvatar === 0 ? currentSkinMan : currentSkinWoman
                }
              />
              <ViewColor
                Colors={SkinColors}
                selectedCategory={1}
                paramID={2}
                selected={
                  currentAvatar === 0 ? currentSkinMan : currentSkinWoman
                }
              />
              <ViewColor
                Colors={SkinColors}
                selectedCategory={1}
                paramID={3}
                selected={
                  currentAvatar === 0 ? currentSkinMan : currentSkinWoman
                }
              />
            </div>

            <div className="profil-styles-row">
              <img
                src={process.env.PUBLIC_URL + "/assets/t-shirt.svg"}
                className="profil-styles-img"
                alt="t-shirt color"
              />
              <ViewColor
                Colors={ShirtColors}
                selectedCategory={2}
                paramID={0}
                selected={
                  currentAvatar === 0 ? currentShirtMan : currentShirtWoman
                }
              />
              <ViewColor
                Colors={ShirtColors}
                selectedCategory={2}
                paramID={1}
                selected={
                  currentAvatar === 0 ? currentShirtMan : currentShirtWoman
                }
              />
              <ViewColor
                Colors={ShirtColors}
                selectedCategory={2}
                paramID={2}
                selected={
                  currentAvatar === 0 ? currentShirtMan : currentShirtWoman
                }
              />
              <ViewColor
                Colors={ShirtColors}
                selectedCategory={2}
                paramID={3}
                selected={
                  currentAvatar === 0 ? currentShirtMan : currentShirtWoman
                }
              />
            </div>
          </div>
          {messageErrorWoman ? <ErrorTshirt /> : null}
          <Link to="/responses" className="app-link">
            <div
              className="app-btn"
              onClick={(e) => {
                setMessageErrorWoman(false);
              }}
            >
              <span>Valider</span>
            </div>
          </Link>
          <div style={{ height: "1.25rem" }} />
        </div>
    </div>
  );
};

export default Window;
