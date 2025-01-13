import React from "react";
import { useLang } from "../context/LanguageContext";

const Contact = () => {
  const { lang, changeLang } = useLang();
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen text-3xl font-bold text-center bg-neutral-700 text-neutral-300">
        Contact Page {lang}
        <button
          onClick={changeLang}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Button
        </button>
        {/* <p>{langData}</p> */}
      </div>
    </>
  );
};

export default Contact;
