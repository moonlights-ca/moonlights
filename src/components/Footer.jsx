import Logo from './Logo'

export default function Footer() {
  const footerLinks = {
    'Company': [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    'Support': [
      { label: 'Help Center', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' }
    ]
  }

  return (
    <footer className="bg-dark-900 border-t border-neon-pink/20">
      {/* Animated line */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo className="h-10 mb-6" />
            <p className="text-gray-400 mb-6 max-w-md">
              Next-generation LED technology startup revolutionizing professional lighting solutions. 
              Join us in illuminating the future with innovation, sustainability, and cutting-edge design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks['Company'].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-neon-pink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks['Support'].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-neon-pink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Moonlights. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-neon-pink transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
