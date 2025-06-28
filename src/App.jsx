import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import Technology from './components/Technology.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CommercialLights from './components/CommercialLights.jsx'
import ResidentialLights from './components/ResidentialLights.jsx'
import CustomMoonlights from './components/CustomMoonlights.jsx'

// Home page component
function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Technology />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commercial-lights" element={<CommercialLights />} />
        <Route path="/residential-lights" element={<ResidentialLights />} />
        <Route path="/custom-moonlights" element={<CustomMoonlights />} />
      </Routes>
    </Router>
  )
}

export default App
