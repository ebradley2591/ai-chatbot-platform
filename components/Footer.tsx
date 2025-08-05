'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-dark to-gray-900 text-brand-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16">
                <Image
                  src="/HeaderLogo.png"
                  alt="AutomateHub Studio Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-gold">AutomateHub Studio</h3>
                <p className="text-sm text-gray-300">AI Chatbot Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling. Built by AutomateHub Studio for modern automation solutions.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/automatehub-studio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.upwork.com/freelancers/~013b95c303ee223ff2?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Upwork"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.47 7.26H13.53v-1.9c0-.8.64-1.44 1.44-1.44s1.44.64 1.44 1.44v1.9h1.06c.8 0 1.44.64 1.44 1.44s-.64 1.44-1.44 1.44h-1.06v1.9c0 .8-.64 1.44-1.44 1.44s-1.44-.64-1.44-1.44v-1.9h-1.06c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44h1.06z"/>
                </svg>
              </a>
              <a 
                href="https://automatehubstudio.gumroad.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Gumroad"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@automatehubstudio.com" 
                className="group w-10 h-10 bg-brand-gold hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/demo" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                  <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Try Demo
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                  <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                  <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://automatehubstudio.com" className="text-gray-300 hover:text-brand-gold transition-colors duration-200 flex items-center group">
                  <svg className="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Main Site
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">Get the latest updates on our AI chatbot solutions and industry insights.</p>
            <form 
              action="https://assets.mailerlite.com/jsonp/1672306/forms/160173045237941629/subscribe"
              method="post"
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-3"
            >
              <input 
                type="email" 
                name="email" 
                placeholder="Your email address" 
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
              />
              <label className="flex items-center space-x-2 text-xs text-gray-400">
                <input type="checkbox" name="gdpr" required />
                <span>I agree to receive emails from AutomateHub Studio.</span>
              </label>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-opacity-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Terms of Service</a>
              <a href="/cookies" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Cookie Policy</a>
              <a href="/accessibility" className="text-gray-400 hover:text-brand-gold transition-colors duration-200">Accessibility</a>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              &copy; {new Date().getFullYear()} AutomateHub Studio. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 