import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import About from './pages/About'
import Feiras from './pages/Feiras'
import Services from './pages/Servicos'
import Footer from './pages/Footer'

import GlobalStyles from './styles/globalStyles.js';
import { ThemeProvider } from 'styled-components'
import theme from "../src/styles/themes.js"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
      <About />
      <Feiras />
      <Services />
      <Footer />
    </ThemeProvider>

  </StrictMode>,
)
