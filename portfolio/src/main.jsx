import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Portfolio from './components/Portfolio.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Projects/>
    <Portfolio/>

  </BrowserRouter>,
)
