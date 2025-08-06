import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Testing database connection...')

    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connection successful')

    // Check if any users exist
    const userCount = await prisma.user.count()
    console.log(`📊 Found ${userCount} users in database`)

    // Check if admin user exists
    const adminUser = await prisma.user.findUnique({
      where: { email: 'contact@automatehubstudio.com' }
    })

    if (adminUser) {
      console.log('✅ Admin user exists')
      return NextResponse.json({
        success: true,
        message: 'Database connection successful',
        userCount,
        adminUserExists: true,
        adminEmail: adminUser.email,
        adminRole: adminUser.role
      })
    } else {
      console.log('❌ Admin user does not exist')
      return NextResponse.json({
        success: true,
        message: 'Database connection successful, but admin user not found',
        userCount,
        adminUserExists: false,
        nextStep: 'Visit /api/setup to create admin user'
      })
    }

  } catch (error) {
    console.error('❌ Database test failed:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Database connection failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 