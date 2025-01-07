import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-animate">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
              Universal Document Storage for AI Applications
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-blue-100 md:text-2xl">
              One API to store and retrieve any document format. Seamlessly integrate with your AI agents, chatbots, and applications.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#2563EB] px-8 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-[#1D4ED8] hover:scale-105"
              href="#waitlist"
            >
              Get Early Access
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-white/20 hover:scale-105"
              href="#features"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

