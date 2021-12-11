import React, { createContext, useState } from "react";

const PageAffichageContext = createContext();

export default PageAffichageContext;

export const PageAffichageContextProvider = ({ children }) => {
  const [messageErrorWoman, setMessageErrorWoman] = useState(false);

  return (
    <PageAffichageContext.Provider
      value={{
        messageErrorWoman,
        setMessageErrorWoman,
      }}
    >
      {children}
    </PageAffichageContext.Provider>
  );
};
