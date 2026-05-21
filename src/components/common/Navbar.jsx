import { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { URLS, MESSAGES } from '../../data/Config'
import logo from '../../assets/images/Logo.png'
import logoLetters from '../../assets/images/LogoLetters.png'
import '../../assets/styles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen ] = useState(false)
  const menuButtonRef = useRef(null)
  const menuRef = useRef(null)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

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

   const scrollToTop = (e, path) => {
    closeMenu()

    if (location.pathname === path) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Left Side */}
        <Link to="/" className='navbar-logo' onClick={(e) => {scrollToTop(e, '/')}}>
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
            <Link to="/" className='nav-link' onClick={(e) => {scrollToTop(e, '/')}}>Inicio</Link>
            <Link to="/services" className='nav-link' onClick={(e) => {scrollToTop(e, '/services')}}>Servicios</Link>
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