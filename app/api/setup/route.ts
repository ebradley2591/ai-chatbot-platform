import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    console.log('🚀 Checking database setup status...')

    // Check if any users exist
    const userCount = await prisma.user.count()
    
    if (userCount > 0) {
      console.log('⚠️  Users already exist. Database is already set up.')
      
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Database Already Setup - AI Chatbot Platform</title>
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
            .info-box {
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              padding: 20px;
              margin: 20px 0;
              text-align: left;
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
            <h1>Database Already Setup!</h1>
            <p>Your AI Chatbot Platform database has already been initialized.</p>
            
            <div class="info-box">
              <h3>Current Status:</h3>
              <p><strong>Users in database:</strong> ${userCount}</p>
              <p>The database is ready to use!</p>
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
    }

    // If no users exist, show setup form
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Setup AI Chatbot Platform - Database Initialization</title>
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
          .form-group {
            margin-bottom: 20px;
            text-align: left;
          }
          label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
          }
          input {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.9);
            color: #1A56DB;
            font-size: 16px;
          }
          input:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);
          }
          .btn {
            background: #FFD700;
            color: #1A56DB;
            padding: 15px 30px;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }
          .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }
          .warning {
            background: rgba(255, 193, 7, 0.2);
            border-left: 4px solid #FFC107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
            text-align: left;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Setup Your Platform</h1>
          <p>Create your admin account and initialize the database.</p>
          
          <form action="/api/setup" method="POST" style="margin-top: 30px;">
            <div class="form-group">
              <label for="adminEmail">Admin Email:</label>
              <input type="email" id="adminEmail" name="adminEmail" required 
                     placeholder="admin@yourcompany.com">
            </div>
            
            <div class="form-group">
              <label for="adminName">Admin Name:</label>
              <input type="text" id="adminName" name="adminName" required 
                     placeholder="Your Name">
            </div>
            
            <div class="form-group">
              <label for="adminPassword">Admin Password:</label>
              <input type="password" id="adminPassword" name="adminPassword" required 
                     placeholder="Choose a secure password">
            </div>
            
            <div class="form-group">
              <label for="businessName">Business Name:</label>
              <input type="text" id="businessName" name="businessName" required 
                     placeholder="Your Business Name">
            </div>
            
            <div class="warning">
              <strong>⚠️ IMPORTANT:</strong> This will create your admin account and initialize the database. Make sure to remember your credentials!
            </div>
            
            <button type="submit" class="btn">Initialize Database & Create Admin Account</button>
          </form>
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
    console.error('❌ Error checking database setup:', error)
    
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
          <h1>Database Connection Error</h1>
          <p>There was an error connecting to the database.</p>
          
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
    const formData = await request.formData()
    const adminEmail = formData.get('adminEmail') as string
    const adminName = formData.get('adminName') as string
    const adminPassword = formData.get('adminPassword') as string
    const businessName = formData.get('businessName') as string

    if (!adminEmail || !adminName || !adminPassword || !businessName) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      )
    }

    console.log('🚀 Setting up production database with custom admin...')

    // Create admin user
    const hashedPassword = await bcrypt.hash(adminPassword, 10)
    
    const adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        name: adminName,
        password: hashedPassword,
        role: 'ADMIN'
      }
    })

    console.log('✅ Admin user created:', adminUser.email)

    // Create business
    const sampleBusiness = await prisma.business.create({
      data: {
        name: businessName,
        description: 'AI Automation Solutions for Small Businesses',
        website: 'https://automatehubstudio.com',
        industry: 'Technology',
        userId: adminUser.id
      }
    })

    console.log('✅ Business created:', sampleBusiness.name)

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
        isActive: true,
        businessId: sampleBusiness.id
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
        businessId: sampleBusiness.id
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
        businessId: sampleBusiness.id
      }
    })

    console.log('✅ Sample plans created')

    // Create sample chatbot
    const sampleChatbot = await prisma.chatbot.create({
      data: {
        name: 'Support Bot',
        description: 'AI assistant for your website',
        isActive: true,
        config: {
          welcomeMessage: 'Hello! I\'m your AI assistant. How can I help you today?',
          businessHours: 'Mon-Fri 9AM-6PM EST',
          contactEmail: adminEmail,
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
    console.log('\n🎉 Production database setup complete!')

    const successHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Setup Complete - AI Chatbot Platform</title>
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
          <h1>Setup Complete!</h1>
          <p>Your AI Chatbot Platform has been successfully initialized.</p>
          
          <div class="info-box">
            <h3>Your Admin Account:</h3>
            <p><strong>Email:</strong> ${adminEmail}</p>
            <p><strong>Name:</strong> ${adminName}</p>
            <p><strong>Business:</strong> ${businessName}</p>
          </div>
          
          <div class="info-box">
            <h3>What was created:</h3>
            <ul style="text-align: left;">
              <li>✅ Admin user account</li>
              <li>✅ Business profile</li>
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

    return new NextResponse(successHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
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