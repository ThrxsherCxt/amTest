import React, { useEffect } from "react";
import useCharacters from "../../hooks/useCharacters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Favourites = () => {

    const {
        removeFromFavourites,
        favourites,
      } = useCharacters();

  return (
    <>
      {/* <div className="favButtonsContainer">
        <button className="favoritos">
          FAVORITOS&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faBookmarkSolid} className="iconBold" />
        </button>
        <button className="agregar">
          AGREGAR&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUserPlus} className="iconBold" />
        </button>
      </div>

      <div className="favoritosList">
      {favourites.map((character) => 
        <ul>{character.name}</ul>
      )}
      </div> */}
    </>
  );
};

export default Favourites;
