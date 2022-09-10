import React, { useEffect } from "react";
import Character from "../catalog/characters/Character";
import Modal from "./Modal";
const Layout = () => {
  return (
    <>
      <div className="container">
        <Modal />
        <div className="logo"></div>
        <div className="title">Selecciona tu filtro</div>
        <Character />
      </div>
    </>
  );
};

export default Layout;
