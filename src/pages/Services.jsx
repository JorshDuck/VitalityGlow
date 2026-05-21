import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { URLS, MESSAGES } from '../data/Config'
import services from '../data/Services'
import '../Assets/Styles/Services.css'

function Services() {
  const [activeTag, setActiveTag] = useState('todos')

  const tags = [
    { id: 'todos', name: 'Todos' },
    { id: 'limpieza', name: 'Limpiezas' },
    { id: 'masaje', name: 'Masajes' },
    { id: 'tratamiento', name: 'Tratamientos' },
    { id: 'depilacion', name: 'Depilación' },
  ]

  const filteredServices = activeTag === 'todos'
  ? services
  : services.filter(s => s.tag === activeTag)

  const fadeIn = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div className='services-page'>
      <section className='header'>
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
         Nuestros Servicios
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Encuentra el tratamiento perfecto para ti
        </motion.p>
      </section>

      {/* Filters */}
      <motion.div 
        className='filters'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {tags.map(tag => (
          <button
            key={tag.id}
            className={`filter-btn ${activeTag === tag.id ? 'active' : ''}`}
            onClick={() => setActiveTag(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </motion.div>

      {/* Services */}
      <motion.div
        className='services-page-container'
        variants={staggerContainer}
        initial='hidden'
        animate='visible'
      >
        {filteredServices.map(service => (
          <motion.div
            key={service.id}
            className='service-page-card'
            variants={fadeIn}
            transition={{ duration: 0.3 }}
          >
            <div className='service-page-image'>
              <img src={`/src/Assets/Images/${service.image}`} alt={service.nombre} />
              <span className='service-page-badge'>{service.tag}</span>
            </div>
            <div className='service-page-info'>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className='service-page-details'>
                <span className='service-page-duration'>
                  ⏱ {service.duration}
                </span>
                <span className='service-page-price'>
                  {service.price}
                </span>
              </div>
              <Link
                to={URLS.whatsapp(MESSAGES.reservation)}
                target='_blank'
                rel='noopener noreferrer'
                className='service-page-btn'
              >
                Reservar
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services