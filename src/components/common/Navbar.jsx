import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/Logo.png'
import logoLetters from '../../Assets/Images/LogoLetters.png'
import '../../Assets/Styles/Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
          {/* Left Side */}
          <Link to="/" className='navbar-logo'>
          <img src={logo} alt='Vitality Glow Icon' className='logo-icon' ></img>
          <img src={logoLetters} alt='Vitality Glow Letters' className='logo-letters' ></img>
          </Link>
          {/* Lado Derecho */}
          <div className='nav-menu'>
            <Link to="/services" className='nav-link'>Servicios</Link>
            <Link to="/contact" className='nav-link'>Contactános</Link>
            <Link to="/booking" className='nav-link'>Reservar</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar