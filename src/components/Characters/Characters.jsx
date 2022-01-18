import React from "react";
import Character from "../Character/Character";
import CharactersStyles from './Characters.module.css'

const Characters = ({ characters }) => {
  return (
    <>
      <div className={CharactersStyles.flex}>
        {characters.map((character) => (
          <Character character={character} />
        ))}
      </div>
    </>
  );
};

export default Characters;
