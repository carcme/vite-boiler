import React, { useContext, useState } from "react";
import { useLang } from "../context/LanguageContext";

const About = () => {
  const { lang } = useLang();
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen text-3xl font-bold text-center bg-neutral-700 text-neutral-300">
        About Page {lang}
      </div>
    </>
  );
};

export default About;
