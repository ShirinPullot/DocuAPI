'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0A1437]/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold text-white hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.svg" alt="DocuAPI Logo" width={40} height={40} />
            <span>DocuAPI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#formats" className="text-gray-300 hover:text-white transition-colors">
              Formats
            </Link>
            <Link href="#waitlist" className="text-gray-300 hover:text-white transition-colors">
              Waitlist
            </Link>
            <Link 
              href="#waitlist" 
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-all"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-[#0A1437]/95 backdrop-blur-sm border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="#features" 
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#formats" 
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Formats
              </Link>
              <Link 
                href="#waitlist" 
                className="block text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Waitlist
              </Link>
              <Link 
                href="#waitlist" 
                className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-all text-center text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Early Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

