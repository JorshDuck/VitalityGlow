import { PiFlowerLotusBold, PiStarFourFill, PiHouseBold } from 'react-icons/pi'
import '../../assets/styles/WhyUs.css'

function WhyUs () {
  return(
    <section className='why-us'>
      <h2>¿Por qué Elegirnos?</h2>
      <div className='why-us-grid'>

        <div className='why-us-card green'>
          <div className='circle'>
            <PiFlowerLotusBold className='why-us-icon' />
          </div>
          <h3>Ambiente Relajante</h3>
          <p>Envuelvete en una atmósfera de calma. Aromas naturales y un espacio diseñado para que tu única preocupación sea relajarte.</p>
        </div>

        <div className='why-us-card golden'>
          <div className='circle'>
            <PiStarFourFill className="why-us-icon" />
          </div>
          <h3>Atención Personalizada</h3>
          <p>Cada cuerpo es único. Por eso escuchamos tus necesidades y adaptamos cada sesión para ofrecerte exactamente lo que estás buscando.</p>
        </div>

        <div className='why-us-card red'>
          <div className='circle'>
            <PiHouseBold className="why-us-icon" />
          </div>
          <h3>Servicio a Domicilio</h3>
          <p>¿Prefieres no salir de casa? Disfruta de una sesión completa con productos profesionales en tu propio espacio.</p>
        </div>

      </div>
    </section>
  )
}

export default WhyUs