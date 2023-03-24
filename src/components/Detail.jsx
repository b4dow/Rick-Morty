import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "./Card";

const Detail = () => {
  const { idDetail } = useParams();

  const [character, setCharacter] = useState({});


  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${idDetail}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [idDetail]);

  return (
    <div>
      {character.id && (
        <div>
          <h2>{character.name}</h2>
          <h2>{character.status}</h2>
          <h2>{character.species}</h2>
          <h2>{character.gender}</h2>
          <h2>{character.origin?.name}</h2>
          <img src={character.image} alt={character.name}/>
        </div>
      )}
    </div>
  );
};

export default Detail;
