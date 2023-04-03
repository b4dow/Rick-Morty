import SearchBar from './SearchBar'
import { NavLink } from 'react-router-dom'

const Nav = ({onSearch}) => {
  return (
    <div>
        <SearchBar onSearch={onSearch} />
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home" >Home</NavLink>

    </div>
  )
}

export default Nav