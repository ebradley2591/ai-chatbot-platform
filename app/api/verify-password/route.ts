import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {
    console.log('🔍 Checking admin user password...')

    // Find the admin user
    const adminUser = await prisma.user.findUnique({
      where: { email: 'contact@automatehubstudio.com' }
    })

    if (!adminUser) {
      return NextResponse.json({
        success: false,
        error: 'Admin user not found'
      })
    }

    // Test if the stored password matches 'admin123'
    const testPassword = 'admin123'
    const isValidPassword = await bcrypt.compare(testPassword, adminUser.password)

    return NextResponse.json({
      success: true,
      adminUser: {
        id: adminUser.id,
        email: adminUser.email,
        name: adminUser.name,
        role: adminUser.role,
        passwordHash: adminUser.password.substring(0, 20) + '...' // Show first 20 chars for debugging
      },
      passwordTest: {
        testPassword,
        isValid: isValidPassword
      }
    })

  } catch (error) {
    console.error('❌ Password verification failed:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Password verification failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: NextRequest) {
  try {
    const { newPassword } = await request.json()

    if (!newPassword) {
      return NextResponse.json(
        { success: false, error: 'New password is required' },
        { status: 400 }
      )
    }

    console.log('🔄 Updating admin user password...')

    // Find the admin user
    const adminUser = await prisma.user.findUnique({
      where: { email: 'contact@automatehubstudio.com' }
    })

    if (!adminUser) {
      return NextResponse.json({
        success: false,
        error: 'Admin user not found'
      })
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10)

    // Update the user's password
    const updatedUser = await prisma.user.update({
      where: { email: 'contact@automatehubstudio.com' },
      data: { password: hashedPassword }
    })

    console.log('✅ Admin password updated successfully')

    return NextResponse.json({
      success: true,
      message: 'Password updated successfully',
      adminEmail: updatedUser.email
    })

  } catch (error) {
    console.error('❌ Password update failed:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Password update failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
} 