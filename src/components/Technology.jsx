export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-pink/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Innovation Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Future is <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Bright</span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                moonlights is pioneering the next generation of LED lighting systems. Our startup is built on 
                innovation, sustainability, and the vision of creating safer environments through quality lighting technology.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full mt-2 animate-pulse"></div>
                  <p className="text-gray-300">Advanced LED technology with superior brightness and longevity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mt-2 animate-pulse delay-150"></div>
                  <p className="text-gray-300">Weather-resistant design for reliable outdoor performance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-green to-neon-blue rounded-full mt-2 animate-pulse delay-300"></div>
                  <p className="text-gray-300">Sustainable design with 90% energy efficiency improvement</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full mt-2 animate-pulse delay-450"></div>
                  <p className="text-gray-300">Professional installation and comprehensive warranty coverage</p>
                </div>
              </div>

              <div className="mt-8 space-x-4">
                <a href="#products" className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 inline-block">
                  Explore Products
                </a>
                <a href="#contact" className="border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-block">
                  Get Quote
                </a>
              </div>
            </div>
            
            {/* Innovation Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl border border-neon-blue/30 overflow-hidden p-8">
                {/* Animated innovation visualization */}
                <div className="relative w-full h-full">
                  {/* Central hub */}
                  <div className="absolute inset-1/3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center animate-pulse">
                    <div className="text-white font-bold text-lg">💡</div>
                  </div>
                  
                  {/* Orbiting elements */}
                  <div className="absolute top-4 left-1/2 w-4 h-4 bg-neon-blue rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 right-4 w-4 h-4 bg-neon-green rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-4 left-1/2 w-4 h-4 bg-neon-purple rounded-full animate-bounce delay-600"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-neon-cyan rounded-full animate-bounce delay-900"></div>
                  
                  {/* Connection lines */}
                  <div className="absolute inset-0 border-2 border-neon-pink/20 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border border-neon-blue/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}