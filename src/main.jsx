import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Days from './pages/Days'
import Services from './pages/Servicos'
import Footer from './pages/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <About />
    <Days />
    <Services />
    <Footer />

  </StrictMode>,
)
