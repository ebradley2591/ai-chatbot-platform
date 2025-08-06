'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 29.99,
      setupFee: 99.00,
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI Chatbot',
        'Basic FAQ Training',
        'Website Integration',
        'Email Support',
        'Monthly Analytics',
        'Standard Response Time'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 59.99,
      setupFee: 199.00,
      description: 'Ideal for growing businesses with multiple needs',
      features: [
        '2 AI Chatbots',
        'Advanced Training',
        'Appointment Scheduling',
        'Lead Capture',
        'CRM Integration',
        'Priority Support',
        'Custom Branding'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: 99.99,
      setupFee: 299.00,
      description: 'Complete solution for established businesses',
      features: [
        'Unlimited Chatbots',
        'Custom AI Training',
        'Multi-language Support',
        'Advanced Analytics',
        'API Access',
        'White-label Options',
        '24/7 Support',
        'Dedicated Account Manager'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-montserrat">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-blue to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in delay-200">
              Choose the perfect plan for your business needs
            </p>
            <div className="flex justify-center items-center space-x-4 animate-fade-in delay-400">
              <span className="text-blue-100">Monthly billing</span>
              <div className="relative">
                <input type="checkbox" className="sr-only" />
                <div className="w-12 h-6 bg-blue-400 rounded-full"></div>
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
              </div>
              <span className="text-blue-100">Annual billing (Save 20%)</span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-brand-gold text-brand-dark px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-brand-dark mb-4">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-brand-blue">${plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    
                    <div className="text-sm text-gray-500 mb-6">
                      + ${plan.setupFee} one-time setup fee
                    </div>

                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-brand-gold text-brand-dark hover:bg-yellow-400'
                        : 'bg-brand-blue text-white hover:bg-blue-700'
                    }`}>
                      Get Started
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-brand-dark mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-brand-dark mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">
                  How long does setup take?
                </h3>
                <p className="text-gray-600">
                  Most chatbots are ready within 24-48 hours. We'll work with you to gather your business information and train the AI on your specific needs.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">
                  Can I upgrade or downgrade my plan?
                </h3>
                <p className="text-gray-600">
                  Yes! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">
                  What kind of support do you provide?
                </h3>
                <p className="text-gray-600">
                  Basic plans include email support, Standard plans get priority support, and Premium plans include 24/7 support with a dedicated account manager.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer a 14-day free trial on all plans. No credit card required to start your trial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-brand-blue to-blue-600 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of businesses already using AI chatbots to improve customer service and grow their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo"
                className="bg-brand-gold text-brand-dark px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Try Demo
              </a>
              <a
                href="/auth/signin"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 