import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    console.log('🚀 Setting up production database for AI Chatbot Platform...')

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
          userId: adminUser!.id
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
          businessId: business!.id
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
          businessId: business!.id
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
          businessId: business!.id
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
          businessId: business!.id
        }
      })

      console.log('✅ Sample chatbot created:', sampleChatbot.name)
    }

    console.log('\n🎉 Production database setup complete!')

    // Return HTML response for browser access
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Database Setup Complete - AI Chatbot Platform</title>
        <style>
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #1A56DB 0%, #3B82F6 100%);
            color: white;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #FFD700;
            margin-bottom: 20px;
            font-size: 2.5rem;
          }
          .success-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }
          .info-box {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
          }
          .warning {
            background: rgba(255, 193, 7, 0.2);
            border-left: 4px solid #FFC107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
          }
          .btn {
            display: inline-block;
            background: #FFD700;
            color: #1A56DB;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            margin: 10px;
            transition: all 0.3s ease;
          }
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success-icon">🎉</div>
          <h1>Database Setup Complete!</h1>
          <p>Your AI Chatbot Platform database has been successfully initialized.</p>
          
          <div class="info-box">
            <h3>Admin Account Created:</h3>
            <p><strong>Email:</strong> contact@automatehubstudio.com</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
          
          <div class="warning">
            <strong>⚠️ IMPORTANT:</strong> Change the default password immediately after logging in!
          </div>
          
          <div class="info-box">
            <h3>What was created:</h3>
            <ul style="text-align: left;">
              <li>✅ Admin user account</li>
              <li>✅ Sample business (AutomateHub Studio)</li>
              <li>✅ Three pricing plans (Basic, Standard, Premium)</li>
              <li>✅ Sample chatbot for your website</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px;">
            <a href="/auth/signin" class="btn">Login to Dashboard</a>
            <a href="/" class="btn">Go to Homepage</a>
          </div>
        </div>
      </body>
      </html>
    `

    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    })

  } catch (error) {
    console.error('❌ Error setting up database:', error)
    
    const errorHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Setup Error - AI Chatbot Platform</title>
        <style>
          body {
            font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);
            color: white;
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #FFD700;
            margin-bottom: 20px;
          }
          .error-icon {
            font-size: 4rem;
            margin-bottom: 20px;
          }
          .error-details {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
            text-align: left;
            font-family: monospace;
            font-size: 0.9rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="error-icon">❌</div>
          <h1>Setup Failed</h1>
          <p>There was an error setting up the database.</p>
          
          <div class="error-details">
            <strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}
          </div>
          
          <p>Please check your environment variables and database connection.</p>
        </div>
      </body>
      </html>
    `

    return new NextResponse(errorHtml, {
      status: 500,
      headers: {
        'Content-Type': 'text/html',
      },
    })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('🚀 Setting up production database for AI Chatbot Platform...')

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
          userId: adminUser!.id
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
          businessId: business!.id
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
          businessId: business!.id
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
          businessId: business!.id
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
          businessId: business!.id
        }
      })

      console.log('✅ Sample chatbot created:', sampleChatbot.name)
    }

    console.log('\n🎉 Production database setup complete!')

    return NextResponse.json({ 
      success: true, 
      message: 'Database setup completed successfully',
      adminEmail: 'contact@automatehubstudio.com',
      adminPassword: 'admin123',
      warning: 'CHANGE THE DEFAULT PASSWORD IMMEDIATELY!'
    })

  } catch (error) {
    console.error('❌ Error setting up database:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to setup database',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 