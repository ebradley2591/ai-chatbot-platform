const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function testConnection() {
  try {
    console.log('🔌 Testing MongoDB connection...')
    
    // Test the connection
    await prisma.$connect()
    console.log('✅ MongoDB connection successful!')
    
    // Test a simple query
    const userCount = await prisma.user.count()
    console.log(`📊 Current users in database: ${userCount}`)
    
    await prisma.$disconnect()
    console.log('🔌 Connection closed successfully')
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
    process.exit(1)
  }
}

testConnection() 