import { NavLink } from 'react-router-dom'

const getLinkClassName = ({ isActive }) =>
  isActive ? 'nav-link active' : 'nav-link'

function Navbar() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        Learning App
      </NavLink>

      <nav aria-label="Main navigation">
        <NavLink className={getLinkClassName} to="/" end>
          Home
        </NavLink>
        <NavLink className={getLinkClassName} to="/about">
          About
        </NavLink>
        <NavLink className={getLinkClassName} to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
