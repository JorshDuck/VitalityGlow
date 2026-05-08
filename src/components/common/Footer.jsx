import { Link } from 'react-router-dom'
import '../../Assets/Styles/Footer.css'

function Footer () {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Column 1 */}
        <div className='footer-column'>
          <h3>Vitality & Glow</h3>
          <p>Cada terapia es un ritual que transforma el estrés en bienestar, libera tension y recupera la armonía que el estrés quita diariamente. Amarte es el primer paso para brillar.</p>
          <p>Porque cuidarte no es un lujo, es tu prioridad.</p>
        </div>
        {/* Column 2 */}
        <div className='footer-column'>
          <h3>Enlaces</h3>
          <Link>Inicio</Link>
          <Link>Servicios</Link>
          <Link>Contáctanos</Link>
          <Link>Reservar</Link>
        </div>
        {/* Column 3 */}
        <div className='footer-column'>
          <h3>Contáctanos</h3>
          <p>Calle Huanchaca #</p>
          <p>(+591) 74 94 60 21</p>
          <p>Whatsapp</p>
        </div>
        {/* Column 4 */}
        <div className='footer-column'>
          <h3>Horario</h3>
          <p>Lunes a Viernes: 08:00 - 20:00</p>
          <p>Sábados: 10:00 - 15:00</p>
          <p>Domingos: Cerrado</p>
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