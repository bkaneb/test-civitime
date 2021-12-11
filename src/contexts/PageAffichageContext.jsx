import React, { createContext, useState } from "react";

const PageAffichageContext = createContext();

export default PageAffichageContext;

export const PageAffichageContextProvider = ({ children }) => {
  const [pageResponse, setPageResponse] = useState(false);
  const [messageErrorWoman, setMessageErrorWoman] = useState(false);
  const validateChoice = (e) => {
    e.preventDefault();
    setPageResponse(!pageResponse);
  };

  return (
    <PageAffichageContext.Provider
      value={{
        pageResponse,
        setPageResponse,
        validateChoice,
        messageErrorWoman,
        setMessageErrorWoman,
      }}
    >
      {children}
    </PageAffichageContext.Provider>
  );
};
