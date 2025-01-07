import Hero from '@/components/ui/Hero'
import Features from '@/components/ui/Features'
import DocumentFormats from '@/components/ui/DocumentFormats'
import WaitlistSection from '@/components/ui/WaitlistSection'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <DocumentFormats />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
