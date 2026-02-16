import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Don Mario Alojamiento | Puerto Iguazú',
  description: 'Experiencia única en la selva misionera. Habitaciones familiares, piscina y naturaleza a minutos de las Cataratas.',
  generator: 'v0.app',
  keywords: ['hotel puerto iguazu', 'alojamiento iguazu', 'cataratas del iguazu', 'hotel misiones', 'don mario'],
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
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
