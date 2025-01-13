import { createContext, useContext, useState } from "react";

// Creating a new context for language and storing it in the LangContext variable
const LangContext = createContext();

// Defining a context provider component named 'LangProvider'
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const changeLang = () => {
    lang === "en" ? setLang("de") : setLang("en");
  };

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Defining a custom hook named 'useLang' to provide an easier way to access the LangContext
export const useLang = () => useContext(LangContext);
