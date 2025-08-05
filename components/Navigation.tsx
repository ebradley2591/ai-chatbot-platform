'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  const isActive = (path: string) => pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-brand-blue to-blue-800 text-brand-white shadow-xl border-b border-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16">
              <Image
                src="/HeaderLogo.png"
                alt="AutomateHub Studio Logo"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight hover:text-brand-gold transition-colors duration-200">
                AutomateHub Studio
              </Link>
              <span className="text-xs md:text-sm text-blue-200 font-medium tracking-wide">AI Chatbot Platform</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link 
              href="/demo" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/demo') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Demo
              {isActive('/demo') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <Link 
              href="/dashboard" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/dashboard') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Dashboard
              {isActive('/dashboard') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <Link 
              href="/pricing" 
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 relative ${
                isActive('/pricing') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Pricing
              {isActive('/pricing') && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-gold transform scale-x-100 transition-transform duration-200"></div>
              )}
            </Link>
            <div className="ml-4 pl-4 border-l border-blue-600">
              <Link 
                href="https://automatehubstudio.com" 
                className="px-6 py-2 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Main Site
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-3 hover:bg-blue-700 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-6 space-y-2 border-t border-blue-600 bg-blue-800/50 rounded-b-lg">
            <Link 
              href="/demo" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/demo') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Demo
            </Link>
            <Link 
              href="/dashboard" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/dashboard') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              href="/pricing" 
              className={`block px-4 py-3 font-semibold transition-all duration-200 rounded-lg mx-2 ${
                isActive('/pricing') 
                  ? 'text-brand-gold bg-blue-700/50' 
                  : 'hover:text-brand-gold hover:bg-blue-700/30'
              }`}
            >
              Pricing
            </Link>
            <div className="px-4 pt-2">
              <Link 
                href="https://automatehubstudio.com" 
                className="block w-full px-6 py-3 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                Main Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 