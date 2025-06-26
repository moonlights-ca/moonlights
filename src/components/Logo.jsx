export default function Logo({ className = "h-8" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Crescent Moon Shape */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink relative overflow-hidden">
          <div className="absolute top-1 right-1 w-6 h-6 rounded-full bg-dark-900"></div>
          {/* LED dots */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-neon-pink rounded-full animate-pulse"></div>
          <div className="absolute top-3 left-1.5 w-1 h-1 bg-neon-blue rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-4 left-2.5 w-1 h-1 bg-neon-cyan rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-5 left-2 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      <span className="ml-3 text-xl font-bold text-white">
        moon<span className="text-neon-pink">lights</span>
      </span>
    </div>
  )
}
