'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ChatBubbleLeftRightIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image
                src="/HeaderLogo.png"
                alt="AutomateHub Studio"
                width={40}
                height={40}
                className="mr-3"
              />
              <h1 className="text-2xl font-bold text-gradient">AutomateHub Studio</h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="https://automatehubstudio.com"
                className="text-brand-blue hover:text-blue-700 transition-colors font-medium"
              >
                ← Back to Main Site
              </Link>
              <Link
                href="/demo"
                className="btn-primary"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] pt-16 pb-24 bg-gradient-to-b from-brand-blue via-blue-400 to-white animate-fade-in">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-brand-dark mb-4 drop-shadow-lg tracking-tight">
              AI Chatbot Support
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-blue-800 mb-6 tracking-wide">
              for Small Businesses
            </div>
            <p className="text-lg md:text-xl mb-8 text-brand-dark/80 max-w-2xl mx-auto">
              Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling. 
              Built by AutomateHub Studio for modern automation solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/demo"
              className="group relative px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-400 text-brand-dark font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-gold focus:ring-opacity-50"
            >
              <span className="relative z-10 flex items-center">
                Try Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/dashboard"
              className="group relative px-8 py-4 border-2 border-brand-blue text-brand-blue font-semibold rounded-xl hover:bg-brand-blue hover:text-white transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-blue focus:ring-opacity-50"
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <ChatBubbleLeftRightIcon className="w-12 h-12 text-brand-blue mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">24/7 Support</h3>
              <p className="text-sm text-gray-600 text-center">Never miss a customer inquiry with round-the-clock AI assistance</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <RocketLaunchIcon className="w-12 h-12 text-brand-gold mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">Lead Generation</h3>
              <p className="text-sm text-gray-600 text-center">Capture and qualify leads automatically with intelligent conversations</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
              <ShieldCheckIcon className="w-12 h-12 text-brand-blue mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">Secure & Reliable</h3>
              <p className="text-sm text-gray-600 text-center">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Why Choose Our AI Chatbots?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built with the same expertise that powers Microsoft 365 automation solutions. 
              Professional, reliable, and designed for business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ChatBubbleLeftRightIcon,
                title: "Smart Conversations",
                description: "AI-powered responses that understand context and provide helpful, accurate information",
                color: "text-brand-blue"
              },
              {
                icon: ClockIcon,
                title: "Instant Response",
                description: "Customers get immediate answers, reducing wait times and improving satisfaction",
                color: "text-brand-gold"
              },
              {
                icon: CheckCircleIcon,
                title: "Easy Integration",
                description: "Simple setup process with one-line code integration to your existing website",
                color: "text-brand-blue"
              },
              {
                icon: StarIcon,
                title: "Custom Training",
                description: "Train your chatbot with your business knowledge, products, and services",
                color: "text-brand-gold"
              },
              {
                icon: ShieldCheckIcon,
                title: "Data Security",
                description: "Enterprise-grade security with data encryption and privacy compliance",
                color: "text-brand-blue"
              },
              {
                icon: RocketLaunchIcon,
                title: "Scalable Growth",
                description: "Grow with your business - handle unlimited conversations and customers",
                color: "text-brand-gold"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
                <h3 className="text-xl font-semibold text-brand-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of small businesses already using our AI chatbots to improve customer service and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-brand-gold text-brand-dark font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Try Free Demo
              </Link>
              <Link
                href="/dashboard"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-brand-blue transition-all duration-300"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gradient">AutomateHub Studio</h3>
              <p className="text-gray-300">
                Modern automation solutions for SharePoint, Teams, and Microsoft 365.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="https://automatehubstudio.com" className="hover:text-white transition-colors">Main Site</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 AutomateHub Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 