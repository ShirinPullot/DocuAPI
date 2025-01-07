import Link from 'next/link'
import HeroBackground from './HeroBackground'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Universal Document Storage for AI Applications
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          One API to store and retrieve any document format. Seamlessly integrate with your AI agents, chatbots, and applications.
        </p>
        <div className="space-x-4">
          <Link href="#waitlist" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Get Early Access
          </Link>
          <Link href="#features" className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full border border-white transition duration-300">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  )
}

