import Link from 'next/link'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <HeroBackground />
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
          Centralized Data Storage for AI Applications
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto">
          One API to store and retrieve any document format. Seamlessly integrate with your AI agents, chatbots, and applications.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-4">
          <Link
            href="#waitlist"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            Get Early Access
          </Link>
          <Link
            href="#features"
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full border border-white transition duration-300"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  )
}