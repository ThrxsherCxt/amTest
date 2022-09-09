import React, { useEffect } from "react";
import Character from "../catalog/characters/Character";

const Layout = () => {
  
  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <div className="title">Selecciona tu filtro</div>
        <Character />
      </div>
    </>
  );
};

export default Layout;
