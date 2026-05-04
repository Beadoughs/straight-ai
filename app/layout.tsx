import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Straight AI | Premium Website Development',
  description: 'Launch your custom website for $299. Complete with AI chatbot, hosting & management for just $35/week.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        {/* PLACEHOLDER: AI Chatbot Script (e.g., Chatbase, Voiceflow) */}
        {/* Replace the src with your actual chatbot script URL and add your widget ID below */}
        {/* <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="lazyOnload"
          chatbotId="YOUR_CHATBOT_ID_HERE"
          domain="www.chatbase.co"
        /> */}
      </body>
    </html>
  )
}
