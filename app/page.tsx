'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('basic')

  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: '24/7 Customer Support',
      description: 'Never miss a customer inquiry with AI-powered responses available around the clock.'
    },
    {
      icon: ClockIcon,
      title: 'Instant Responses',
      description: 'Customers get immediate answers to common questions without waiting for human support.'
    },
    {
      icon: UserGroupIcon,
      title: 'Lead Generation',
      description: 'Automatically capture and qualify leads through intelligent conversations.'
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics & Insights',
      description: 'Track performance, understand customer needs, and optimize your support strategy.'
    }
  ]

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 49,
      setupFee: 149,
      features: [
        '1 AI Chatbot',
        'Website Integration',
        'Basic FAQ Training',
        'Email Support',
        'Monthly Monitoring'
      ]
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 79,
      setupFee: 249,
      popular: true,
      features: [
        'Everything in Basic',
        'Appointment Scheduling',
        'Lead Capture Forms',
        'CRM Integration',
        'Priority Support',
        'Custom Branding'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 149,
      setupFee: 499,
      features: [
        'Everything in Standard',
        'Multi-language Support',
        'Advanced Analytics',
        'API Access',
        'White-label Options',
        'Dedicated Account Manager'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      business: 'Beauty Salon Owner',
      content: 'Our chatbot handles 80% of customer inquiries automatically. It\'s like having a full-time employee without the overhead.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      business: 'Dental Practice',
      content: 'Appointment scheduling through the chatbot has increased our bookings by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      business: 'Real Estate Agent',
      content: 'The lead qualification feature has saved me hours every week. It\'s transformed how I handle initial client inquiries.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gradient">AutomateHub Studio</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600">Pricing</a>
              <a href="#demo" className="text-gray-600 hover:text-primary-600">Demo</a>
              <button className="btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              AI Chatbot Support for
              <span className="block">Small Businesses</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              Transform your customer service with intelligent AI chatbots. 
              <br />24/7 support, lead generation, and appointment scheduling.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-600 transition-colors flex items-center justify-center">
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Small Businesses Choose Our AI Chatbots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reduce support costs, increase customer satisfaction, and never miss a lead with our intelligent chatbot solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <feature.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs. All plans include setup and ongoing support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`card relative ${plan.popular ? 'ring-2 ring-primary-600' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600">Setup fee: ${plan.setupFee}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.business}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Customer Service?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of small businesses already using our AI chatbots to increase efficiency and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-50 transition-colors">
              Start Your Free Trial
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AutomateHub Studio</h3>
              <p className="text-gray-400">
                Transforming small businesses with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutomateHub Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 