import { CheckIcon } from '@heroicons/react/24/outline'

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      '1,000 API calls per month',
      '1 GB storage',
      'Basic support',
      'Up to 2 team members',
      'Limited file format support',
    ],
  },
  {
    name: 'Starter',
    price: '$29',
    features: [
      '100,000 API calls per month',
      '10 GB storage',
      'Email support',
      'Up to 5 team members',
      'All file formats supported',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    features: [
      '1,000,000 API calls per month',
      '100 GB storage',
      'Priority support',
      'Up to 20 team members',
      'Advanced analytics',
      'Custom integrations',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited API calls',
      'Unlimited storage',
      'Dedicated support',
      'Unlimited team members',
      'Custom integrations',
      'SLA guarantees',
    ],
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier) => (
            <div key={tier.name} className="border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <p className="text-4xl font-bold mb-6">{tier.price}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
                {tier.price === 'Free' ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

