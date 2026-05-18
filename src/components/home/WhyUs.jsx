import { PiFlowerLotusBold, PiStarFourFill, PiHouseBold } from 'react-icons/pi'
import '../../Assets/Styles/WhyUs.css'

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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, tenetur.</p>
        </div>

        <div className='why-us-card golden'>
          <div className='circle'>
            <PiStarFourFill className="why-us-icon" />
          </div>
          <h3>Atención Personalizada</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptates!</p>
        </div>

        <div className='why-us-card red'>
          <div className='circle'>
            <PiHouseBold className="why-us-icon" />
          </div>
          <h3>Servicio a Domicilio</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, excepturi?</p>
        </div>

      </div>
    </section>
  )
}

export default WhyUs