import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Join the Lighting Revolution!
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your space with next-gen LED technology? Let's innovate together.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-neon-pink focus:ring-neon-pink border-gray-300 rounded"
                    required
                  />
                  <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                    I accept the Terms
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 transform hover:scale-105"
                >
                  Start Innovation
                </button>
              </form>
            </div>

            {/* Visual Element */}
            <div className="bg-dark-900 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Fiber optic style visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-2xl"></div>
                
                {/* Animated fibers */}
                <div className="relative h-80 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 bg-gradient-to-t from-neon-pink to-neon-purple opacity-60 animate-pulse`}
                      style={{
                        left: `${10 + i * 10}%`,
                        height: `${60 + Math.random() * 40}%`,
                        animationDelay: `${i * 200}ms`
                      }}
                    ></div>
                  ))}
                  
                  {/* Central glow */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-neon-pink rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
