import WaitlistForm from '@/components/ui/WaitlistForm'
import FeatureSection from '@/components/ui/FeatureSection'
import PricingSection from '@/components/ui/PricingSection'
import FAQSection from '@/components/ui/FAQSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">DocuAPI</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Universal API for All-Format Document Storage and Retrieval
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Store, manage, and efficiently retrieve documents, images, audio, video, and more with our powerful API. Perfect for businesses of all sizes.
          </p>
          <WaitlistForm />
        </section>
        <FeatureSection />
        <PricingSection />
        <FAQSection />
      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 DocuAPI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

