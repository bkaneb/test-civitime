import React, { createContext, useState } from "react";

const AvatarContext = createContext();

export default AvatarContext;

export const AvatarContextProvider = ({ children }) => {
  const [currentAvatar, setCurrentAvatar] = useState(0);
  const [currentSkinMan, setCurrentSkinMan] = useState(0);
  const [currentShirtMan, setCurrentShirtMan] = useState(0);
  const [currentHairMan, setCurrentHairMan] = useState(0);
  const [currentSkinWoman, setCurrentSkinWoman] = useState(0);
  const [currentShirtWoman, setCurrentShirtWoman] = useState(0);
  const [currentHairWoman, setCurrentHairWoman] = useState(0);
  return (
    <AvatarContext.Provider
      value={{
        currentAvatar, setCurrentAvatar,
        currentSkinMan, setCurrentSkinMan,
        currentShirtMan, setCurrentShirtMan,
        currentHairMan, setCurrentHairMan,
        currentSkinWoman, setCurrentSkinWoman,
        currentShirtWoman, setCurrentShirtWoman,
        currentHairWoman, setCurrentHairWoman,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};
