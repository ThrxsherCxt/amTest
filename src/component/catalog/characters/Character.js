import React, { useEffect } from 'react';
import useCharacters from '../../../hooks/useCharacters';

const Character = () => {
    const {
        charactersListData,
        getCharactersListData
    } = useCharacters();


    return (<div>
    {charactersListData.map((character) => (
        <div key={character.id}>{character.name}<br></br></div>
    ))}
    </div>);
}

export default Character;