import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'AI Chatbot Support for Small Businesses | AutomateHub Studio',
  description: 'Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling. Start your free trial today.',
  keywords: 'AI chatbot, small business, customer support, automation, lead generation, Microsoft 365, SharePoint, Teams',
  authors: [{ name: 'AutomateHub Studio' }],
  openGraph: {
    title: 'AI Chatbot Support for Small Businesses | AutomateHub Studio',
    description: 'Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling.',
    type: 'website',
    url: 'https://chat.automatehubstudio.com',
    siteName: 'AutomateHub Studio',
    images: [
      {
        url: 'https://automatehubstudio.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AutomateHub Studio AI Chatbot Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Support for Small Businesses | AutomateHub Studio',
    description: 'Transform your business with AI-powered chatbots. 24/7 customer support, lead generation, and appointment scheduling.',
    images: ['https://automatehubstudio.com/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true
  },
  themeColor: '#1A56DB',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased font-montserrat">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 