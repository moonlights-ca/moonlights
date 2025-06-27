import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cmSS1 from '../assets/CM_SS-1.png'
import cmSS2 from '../assets/CM_SS-2.png'
import cmSS3 from '../assets/CM_SS-3.png'
import rlSS1 from '../assets/RL_SS-1.png'
import rlSS2 from '../assets/RL_SS-2.png'
import rlSS3 from '../assets/RL_SS-3.png'

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

// Slideshow component for Residential product images
function ResidentialSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [rlSS1, rlSS2, rlSS3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Residential Light ${index + 1}`}
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
}

// ProductSpecifications component
function ProductSpecifications() {
  const specCategories = [
    {
      title: "Chip Types",
      icon: "💎",
      items: ["2219", "2835", "3528", "3535", "5050", "ARGB", "COB"],
      color: "from-neon-pink to-neon-purple"
    },
    {
      title: "Color Temperature",
      icon: "🌡️",
      items: ["2700K", "3000K", "4000K", "6500K", "RGB", "RGBCCT", "RGBW"],
      color: "from-neon-blue to-neon-cyan"
    },
    {
      title: "LED Density",
      icon: "✨",
      items: ["30LEDs", "60LEDs", "120LEDs", "140LEDs", "180LEDs", "200LEDs"],
      color: "from-neon-green to-neon-blue"
    },
    {
      title: "Protection Rating",
      icon: "🛡️",
      items: ["IP20", "IP65"],
      color: "from-neon-purple to-neon-pink"
    },
    {
      title: "PCB Width",
      icon: "📐",
      items: ["4mm", "6mm", "8mm", "10mm", "12mm", "14mm", "16mm"],
      color: "from-neon-cyan to-neon-green"
    },
    {
      title: "Brightness",
      icon: "💡",
      items: ["500 LM/m", "750 LM/m", "1000 LM/m", "1500 LM/m", "2000 LM/m", "3000 LM/m"],
      color: "from-neon-pink to-neon-blue"
    }
  ];

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Product <span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">Specifications</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive range of LED strip specifications designed to meet every lighting requirement
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group relative spec-category"
            >
              {/* Card */}
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

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={item}
                        className="spec-item spec-item-hover text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 bg-dark-800 text-gray-300 border border-gray-600 hover:bg-gradient-to-r hover:from-neon-pink hover:to-neon-purple hover:text-white hover:border-transparent hover:scale-105 hover:shadow-lg"
                        style={{
                          animationDelay: `${itemIndex * 100}ms`
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-dark-800 to-dark-700 rounded-2xl p-8 border border-neon-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Need Custom Specifications?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Our engineering team can create custom LED solutions tailored to your specific requirements
            </p>
            <button className="bg-gradient-to-r from-neon-pink to-neon-purple text-white px-8 py-4 rounded-lg font-medium hover:shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 text-lg">
              <a href="#contact">
                  Request Custom Quote
              </a>
            </button>
          </div>
        </div>
      </div>
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
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
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
              } else if (product.category === "Residential") {
                return (
                  <Link 
                    to="/residential-lights" 
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
                        <ResidentialSlideshow />
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
                      ) : product.category === "Residential" ? (
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

        {/* Product Specifications Showcase */}
        <ProductSpecifications />
      </div>
    </section>
  )
}
