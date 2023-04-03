import "./App.css";
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Cards from "./components/Cards.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();

  const location = useLocation();
  //estado para los personajes
  const [characters, setCharacters] = useState([]);
  // estado para el formulario
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });
  const [access, setAccess] = useState(false);
  const USER = "b4rdock";
  const PASSWORD = "d4rleneAlderson#3103";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    
  };

  const login = (userData) => {
    if (userData.user === USER && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters &&
        characters.filter((character) => character.id !== parseInt(id))
    );
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route
          path="/"
          element={<Login userData={userData} handleChange={handleChange} login={login} />}
        />
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
