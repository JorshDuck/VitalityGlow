import circularLogo from '../../Assets/Images/CircularLogo.png'
import '../../Assets/Styles/Hero.css'

function Hero() {
  return (
    <section className='hero'> 
      <div className='hero-overlay'></div>
      <div className='hero-content'>
        <div className='hero-logo'>
          <img src={circularLogo} alt="VitalityGlowLogo" />
        </div>
        <h1>Vitality & Glow</h1>
        <p>Terapías profesionales diseñadas para reconciliar tu cuerpo con tu mente.</p>
        <a href="/booking" className='hero-btn'>Agendar</a>
      </div>
    </section>
  )
}

export default Hero