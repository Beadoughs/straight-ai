import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ChatbotEmbed } from '@/components/chatbot-embed'
import { VoiceflowWidget } from '@/components/voiceflow-widget'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://straight-ai.com'),
  title: 'Straight AI | AI-Optimized Websites for Business Owners',
  description: 'Upgrade or relaunch your business website with a conversion-focused build, SEO-ready structure, and ongoing management at $499 + $49/week.',
  keywords: [
    'ai optimized website',
    'business website redesign',
    'website for business owners',
    'conversion focused website',
    'seo ready website',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Straight AI | AI-Optimized Websites for Business Owners',
    description: 'Build, launch, and manage a modern website designed for visibility and conversion.',
    url: 'https://straight-ai.com',
    siteName: 'Straight AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Straight AI | AI-Optimized Websites for Business Owners',
    description: 'Build, launch, and manage a modern website designed for visibility and conversion.',
  },
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
        <ChatbotEmbed />
        <VoiceflowWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
