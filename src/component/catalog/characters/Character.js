import React, {useEffect} from "react";
import useCharacters from "../../../hooks/useCharacters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark as faBookmarkSolid,
  faUserPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";

const Character = () => {
  const {
    charactersListData,
    filter,
    filterCharacters,
    addToFavourites,
    removeFromFavourites,
    favourites,
    showFavoritosTab,
    openModal
  } = useCharacters();

  return (
    <>

      <div className="favButtonsContainer">
        <button
          id="botonFavoritos"
          className="favoritos"
          onClick={() => showFavoritosTab()}
        >
          FAVORITOS&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faBookmarkSolid} className="icons iconBold" />
        </button>
        <button className="agregar" onClick={ () => openModal()}>
          AGREGAR&nbsp;&nbsp;&nbsp;
          <FontAwesomeIcon icon={faUserPlus} className="icons iconBold" />
        </button>
      </div>

      <div className="favoritosList">
        {favourites.length < 1 ? (
          <div className="empty">No hay favoritos.</div>
        ) : (
          favourites.map((character) => (
            <div key={character.id} className="item">
              <div className="photo-container">
                <div className="photo">
                  <img alt={character.name} src={character.image} />
                </div>
              </div>
              <div className="name">{character.name}</div>
              <button
                className="buttonDelete"
                onClick={() => removeFromFavourites(character)}
              >
                <FontAwesomeIcon icon={faTrash} className="icons iconBold" />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="buttonsContainer">
        <button id="buttonStudent" onClick={() => filterCharacters(true)}>
          ESTUDIANTES
        </button>
        <button id="buttonStaff" onClick={() => filterCharacters(false)}>
          STAFF
        </button>
      </div>

      {charactersListData && charactersListData.map((character) => 
        filter === "" || character.hogwartsStudent === filter ? (
          <div className="card" key={character.id}>
            <div
              className={`photo-container ${
                character.house !== "" ? character.house : "unknownHouse"
              }`}
            >
              <div className="photo">
                <img alt={character.name} src={character.image} />
              </div>
            </div>
            <div className={`info ${character.alive ? "" : "notAlive"}`}>
              <div className="statusBar">
                <div className="status">
                  {character.alive ? "VIVO" : "FINADO"}{" "}
                  <span className="slash">/</span>{" "}
                  {character.hogwartsStudent
                    ? "ESTUDIANTE"
                    : character.hogwartsStaff
                    ? "STAFF"
                    : "OTRO"}
                </div>
                <div className="favourite">
                  {favourites.includes(character) ? (
                    <FontAwesomeIcon
                      icon={faBookmarkSolid}
                      className="icons iconBold"
                      onClick={() => removeFromFavourites(character)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBookmarkRegular}
                      className="icons icon"
                      onClick={() => addToFavourites(character)}
                    />
                  )}
                </div>
              </div>

              <div className="name">
                {character.alive ? "" : "+"} {character.name}
              </div>
              <div className="birthday">
                <span className="tag">Cumpleaños: </span>
                {character.dateOfBirth !== ""
                  ? character.dateOfBirth
                  : "Not specified"}
              </div>
              <div className="gender">
                <span className="tag">Género: </span>
                {character.gender !== "" ? character.gender : "Not specified"}
              </div>
              <div className="eyeColour">
                <span className="tag">Color de ojos: </span>
                {character.eyeColour !== ""
                  ? character.eyeColour
                  : "Not specified"}
              </div>
              <div className="hairColour">
                <span className="tag">Color de pelo: </span>
                {character.hairColour !== ""
                  ? character.hairColour
                  : "Not specified"}
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Character;
