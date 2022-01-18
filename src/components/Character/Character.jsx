import React from "react";
import CharacterStyles from "./Character.module.css";

const Character = ({ character }) => {
  return (
    <div className={CharacterStyles.card}>
      <img src={character.image} alt="" />
      <hr />
      <p><b>{character.name}</b></p>
      <p>{character.gender}</p>
      <p>{character.species}</p>
      <p>{character.location.name}</p>
    </div>
  );
};

export default Character;
