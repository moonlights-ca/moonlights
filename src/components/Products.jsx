import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cmSS1 from '../assets/CM_SS-1.png'
import cmSS2 from '../assets/CM_SS-2.png'
import cmSS3 from '../assets/CM_SS-3.png'

// Slideshow component for Commercial product images
function CommercialSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cmSS1, cmSS2, cmSS3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Commercial Light ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Residential Lights",
      description: "High-quality LED safety systems for modern homes and gated communities. Features weather resistance, motion detection, and energy efficiency.",
      image: "/api/placeholder/300/200",
      category: "Residential",
      features: ["Motion Sensors", "Weather Resistant", "Energy Efficient", "Easy Installation"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      id: 2,
      name: "Commercial Lights", 
      description: "Professional-grade LED solutions for commercial spaces. Scalable, durable, and designed for high-traffic environments.",
      image: "/api/placeholder/300/200",
      category: "Commercial",
      features: ["Scalable System", "Durable Design", "Professional Grade", "24/7 Reliability"],
      color: "from-neon-blue to-neon-cyan"
    }
  ]

  return (
    <section id="products" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">LED Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional LED lighting systems built for reliability and efficiency. 
            Designed for modern environments with focus on quality and performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {products.map((product) => {
            const ProductCard = ({ children }) => {
              if (product.category === "Commercial") {
                return (
                  <Link 
                    to="/commercial-lights" 
                    className="group cursor-pointer block"
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <div className="group cursor-pointer">
                  {children}
                </div>
              );
            };

            return (
              <ProductCard key={product.id}>
                <div className="bg-dark-700 rounded-xl overflow-hidden border border-gray-700 hover:border-neon-pink/50 transition-all duration-500 hover:shadow-xl hover:shadow-neon-pink/20 hover:scale-105">
                  {/* Product Image Placeholder */}
                  <div className={`aspect-video bg-gradient-to-br ${product.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-800 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      {product.category === "Residential" && (
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center animate-pulse">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"></div>
                            </div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green rounded-full animate-ping"></div>
                        </div>
                      )}
                      {product.category === "Commercial" && (
                        <CommercialSlideshow />
                      )}
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-neon-pink transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <span key={index} className="inline-block px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-600">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${product.color} text-white text-sm rounded-full font-medium`}>
                        {product.category}
                      </span>
                      {product.category === "Commercial" ? (
                        <span 
                          className="text-neon-pink hover:text-neon-purple transition-colors text-sm font-medium"
                          onClick={(e) => e.preventDefault()} // Prevent double navigation since whole card is clickable
                        >
                          Learn More →
                        </span>
                      ) : (
                        <button className="text-neon-pink hover:text-neon-purple transition-colors text-sm font-medium">
                          Learn More →
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </ProductCard>
            );
          })}
        </div>

        {/* Innovation Showcase */}
        <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-pink/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Innovation Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                The Future is Bright
              </h3>
              <p className="text-gray-400 mb-6 text-lg">
                Moonlights is pioneering the next generation of LED lighting systems. Our startup is built on 
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

              <div className="mt-8">
                <button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300">
                  Join the Revolution
                </button>
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
