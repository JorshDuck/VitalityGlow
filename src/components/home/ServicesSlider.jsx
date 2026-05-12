import { use, useState } from 'react'
import services from '../../Data/Services'
import '../../Assets/Styles/ServicesSlider.css'

function ServicesSlider() {
  const [activeTag, setActiveTag] = useState('all')
  const [start, setStart] = useState(0)

  // Filter
  const filteredServices = activeTag === 'all'
  ? services
  : services.filter(s => s.tag === activeTag)

  const visibleServices = filteredServices.slice(start, start + 4)
  const tags = [
    { id: 'all', name: 'Todos' },
    { id: 'limpieza', name: 'Limpiezas' },
    { id: 'masaje', name: 'Masajes' },
    { id: 'tratamiento', name: 'Tratamientos' },
    { id: 'depilacion', name: 'Depilación' },
  ]

  const next = () => {
    if (start + 4 < filteredServices.length) {
      setStart(start + 1)
    }
  }

  const previous = () => {
    if (start > 0) {
      setStart(start - 1)
    }
  }

  const changeTag = (tags) => {
    setActiveTag(tags)
    setStart(0)
  }

  return (
    <section className='services-slider'>
      <h2>Nuestros Servicios</h2>

      {/* Filters */}
      <div className='filters'>
        {tags.map(tag => (
          <button
            key={tag.id}
            className={`filter-btn ${activeTag === tag.id ? 'active' : ''}`}
            onClick={() => changeTag(tag.id)}
          >
            {tag.name}
          </button>
        ))}
      </div>

      {/* Slider */}
      <div className='slider-container'>
        <button
        className='slider-btn prev'
        onClick={previous}
        disabled={start === 0}
        >
          ←
        </button>

        <div className='cards-wrapper'>
          {visibleServices.map(service => (
            <div key={service.id} className='service-card'>
              <div className='card-image'>
                <img src={`/src/Assets/Images/${service.image}`} alt={service.name} />
              </div>
              <div className='card-info'>
                <span className='card-tag'>{service.tag}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className='card-details'>
                  <span>⏱ {service.duration}</span>
                  <span className='card-price'>{service.price}Bs.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
        className='slider-btn next'
        onClick={next}
        disabled={start + 4 >= filteredServices.length}
        >
          →
        </button>

      </div>
    </section>
  )
}

export default ServicesSlider