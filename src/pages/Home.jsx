import '../Assets/Styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <section className='hero'> 
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1>Vitality & Glow</h1>
          <p>Terapías profesionales diseñadas para reconciliar tu cuerpo con tu mente.</p>
          <a href="/booking" className='hero-btn'>Reserva tu sesión</a>
        </div>
      </section>
    </div>
  )
}

export default Home