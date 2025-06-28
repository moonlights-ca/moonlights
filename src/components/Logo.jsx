export default function Logo({ className = "h-12" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Crescent Moon Shape */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-pink relative overflow-hidden">
          <div className="absolute top-1.5 right-1.5 w-9 h-9 rounded-full bg-dark-900"></div>
          {/* LED dots */}
          <div className="absolute top-3 left-3.5 w-2.5 h-2.5 bg-neon-pink rounded-full animate-pulse"></div>
          <div className="absolute top-4.5 left-2.5 w-2.5 h-2.5 bg-neon-blue rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-6 left-4.5 w-2.5 h-2.5 bg-neon-cyan rounded-full animate-pulse delay-150"></div>
          <div className="absolute top-7.5 left-3.5 w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
      <span className="ml-4 text-2xl font-bold text-white">
        moon<span className="bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple animate-glow">lights</span>
      </span>
    </div>
  )
}
