import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Backend Studio — Systems Built for Business',
  description:
    'Backend Studio helps businesses design and implement operational systems that run reliably. Less chaos. More clarity.',
  metadataBase: new URL('https://backendstudio.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Backend Studio — Systems Built for Business',
    description:
      'Backend Studio helps businesses design and implement operational systems that run reliably. Less chaos. More clarity.',
    url: 'https://backendstudio.io',
    siteName: 'Backend Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Backend Studio — Systems Built for Business',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backend Studio — Systems Built for Business',
    description:
      'Backend Studio helps businesses design and implement operational systems that run reliably. Less chaos. More clarity.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-midnight text-white font-sans antialiased min-h-screen">
        <Nav />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
