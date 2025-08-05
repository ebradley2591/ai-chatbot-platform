import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Test email
    const testEmail = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to yourself for testing
      subject: 'AI Chatbot Platform - Email Test',
      html: `
        <h2>Email Configuration Test</h2>
        <p>This is a test email from your AI Chatbot Platform.</p>
        <p>If you received this email, your SMTP configuration is working correctly!</p>
        <hr>
        <p><strong>Platform:</strong> AI Chatbot Platform</p>
        <p><strong>Domain:</strong> chat.automatehubstudio.com</p>
        <p><strong>Test Time:</strong> ${new Date().toLocaleString()}</p>
      `
    }

    // Send email
    const info = await transporter.sendMail(testEmail)

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully',
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info)
    })

  } catch (error) {
    console.error('❌ Email test failed:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send test email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 