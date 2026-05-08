import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Booking from './Pages/Booking'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
