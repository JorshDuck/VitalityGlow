import { motion } from 'framer-motion'
import Hero from '../components/Home/Hero'
import ServicesSlider from '../components/Home/ServicesSlider'
import WhyUs from '../components/Home/WhyUs'
import CTA from '../components/Home/CTA'

function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='home'>
      <Hero />
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
      >
        <WhyUs />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <ServicesSlider />
      </motion.div>
      

      <div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.5 }}
        variants={fadeIn}
      >
        <CTA />
      </div>
      
    </div>
  )
}

export default Home