import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Straight AI | Premium Website Development',
  description: siteConfig.offerDescription,
  metadataBase: new URL(siteConfig.url),
  generator: 'v0.app',
  openGraph: {
    title: 'Straight AI | Premium Website Development',
    description: siteConfig.offerDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Straight AI | Premium Website Development',
    description: siteConfig.offerDescription,
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {siteConfig.chatbotScriptUrl ? (
          <Script
            src={siteConfig.chatbotScriptUrl}
            strategy="lazyOnload"
            data-chatbot-id={siteConfig.chatbotId || ''}
          />
        ) : null}
      </body>
    </html>
  )
}
