import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Products from './components/Products.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import CommercialLights from './components/CommercialLights.jsx'

// Home page component
function HomePage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router basename="/moonlights/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commercial-lights" element={<CommercialLights />} />
      </Routes>
    </Router>
  )
}

export default App
