import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
      <button onClick={logout} >Logout</button>
    </div>
  );
};

export default Nav;
