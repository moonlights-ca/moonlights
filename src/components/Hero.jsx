export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated LED strips */}
        <div className="absolute top-0 left-20 w-1 h-96 bg-gradient-to-b from-neon-blue to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-neon-pink to-transparent opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-64 bg-gradient-to-t from-neon-green to-transparent opacity-40 animate-pulse delay-500"></div>
        <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-neon-purple to-transparent opacity-40 animate-pulse delay-1500"></div>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-neon-pink/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neon-blue/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Illuminate Tomorrow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">Moonlights</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Professional LED Safety Light Systems for modern environments and enhanced security
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#products" className="btn-primary text-lg px-8 py-4">
            Explore Solutions
          </a>
          <a href="#contact" className="btn-secondary text-lg px-8 py-4">
            Get Started
          </a>
        </div>

        {/* Innovation indicators */}
        <div className="mt-16">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">Powered By Innovation</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <span className="text-gray-400">Energy Efficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-300"></div>
              </div>
              <span className="text-gray-400">IoT Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-600"></div>
              </div>
              <span className="text-gray-400">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse delay-900"></div>
              </div>
              <span className="text-gray-400">Advanced Control</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
