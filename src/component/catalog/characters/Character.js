import React, { useEffect } from "react";
import useCharacters from "../../../hooks/useCharacters";

const Character = () => {
  const { charactersListData, getCharactersListData } = useCharacters();

  return (
    <>
      {charactersListData.map((character) => (
        <div className="card" key={character.id}>
          <div className="photo-container Gryffindor">
            <div className="photo">
                <img alt={character.name} src={character.image}/>
            </div>
          </div>
          <div className="info">
            <div className="status">{character.alive ? 'VIVO' : 'FINADO'} <span className="slash">/</span> {character.hogwartsStudent ? 'ESTUDIANTE' : character.hogwartsStaff ? 'STAFF' : ''}</div>
            <div className="favourite"></div>
            <div className="name">{character.name}</div>
            <div className="birthday"><span className="tag">Cumpleaños: </span>{character.dateOfBirth !== "" ? character.dateOfBirth : "Not specified" }</div>
            <div className="gender"><span className="tag">Género: </span>{character.gender !== "" ? character.gender : "Not specified" }</div>
            <div className="eyeColour"><span className="tag">Color de ojos: </span>{character.eyeColour !== "" ? character.eyeColour : "Not specified" }</div>
            <div className="hairColour"><span className="tag">Color de pelo: </span>{character.hairColour !== "" ? character.hairColour : "Not specified" }</div>
          </div>
          <br></br>
        </div>
      ))}
    </>
  );
};

export default Character;
