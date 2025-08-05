import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import { prisma } from '@/lib/db'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, chatbotId, sessionId } = await request.json()

    if (!message || !chatbotId) {
      return NextResponse.json(
        { error: 'Message and chatbotId are required' },
        { status: 400 }
      )
    }

    // Get chatbot configuration
    const chatbot = await prisma.chatbot.findUnique({
      where: { id: chatbotId },
      include: { business: true }
    })

    if (!chatbot) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404 }
      )
    }

    // Get conversation history
    let conversation = await prisma.conversation.findFirst({
      where: { sessionId, chatbotId }
    })

    if (!conversation) {
      conversation = await prisma.conversation.create({
        data: {
          sessionId,
          chatbotId,
          messages: [],
          metadata: {}
        }
      })
    }

    const messages = conversation.messages as any[]
    const businessContext = chatbot.config as any

    // Prepare conversation for OpenAI
    const systemPrompt = `You are an AI assistant for ${chatbot.business.name}. 
    
Business Context:
- Business Name: ${chatbot.business.name}
- Industry: ${chatbot.business.industry || 'General'}
- Description: ${chatbot.business.description || 'Professional business services'}

Instructions:
- Be helpful, professional, and friendly
- Answer questions about the business, services, pricing, and appointments
- If you don't know something specific, offer to connect them with the business
- Keep responses concise but informative
- Always maintain a professional tone

${businessContext.systemPrompt || ''}`

    const conversationMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-10), // Keep last 10 messages for context
      { role: 'user', content: message }
    ]

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversationMessages,
      max_tokens: 500,
      temperature: 0.7,
    })

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I\'m having trouble responding right now. Please try again.'

    // Update conversation
    const updatedMessages = [
      ...messages,
      { role: 'user', content: message, timestamp: new Date() },
      { role: 'assistant', content: aiResponse, timestamp: new Date() }
    ]

    await prisma.conversation.update({
      where: { id: conversation.id },
      data: { messages: updatedMessages }
    })

    // Track analytics
    await prisma.chatbotAnalytics.upsert({
      where: {
        chatbotId_date: {
          chatbotId,
          date: new Date().toISOString().split('T')[0]
        }
      },
      update: {
        metrics: {
          increment: {
            totalMessages: 1,
            userMessages: 1
          }
        }
      },
      create: {
        chatbotId,
        date: new Date(),
        metrics: {
          totalMessages: 1,
          userMessages: 1,
          aiResponses: 1
        }
      }
    })

    return NextResponse.json({
      response: aiResponse,
      conversationId: conversation.id
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 