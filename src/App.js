import "./App.css";
import { useState } from "react";
import axios from 'axios'
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";

function App() {
  const [ characters, setCharacters ] = useState([]);

  const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character) => character.id === data.id);
            if(exist){
               alert("Ya existe")
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
  };

  const onClose = (id) => {
   setCharacters(characters && characters.filter((character) => character.id !== parseInt(id)))
  }

  

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
