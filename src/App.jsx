import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommercialLights from './components/CommercialLights'

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
    <Router basename="/moonlights">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commercial-lights" element={<CommercialLights />} />
      </Routes>
    </Router>
  )
}

export default App
