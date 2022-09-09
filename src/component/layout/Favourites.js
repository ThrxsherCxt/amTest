import React, { useEffect } from "react";
import useCharacters from "../../hooks/useCharacters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

const Favourites = () => {
  const { charactersListData, filter, filterCharacters } = useCharacters();

  return (
    <>
      <div className="buttonsContainer">

      </div>

    </>
  );
};

export default Favourites;
