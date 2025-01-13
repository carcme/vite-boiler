import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { LangProvider } from "./context/LanguageContext";

function App() {
  console.log("App");
  return (
    <>
      <LangProvider>
        <Navbar />
        <Outlet />
      </LangProvider>
    </>
  );
}

export default App;
