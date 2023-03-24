import "./App.css";
import { useState } from "react";
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail";

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

  const Error = () => <h1>Error 404</h1>

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <Cards characters={characters} onClose={onClose} /> */}
      <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
         <Route path="/about" element={<About />} />
         <Route path="/detail/:idDetail" element={<Detail/>} />
         <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
