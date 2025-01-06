import { CloudArrowUpIcon, MagnifyingGlassIcon, ShieldCheckIcon, DocumentIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'All Format Support',
    description: 'Store and manage any type of file: documents, images, audio, video, PDFs, and more.',
    icon: DocumentIcon,
  },
  {
    name: 'Easy Integration',
    description: 'Seamlessly integrate our API into your existing systems with just a few lines of code.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Powerful Search',
    description: 'Advanced search capabilities allow you to find the exact information you need in seconds, across all file types.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Secure Storage',
    description: 'Your data is encrypted and stored securely, ensuring the highest level of protection for all your files.',
    icon: ShieldCheckIcon,
  },
]

export default function FeatureSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

