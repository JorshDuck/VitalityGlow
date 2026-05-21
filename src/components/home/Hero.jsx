import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { URLS, MESSAGES } from '../../data/Config'
import circularLogo from '/public/images/CircularLogo.png'
import '../../assets/styles/Hero.css'

function Hero() {
  return (
    <section className='hero'> 
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <motion.div
          className='hero-logo'
          initial={{ opacity: 0, scale: 0.5, rotate: -80 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={circularLogo} alt="VitalityGlowLogo" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Vitality & Glow
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Terapías profesionales diseñadas para reconciliar tu cuerpo con tu mente.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            to={URLS.whatsapp(MESSAGES.reservation)}
            target='_blank'
            rel='noopener noreferrer'
            className='hero-btn'
          >
            Reservar
          </Link>
        </motion.div> 
      </div>
    </section>
  )
}

export default Hero