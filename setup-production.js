require('dotenv').config();
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Setting up production database for AI Chatbot Platform...')

  try {
    // Check if admin user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: 'contact@automatehubstudio.com' }
    })

    if (existingUser) {
      console.log('⚠️  Admin user already exists. Skipping user creation.')
    } else {
      // Create sample admin user
      const hashedPassword = await bcrypt.hash('admin123', 10)
      
      const adminUser = await prisma.user.create({
        data: {
          email: 'contact@automatehubstudio.com',
          name: 'Admin User',
          password: hashedPassword,
          role: 'ADMIN'
        }
      })

      console.log('✅ Admin user created:', adminUser.email)
      console.log('📝 Default password: admin123 (CHANGE THIS IMMEDIATELY!)')
    }

    // Check if business already exists
    const existingBusiness = await prisma.business.findFirst({
      where: { name: 'AutomateHub Studio' }
    })

    if (existingBusiness) {
      console.log('⚠️  Business already exists. Skipping business creation.')
    } else {
      // Create sample business
      const adminUser = await prisma.user.findUnique({
        where: { email: 'contact@automatehubstudio.com' }
      })

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
    }

    // Check if plans already exist
    const existingPlans = await prisma.plan.findMany()
    
    if (existingPlans.length > 0) {
      console.log('⚠️  Plans already exist. Skipping plan creation.')
    } else {
      // Create sample plans
      const business = await prisma.business.findFirst({
        where: { name: 'AutomateHub Studio' }
      })

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
          isActive: true,
          businessId: business.id
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
          isActive: true,
          businessId: business.id
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
          isActive: true,
          businessId: business.id
        }
      })

      console.log('✅ Sample plans created:')
      console.log(`- Basic: $${basicPlan.price}/month`)
      console.log(`- Standard: $${standardPlan.price}/month`)
      console.log(`- Premium: $${premiumPlan.price}/month`)
    }

    // Check if chatbot already exists
    const existingChatbot = await prisma.chatbot.findFirst({
      where: { name: 'AutomateHub Support Bot' }
    })

    if (existingChatbot) {
      console.log('⚠️  Sample chatbot already exists. Skipping chatbot creation.')
    } else {
      // Create sample chatbot
      const business = await prisma.business.findFirst({
        where: { name: 'AutomateHub Studio' }
      })

      const sampleChatbot = await prisma.chatbot.create({
        data: {
          name: 'AutomateHub Support Bot',
          description: 'AI assistant for AutomateHub Studio website',
          isActive: true,
          config: {
            welcomeMessage: 'Hello! I\'m your AI assistant. How can I help you today?',
            businessHours: 'Mon-Fri 9AM-6PM EST',
            contactEmail: 'contact@automatehubstudio.com',
            services: [
              'AI Chatbot Development',
              'Business Process Automation',
              'Custom Software Solutions'
            ]
          },
          businessId: business.id
        }
      })

      console.log('✅ Sample chatbot created:', sampleChatbot.name)
    }

    console.log('\n🎉 Production database setup complete!')
    console.log('\n📋 Next steps:')
    console.log('1. Test admin login: contact@automatehubstudio.com / admin123')
    console.log('2. CHANGE THE DEFAULT PASSWORD IMMEDIATELY!')
    console.log('3. Test all functionality in production')
    console.log('4. Set up email configuration')
    console.log('5. Configure OpenAI API for real AI responses')

  } catch (error) {
    console.error('❌ Error setting up database:', error)
    process.exit(1)
  }
}

main()
  .catch((e) => { 
    console.error('❌ Error:', e); 
    process.exit(1) 
  })
  .finally(async () => { 
    await prisma.$disconnect() 
  }) 