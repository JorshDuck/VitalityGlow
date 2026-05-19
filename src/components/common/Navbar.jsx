import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { URLS, MESSAGES } from '../../Data/Config'
import logo from '../../Assets/Images/Logo.png'
import logoLetters from '../../Assets/Images/LogoLetters.png'
import '../../Assets/Styles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen ] = useState(false)
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Left Side */}
        <Link to="/" className='navbar-logo' onClick={closeMenu}>
        <img src={logo} alt='Vitality Glow Icon' className='logo-icon' ></img>
        <img src={logoLetters} alt='Vitality Glow Letters' className='logo-letters' ></img>
        </Link>

        {/* Menu Responsive */}
        <div
          ref={menuButtonRef}
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>

        {/* Right Side */}
        <div
          ref={menuRef}
          className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <Link to="/" className='nav-link' onClick={closeMenu}>Inicio</Link>
            <Link to="/services" className='nav-link' onClick={closeMenu}>Servicios</Link>
            <Link
              to={URLS.whatsapp(MESSAGES.reservation)}
              target='_blank'
              rel='noopener noreferrer'
              className='nav-link'
              onClick={closeMenu}
            >
              Reservar
            </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar