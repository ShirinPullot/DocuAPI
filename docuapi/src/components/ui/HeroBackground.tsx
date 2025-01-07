export default function HeroBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-gray-900">
          {/* Starfield effect */}
          <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] bg-[length:50px_50px] opacity-10" />
          
          {/* Main portal/wormhole effect */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/20 to-transparent blur-[60px] animate-slow-spin" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400/30 to-transparent blur-[40px] animate-slow-spin-reverse" />
          
          {/* Ambient glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full filter blur-[100px] animate-pulse-slow animation-delay-2000" />
        </div>
      </div>
    )
  }
  