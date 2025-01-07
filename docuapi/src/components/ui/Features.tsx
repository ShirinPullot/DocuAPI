import { CloudIcon, MagnifyingGlassIcon, BoltIcon, DocumentIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Universal Document Support',
    description: 'Store and manage any file type - text, video, audio, presentations, and more, all through a single API.',
    icon: DocumentIcon,
  },
  {
    name: 'AI-Ready Integration',
    description: 'Built for AI applications. Easily connect your agents and chatbots to access and process stored documents.',
    icon: BoltIcon,
  },
  {
    name: 'Intelligent Retrieval',
    description: 'Find exactly what you need with AI-powered semantic search across all your stored documents.',
    icon: MagnifyingGlassIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

