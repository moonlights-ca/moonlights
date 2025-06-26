import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navItems = [
    { label: 'Home', href: isHomePage ? '#home' : '/#home' },
    { label: 'Products', href: isHomePage ? '#products' : '/#products' },
    { label: 'About Us', href: isHomePage ? '#about' : '/#about' },
    { label: 'Contact', href: isHomePage ? '#contact' : '/#contact' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-md border-b border-neon-pink/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-neon-pink transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a href={isHomePage ? "#contact" : "/#contact"} className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-neon-pink focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800 rounded-lg mt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-neon-pink transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href={isHomePage ? "#contact" : "/#contact"} className="w-full mt-4 btn-primary">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
