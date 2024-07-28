import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
         <li className="nav-item">
            <NavLink className="nav-link" to="/animes">Animes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/comics">Comics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

