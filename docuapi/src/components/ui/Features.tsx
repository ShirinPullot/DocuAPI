import { FileText, Zap, Search, Cloud } from 'lucide-react'

const features = [
  {
    name: 'Universal Document Support',
    description: 'Store and manage any file type - text, video, audio, presentations, and more, all through a single API.',
    icon: FileText,
  },
  {
    name: 'AI-Ready Integration',
    description: 'Built for AI applications. Easily connect your agents and chatbots to access and process stored documents.',
    icon: Zap,
  },
  {
    name: 'Intelligent Retrieval',
    description: 'Find exactly what you need with AI-powered semantic search across all your stored documents.',
    icon: Search,
  },
  {
    name: 'Cloud Storage',
    description: 'Securely store your documents in the cloud with advanced encryption and access controls.',
    icon: Cloud,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center group">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-white mb-4 transition-transform group-hover:scale-110">
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

