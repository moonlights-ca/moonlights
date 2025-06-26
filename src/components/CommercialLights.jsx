import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function CommercialLights() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // Commercial LED products data based on the reference image
  const commercialProducts = [
    {
      id: 1,
      name: "5050RGB+2835W-10/60+240D-24V-15mm",
      image: "/api/placeholder/300/200",
      category: "RGB+White Strip",
      itemCode: "ML-5050RGB-15",
      length: "5M",
      watts: "14.4W/M",
      volts: "24V",
      ipRating: "IP65"
    },
    {
      id: 2,
      name: "5050RGB+2835W-8/56+120D-24V-15mm",
      image: "/api/placeholder/300/200",
      category: "RGB+White Strip",
      itemCode: "ML-5050RGB-8",
      length: "5M",
      watts: "12.0W/M",
      volts: "24V",
      ipRating: "IP65"
    },
    {
      id: 3,
      name: "5050RGB-2/80D-36V-12mm",
      image: "/api/placeholder/300/200",
      category: "RGB Strip",
      itemCode: "ML-5050RGB-12",
      length: "5M",
      watts: "7.2W/M",
      volts: "36V",
      ipRating: "IP44"
    },
    {
      id: 4,
      name: "2835RGB-2/120D-24V-10mm",
      image: "/api/placeholder/300/200",
      category: "RGB Strip",
      itemCode: "ML-2835RGB-10",
      length: "5M",
      watts: "9.6W/M",
      volts: "24V",
      ipRating: "IP67"
    },
    {
      id: 5,
      name: "5050RGB-2/60D-24V-12mm",
      image: "/api/placeholder/300/200",
      category: "RGB Strip",
      itemCode: "ML-5050RGB-24",
      length: "5M",
      watts: "14.4W/M",
      volts: "24V",
      ipRating: "IP65"
    },
    {
      id: 6,
      name: "2835RGB-8/96D-24V-8mm",
      image: "/api/placeholder/300/200",
      category: "RGB Strip",
      itemCode: "ML-2835RGB-8",
      length: "5M",
      watts: "19.2W/M",
      volts: "24V",
      ipRating: "IP68"
    },
    {
      id: 7,
      name: "2835W-4/120D-24V-10mm",
      image: "/api/placeholder/300/200",
      category: "White Strip",
      itemCode: "ML-2835W-10",
      length: "5M",
      watts: "9.6W/M",
      volts: "24V",
      ipRating: "IP65"
    },
    {
      id: 8,
      name: "2835W-6/120D-24V-10mm",
      image: "/api/placeholder/300/200",
      category: "White Strip",
      itemCode: "ML-2835W-6",
      length: "5M",
      watts: "14.4W/M",
      volts: "24V",
      ipRating: "IP67"
    }
  ]

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-20 w-1 h-96 bg-gradient-to-b from-neon-blue to-transparent opacity-60 animate-pulse"></div>
            <div className="absolute top-0 right-20 w-1 h-96 bg-gradient-to-b from-neon-cyan to-transparent opacity-60 animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-1 h-64 bg-gradient-to-t from-neon-blue to-transparent opacity-40 animate-pulse delay-500"></div>
            <div className="absolute bottom-0 right-1/4 w-1 h-64 bg-gradient-to-t from-neon-cyan to-transparent opacity-40 animate-pulse delay-1500"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-6">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-neon-blue hover:text-neon-cyan transition-colors text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Home
                </Link>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan animate-glow">Commercial</span> LED Systems
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional-grade LED solutions designed for scalability, durability, and high-traffic commercial environments
              </p>

              <div className="flex justify-center space-x-4 mb-12">
                <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-blue/20">
                  <div className="text-2xl font-bold text-neon-blue mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Reliability</div>
                </div>
                <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-cyan/20">
                  <div className="text-2xl font-bold text-neon-cyan mb-2">IP68</div>
                  <div className="text-gray-400 text-sm">Protection</div>
                </div>
                <div className="text-center p-4 bg-dark-700 rounded-lg border border-neon-blue/20">
                  <div className="text-2xl font-bold text-neon-blue mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Hours Lifespan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery Section */}
        <section className="py-20 bg-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Product <span className="bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Showcase</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive range of commercial LED strip lights designed for professional applications
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {commercialProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-dark-700 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-blue/20 hover:scale-105">
                    {/* Product Image Placeholder */}
                    <div className="aspect-square bg-gradient-to-br from-neon-blue to-neon-cyan p-0.5">
                      <div className="w-full h-full bg-dark-800 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                        <div className="flex space-x-2">
                          <div className="w-2 h-12 bg-gradient-to-t from-neon-blue to-neon-cyan rounded animate-pulse"></div>
                          <div className="w-2 h-16 bg-gradient-to-t from-neon-cyan to-neon-blue rounded animate-pulse delay-150"></div>
                          <div className="w-2 h-10 bg-gradient-to-t from-neon-blue to-neon-cyan rounded animate-pulse delay-300"></div>
                          <div className="w-2 h-14 bg-gradient-to-t from-neon-cyan to-neon-blue rounded animate-pulse delay-450"></div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/10 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="text-sm font-semibold mb-2 text-white group-hover:text-neon-blue transition-colors truncate">
                        {product.name}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-gradient-to-r from-neon-blue to-neon-cyan text-white text-xs rounded-full font-medium mb-2">
                        {product.category}
                      </span>
                      <div className="text-xs text-gray-400 space-y-1">
                        <div>Code: {product.itemCode}</div>
                        <div>{product.watts} • {product.volts}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="py-20 bg-dark-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical <span className="bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">Specifications</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Detailed specifications for our commercial LED lighting solutions
              </p>
            </div>

            {/* Creative Table Design */}
            <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl border border-neon-blue/20 overflow-hidden">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-neon-blue to-neon-cyan p-1">
                <div className="bg-dark-800 rounded-t-xl">
                  <div className="grid grid-cols-6 gap-4 p-6 text-white font-bold">
                    <div className="text-center">ITEM CODE</div>
                    <div className="text-center">LENGTH</div>
                    <div className="text-center">WATTS</div>
                    <div className="text-center">VOLTS</div>
                    <div className="text-center">IP RATING</div>
                    <div className="text-center">CATEGORY</div>
                  </div>
                </div>
              </div>

              {/* Table Body */}
              <div className="space-y-2 p-6">
                {commercialProducts.map((product, index) => (
                  <div key={product.id} className="grid grid-cols-6 gap-4 p-4 bg-dark-700 rounded-lg border border-gray-600 hover:border-neon-blue/50 transition-all duration-300 hover:bg-dark-600 group">
                    <div className="text-center text-neon-blue font-mono text-sm group-hover:text-neon-cyan transition-colors">
                      {product.itemCode}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.length}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.watts}
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.volts}
                    </div>
                    <div className="text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        product.ipRating === 'IP68' ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' :
                        product.ipRating === 'IP67' ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30' :
                        product.ipRating === 'IP65' ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30' :
                        'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                      }`}>
                        {product.ipRating}
                      </span>
                    </div>
                    <div className="text-center text-gray-300 text-sm">
                      {product.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">High Efficiency</h3>
                <p className="text-gray-400">
                  Advanced LED technology delivering superior lumens per watt for maximum energy savings
                </p>
              </div>

              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Weather Protection</h3>
                <p className="text-gray-400">
                  IP44 to IP68 rated enclosures ensuring reliable operation in any environment
                </p>
              </div>

              <div className="text-center p-8 bg-dark-700 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Easy Installation</h3>
                <p className="text-gray-400">
                  Modular design with standardized connections for quick and reliable installations
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-blue/20">
                <h3 className="text-3xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
                  Ready to Illuminate Your Commercial Space?
                </h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get professional consultation and custom solutions tailored to your commercial lighting needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link 
                    to="/#contact" 
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Quote
                  </Link>
                  <Link 
                    to="/#products" 
                    className="btn-secondary text-lg px-8 py-4"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
