import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocuAPI - Universal API for Document Storage and Retrieval',
  description: 'Store, manage, and efficiently retrieve all types of documents and information with our powerful API. Perfect for businesses of all sizes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

