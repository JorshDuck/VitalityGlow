import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import services from '../Data/Services'
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
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='services-page'>
      <section className='header'>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
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
        className="filters"
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
      <motion.div className='services-container'>
        {filteredServices.map(service => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <div className="service-image">
              <img src={`/src/Assets/Images/${service.image}`} alt={service.nombre} />
              <span className="service-tag-badge">{service.tag}</span>
            </div>
            <div className='service-info'>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className='service-details'>
                <span className='service-duration'>
                  ⏱ {service.duration}
                </span>
                <span className='service-price'>
                  {service.price} Bs
                </span>
              </div>
              <Link to="/booking" className='service-btn'>Reservar</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Services