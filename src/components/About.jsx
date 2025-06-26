export default function About() {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Moonlights</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We're a passionate team of innovators on a mission to revolutionize lighting technology and create smarter, safer environments for tomorrow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Our Story */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white">Our Vision</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Founded with a vision to transform how we think about lighting, Moonlights is pioneering the next generation 
              of LED systems. We believe that lighting should be more than just illumination—it should be reliable, 
              efficient, and seamlessly integrated into our environments.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              As a startup, we're not bound by traditional approaches. We're free to innovate, experiment, and push the 
              boundaries of what's possible with LED technology. Our solutions combine cutting-edge engineering, 
              and sustainable design principles.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-pink/20">
                <div className="text-2xl font-bold text-neon-pink mb-2">2024</div>
                <div className="text-gray-400 text-sm">Founded</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-blue/20">
                <div className="text-2xl font-bold text-neon-blue mb-2">Quality</div>
                <div className="text-gray-400 text-sm">Focused</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-green/20">
                <div className="text-2xl font-bold text-neon-green mb-2">90%</div>
                <div className="text-gray-400 text-sm">Energy Efficient</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-purple/20">
                <div className="text-2xl font-bold text-neon-purple mb-2">∞</div>
                <div className="text-gray-400 text-sm">Possibilities</div>
              </div>
            </div>
          </div>

          {/* Innovation Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-dark-900 to-dark-700 rounded-2xl border border-neon-pink/30 overflow-hidden p-8">
              {/* Innovation visualization */}
              <div className="relative w-full h-full">
                {/* Central innovation hub */}
                <div className="absolute inset-1/3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center animate-pulse">
                  <div className="text-white font-bold text-xl">💡</div>
                </div>
                
                {/* Innovation orbits */}
                <div className="absolute inset-0 border-2 border-neon-pink/20 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-8 border border-neon-blue/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse'}}></div>
                
                {/* Innovation points */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 right-4 w-3 h-3 bg-neon-green rounded-full animate-pulse delay-300"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-neon-purple rounded-full animate-pulse delay-600"></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-neon-cyan rounded-full animate-pulse delay-900"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovation First</h3>
            <p className="text-gray-400">
              We challenge conventional thinking and embrace cutting-edge technologies to create revolutionary lighting solutions.
            </p>
          </div>

          <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Sustainability</h3>
            <p className="text-gray-400">
              Environmental responsibility drives our design process, creating energy-efficient solutions for a greener future.
            </p>
          </div>

          <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
            <p className="text-gray-400">
              We work closely with our customers to understand their needs and create customized lighting solutions.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Built by <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Visionaries</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our diverse team of engineers, designers, and innovators is united by a shared passion for creating 
            technology that makes a difference. Together, we're lighting the way to a smarter tomorrow.
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full animate-pulse"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full animate-pulse delay-200"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-neon-blue rounded-full animate-pulse delay-400"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full animate-pulse delay-600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
