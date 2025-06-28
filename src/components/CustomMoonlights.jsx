import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function CustomMoonlights() {
  const [formData, setFormData] = useState({
    chipType: '',
    colorTemperature: '',
    ledDensity: '',
    protectionRating: '',
    pcbWidth: '',
    brightness: '',
    projectType: '',
    quantity: '',
    customerName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const [selectedSpecs, setSelectedSpecs] = useState({})

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Product specifications data
  const specCategories = [
    {
      title: "Chip Types",
      icon: "💎",
      key: "chipType",
      items: ["2219", "2835", "3528", "3535", "5050", "ARGB", "COB"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "Color Temperature",
      icon: "🌡️",
      key: "colorTemperature",
      items: ["2700K", "3000K", "4000K", "6500K", "RGB", "RGBCCT", "RGBW"],
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "LED Density",
      icon: "✨",
      key: "ledDensity",
      items: ["30LEDs", "60LEDs", "120LEDs", "140LEDs", "180LEDs", "200LEDs"],
      color: "from-neon-green to-neon-blue"
    },
    {
      title: "Protection Rating",
      icon: "🛡️",
      key: "protectionRating",
      items: ["IP20", "IP65", "IP67", "IP68"],
      color: "from-neon-purple to-neon-pink"
    },
    {
      title: "PCB Width",
      icon: "📐",
      key: "pcbWidth",
      items: ["4mm", "6mm", "8mm", "10mm", "12mm", "14mm", "16mm"],
      color: "from-neon-cyan to-neon-green"
    },
    {
      title: "Brightness",
      icon: "💡",
      key: "brightness",
      items: ["500 LM/m", "750 LM/m", "1000 LM/m", "1500 LM/m", "2000 LM/m", "3000 LM/m"],
      color: "from-neon-pink to-neon-blue"
    }
  ];

  const handleSpecSelection = (categoryKey, item) => {
    setSelectedSpecs(prev => ({
      ...prev,
      [categoryKey]: item
    }));
    setFormData(prev => ({
      ...prev,
      [categoryKey]: item
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate specifications summary
    const specsText = Object.entries(selectedSpecs)
      .filter(([key, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
    
    const fullMessage = `Custom moonlights Request:
    
Specifications:
${specsText}

Project Details:
Type: ${formData.projectType}
Quantity: ${formData.quantity}

Additional Message:
${formData.message}`;

    // For now, we'll log the form data. In a real implementation, this would be sent to a server
    console.log('Custom moonlights request:', { ...formData, specifications: specsText });
    alert('Your custom moonlights request has been submitted! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-20 w-1 h-96 bg-gradient-to-b from-neon-pink to-transparent opacity-60 animate-pulse"></div>
            <div className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-neon-purple to-transparent opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-64 bg-gradient-to-t from-neon-pink to-transparent opacity-40 animate-pulse delay-500"></div>
            <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-neon-purple to-transparent opacity-40 animate-pulse delay-1500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-6">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-purple transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">Custom</span> moonlights
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Design your perfect LED lighting solution with our custom specification builder
              </p>

              <div className="flex justify-center space-x-4 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-2">∞</div>
                  <div className="text-gray-400 text-sm">Unlimited Options</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple mb-2">24h</div>
                  <div className="text-gray-400 text-sm">Quote Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-pink mb-2">100%</div>
                  <div className="text-gray-400 text-sm">Custom Made</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Builder Section */}
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Perfect</span> Solution
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Select your preferred specifications to create a custom moonlights LED solution tailored to your needs
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {specCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="group relative"
                >
                  <div className="bg-dark-700 rounded-xl border border-gray-700 hover:border-neon-pink/50 transition-all duration-500 overflow-hidden h-full">
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${category.color} p-0.5`}>
                      <div className="bg-dark-700 p-6 rounded-t-xl">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-2xl">{category.icon}</span>
                          <h3 className="text-xl font-bold text-white">{category.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Options */}
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-2">
                        {category.items.map((item, itemIndex) => (
                          <button
                            key={item}
                            onClick={() => handleSpecSelection(category.key, item)}
                            className={`text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 border ${
                              selectedSpecs[category.key] === item
                                ? `bg-gradient-to-r ${category.color} text-white border-transparent scale-105 shadow-lg`
                                : 'bg-dark-800 text-gray-300 border-gray-600 hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-purple hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg'
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Selected indicator */}
                    {selectedSpecs[category.key] && (
                      <div className="px-6 pb-4">
                        <div className="text-center text-sm text-green-400">
                          ✓ Selected: {selectedSpecs[category.key]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Specifications Summary */}
            {Object.keys(selectedSpecs).length > 0 && (
              <div className="mb-16 bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-blue/20">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Custom</span> Configuration
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(selectedSpecs).map(([key, value]) => (
                    <div key={key} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                      <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="text-white font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Custom Quote Form Section */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Request Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-pink to-neon-purple">Custom</span> Quote
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Complete the form below with your specifications and project details to receive a personalized quote
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-blue/20">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Project Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-neon-pink focus:outline-none transition-colors"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="architectural">Architectural</option>
                      <option value="automotive">Automotive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors"
                      placeholder="e.g., 100 meters, 50 units"
                    />
                  </div>

                  {/* Selected Specs Display */}
                  {Object.keys(selectedSpecs).length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Selected Specifications</label>
                      <div className="bg-dark-700 border border-gray-600 rounded-lg p-3 text-sm text-gray-300">
                        {Object.entries(selectedSpecs).map(([key, value], index) => (
                          <div key={key}>
                            <span className="text-neon-pink capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {value}
                            {index < Object.entries(selectedSpecs).length - 1 && <br />}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Additional Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your project requirements, timeline, or any special considerations..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Request Custom Quote
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
