import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { URLS, MESSAGES } from '../../data/config'
import '../../assets/Styles/CTA.css'

function CTA () {
  return (
    <section className='cta'>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        ¿Listo para tu bienestar?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Reserva tu sesión y empieza a sentir la diferencia
        </motion.p>
      <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileTap={{ scale: 0.95 }}  
      >
        <Link
          to={URLS.whatsapp(MESSAGES.reservation)}
          target='_blank'
          rel='noopener noreferrer'
          className="cta-btn"
        >
          Reserva tu sesión ahora
        </Link>
      </motion.div>
    </section>
  )
}

export default CTA