const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Setting up MongoDB database for AI Chatbot Platform...')

  // Create sample plans
  const basicPlan = await prisma.plan.create({
    data: {
      name: 'Basic',
      price: 29.99,
      setupFee: 99.00,
      features: [
        '1 AI Chatbot',
        'Basic FAQ Training',
        'Website Integration',
        'Email Support',
        'Monthly Analytics'
      ],
      isActive: true
    }
  })

  const standardPlan = await prisma.plan.create({
    data: {
      name: 'Standard',
      price: 59.99,
      setupFee: 199.00,
      features: [
        '2 AI Chatbots',
        'Advanced Training',
        'Appointment Scheduling',
        'Lead Capture',
        'CRM Integration',
        'Priority Support'
      ],
      isActive: true
    }
  })

  const premiumPlan = await prisma.plan.create({
    data: {
      name: 'Premium',
      price: 99.99,
      setupFee: 299.00,
      features: [
        'Unlimited Chatbots',
        'Custom AI Training',
        'Multi-language Support',
        'Advanced Analytics',
        'API Access',
        'White-label Options',
        '24/7 Support'
      ],
      isActive: true
    }
  })

  console.log('✅ Sample plans created:')
  console.log(`- Basic: $${basicPlan.price}/month`)
  console.log(`- Standard: $${standardPlan.price}/month`)
  console.log(`- Premium: $${premiumPlan.price}/month`)

  // Create sample admin user
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@automatehubstudio.com',
      name: 'Admin User',
      password: '$2b$10$example.hash.here', // You'll need to hash this properly
      role: 'ADMIN'
    }
  })

  console.log('✅ Admin user created:', adminUser.email)

  // Create sample business
  const sampleBusiness = await prisma.business.create({
    data: {
      name: 'AutomateHub Studio',
      description: 'AI Automation Solutions for Small Businesses',
      website: 'https://automatehubstudio.com',
      industry: 'Technology',
      userId: adminUser.id
    }
  })

  console.log('✅ Sample business created:', sampleBusiness.name)

  // Create sample chatbot
  const sampleChatbot = await prisma.chatbot.create({
    data: {
      name: 'AutomateHub Support Bot',
      description: 'AI assistant for AutomateHub Studio website',
      isActive: true,
      config: {
        welcomeMessage: 'Hello! I\'m your AI assistant. How can I help you today?',
        businessHours: 'Mon-Fri 9AM-6PM EST',
        contactEmail: 'support@automatehubstudio.com',
        services: [
          'AI Chatbot Development',
          'Business Process Automation',
          'Custom Software Solutions'
        ]
      },
      businessId: sampleBusiness.id
    }
  })

  console.log('✅ Sample chatbot created:', sampleChatbot.name)

  console.log('\n🎉 Database setup complete!')
  console.log('\nNext steps:')
  console.log('1. Update your .env file with your MongoDB connection string')
  console.log('2. Run: npx prisma generate')
  console.log('3. Run: npx prisma db push')
  console.log('4. Start your development server: npm run dev')
}

main()
  .catch((e) => {
    console.error('Error setting up database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 