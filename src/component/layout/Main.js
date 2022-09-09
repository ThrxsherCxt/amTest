import React, { useEffect } from "react";
import Character from "../catalog/characters/Character";
import Favourites from "../layout/Favourites";

const Layout = () => {
  
  return (
    <>
      <div className="container">
        <Favourites/>
        <div className="logo"></div>
        <div className="title">Selecciona tu filtro</div>
        <Character />
      </div>
    </>
  );
};

export default Layout;
