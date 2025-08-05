import type { Metadata } from 'next'
import './globals.css'
import { SessionProvider } from 'next-auth/react'

export const metadata: Metadata = {
  title: 'AI Chatbot Support for Small Businesses | AutomateHub Studio',
  description: 'Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling. Start your free trial today.',
  keywords: 'AI chatbot, small business, customer support, automation, lead generation',
  authors: [{ name: 'AutomateHub Studio' }],
  openGraph: {
    title: 'AI Chatbot Support for Small Businesses',
    description: 'Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
} 