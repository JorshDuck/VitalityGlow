import { use, useState } from 'react'
import services from '../../Data/Services'
import '../../Assets/Styles/ServicesSlider.css'

function ServicesSlider() {
  const [activeTag, setActiveTag] = useState('todos')
  const [start, setStart] = useState(0)

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

  const cardsPerView = window.innerWidth <= 768 ? 1 : 4
  const visibleServices = filteredServices.slice(start, start + cardsPerView)

  const next = () => {
    if (start + cardsPerView < filteredServices.length) {
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
    <section className='services-container'>
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

        <div className='cards-container'>
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
                  <span className='card-price'>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
        className='slider-btn next'
        onClick={next}
        disabled={start + cardsPerView >= filteredServices.length}
        >
          →
        </button>

      </div>
    </section>
  )
}

export default ServicesSlider