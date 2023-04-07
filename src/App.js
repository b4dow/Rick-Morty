import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();

  const [access, setAccess] = useState(false);
  const EMAIL = "hackc7360@gmail.com";
  const PASSWORD = "Material@2021";

  const location = useLocation();
  //estado para los personajes
  const [characters, setCharacters] = useState([]);
  // estado para el formulario

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          let exist = characters.find((character) => character.id === data.id);
          if (exist) {
            alert("Ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false)
    navigate("/")
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters &&
        characters.filter((character) => character.id !== parseInt(id))
    );
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav logout={logout} onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
