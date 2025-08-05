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
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-white text-brand-dark font-montserrat">
      <Navigation />

      <main className="flex-1">
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
                Transform your business with AI-powered chatbots. Provide instant customer support and answer common business questions. 
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
                <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">Instant Support</h3>
                <p className="text-sm text-gray-600 text-center">Provide immediate answers to common customer questions</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <RocketLaunchIcon className="w-12 h-12 text-brand-gold mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">Business Information</h3>
                <p className="text-sm text-gray-600 text-center">Share hours, pricing, services, and contact details automatically</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20">
                <ShieldCheckIcon className="w-12 h-12 text-brand-blue mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-brand-dark mb-2 text-center">Professional & Reliable</h3>
                <p className="text-sm text-gray-600 text-center">Consistent, helpful responses that represent your business well</p>
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
                What Our AI Chatbots Can Do
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Built with the same expertise that powers Microsoft 365 automation solutions. 
                Professional, reliable, and designed to help your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: ChatBubbleLeftRightIcon,
                  title: "Smart Responses",
                  description: "AI-powered responses that understand common business questions and provide helpful information",
                  color: "text-brand-blue"
                },
                {
                  icon: ClockIcon,
                  title: "Instant Answers",
                  description: "Customers get immediate responses to questions about hours, pricing, and services",
                  color: "text-brand-gold"
                },
                {
                  icon: CheckCircleIcon,
                  title: "Business Information",
                  description: "Automatically share your business hours, pricing, services, and contact details",
                  color: "text-brand-blue"
                },
                {
                  icon: StarIcon,
                  title: "Professional Service",
                  description: "Consistent, helpful responses that maintain your business's professional image",
                  color: "text-brand-gold"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Reliable Support",
                  description: "Dependable chatbot that's always available to help your customers",
                  color: "text-brand-blue"
                },
                {
                  icon: RocketLaunchIcon,
                  title: "Business Growth",
                  description: "Improve customer satisfaction and reduce support workload with automated responses",
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
                Ready to Improve Your Customer Support?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join small businesses using our AI chatbots to provide better customer service and reduce support workload.
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
      </main>

      <Footer />
    </div>
  )
} 