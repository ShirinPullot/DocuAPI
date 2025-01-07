import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocuAPI - Universal Document Storage & Retrieval API',
  description: 'Store and retrieve any type of document - text, video, audio, presentations. Seamlessly integrate with AI agents and applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

