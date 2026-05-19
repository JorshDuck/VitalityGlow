import { Link } from 'react-router-dom'
import { PiMapPinBold, PiPhoneBold, PiClockBold } from 'react-icons/pi'
import { SiWhatsapp } from 'react-icons/si'
import { CONFIG, URLS, MESSAGES } from '../../Data/Config'
import '../../Assets/Styles/Footer.css'


function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Column 1 - Logo */}
        <div className='footer-column'>
          <h3>Vitality & Glow</h3>
          <p>Cada terapia es un ritual que transforma el estrés en bienestar, libera tension y recupera la armonía que el estrés quita diariamente. Amarte es el primer paso para brillar.</p>
          <p>Porque cuidarte no es un lujo, es tu prioridad.</p>
        </div>
        {/* Column 2 - Links */}
        <div className='footer-column'>
          <h3>Enlaces</h3>
          <Link to='/'>Inicio</Link>
          <Link to='/Services'>Servicios</Link>
          <Link
            to={URLS.whatsapp(MESSAGES.reservation)}
            target='_blank'
            rel='noopener noreferrer'
          >
            Reservar
          </Link>
        </div>
        {/* Column 3 - Contact */}
        <div className='footer-column'>
          <h3>Contáctanos</h3>
          <a
            href={URLS.maps}
            target='_blank'
            rel='noopener noreferrer'
          >
            <PiMapPinBold /> {CONFIG.address}
          </a>
          <a
            href={URLS.whatsapp(MESSAGES.reservation)}
            target='_blank'
            rel='noopener noreferrer'
          ><SiWhatsapp/>7494-6021</a>
        </div>
        {/* Column 4 - Schedule */}
        <div className='footer-column'>
          <h3>Horario</h3>
          <p>De Lunes a Domingo</p>
          <p><PiClockBold />  13:00 - 22:00</p>
        </div>
      </div>
      {/* Bottom Line */}
      <div className='footer-bottom'>
        <p>© {new Date().getFullYear()} Vitality & Glow - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer