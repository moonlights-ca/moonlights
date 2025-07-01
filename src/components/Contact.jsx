import { useState } from 'react'

export default function Contact() {
  const [result, setResult] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [inputActivity, setInputActivity] = useState(0)

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)

    formData.append("access_key", "48813945-89bd-4cde-8e90-4aca63b6d1d3")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form Submitted Successfully")
      event.target.reset()
      setIsTyping(false)
      setInputActivity(0)
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  const handleInputFocus = () => {
    setIsTyping(true)
    setInputActivity(prev => prev + 1)
  }

  const handleInputBlur = () => {
    setIsTyping(false)
  }

  const handleInputChange = () => {
    setInputActivity(prev => prev + 1)
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

              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
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
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neon-pink focus:border-transparent text-gray-900"
                    placeholder="Tell us about your project..."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 transform hover:scale-105"
                >
                  Send message!
                </button>
              </form>

              {/* Result display */}
              {result && (
                <div className="mt-4 text-center">
                  <span className={`text-sm font-medium ${
                    result === "Form Submitted Successfully" 
                      ? "text-green-600" 
                      : result === "Sending...." 
                        ? "text-blue-600" 
                        : "text-red-600"
                  }`}>
                    {result}
                  </span>
                </div>
              )}
            </div>

            {/* Visual Element */}
            <div className="bg-dark-900 p-8 md:p-12 flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Fiber optic style visual */}
                <div className={`absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 rounded-2xl transition-all duration-300 ${isTyping ? 'from-neon-pink/40 to-neon-purple/40' : ''}`}></div>
                
                {/* Animated fibers */}
                <div className="relative h-80 overflow-hidden rounded-2xl">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 bg-gradient-to-t from-neon-pink to-neon-purple transition-all duration-300 ${
                        isTyping ? 'opacity-80 animate-pulse' : 'opacity-60 animate-pulse'
                      }`}
                      style={{
                        left: `${10 + i * 10}%`,
                        height: `${60 + Math.random() * 40}%`,
                        animationDelay: `${i * 200}ms`,
                        animationDuration: isTyping ? '0.8s' : '2s'
                      }}
                    ></div>
                  ))}
                  
                  {/* Central glow - enhanced when typing */}
                  <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 rounded-full transition-all duration-300 ${
                    isTyping 
                      ? 'w-12 h-12 bg-neon-pink animate-pulse shadow-lg shadow-neon-pink/50' 
                      : 'w-8 h-8 bg-neon-pink animate-pulse'
                  }`}></div>
                  
                  {/* Additional responsive elements */}
                  {isTyping && (
                    <>
                      {/* Ripple effects when typing */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-neon-pink/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-neon-purple/20 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                      
                      {/* Side sparkles */}
                      <div className="absolute top-10 left-8 w-2 h-2 bg-neon-blue rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-20 right-12 w-2 h-2 bg-neon-cyan rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                      <div className="absolute bottom-20 left-12 w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.9s'}}></div>
                      <div className="absolute top-32 right-8 w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '1.1s'}}></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}