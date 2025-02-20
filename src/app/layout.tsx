import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import getConfig from 'next/config';

const inter = Inter({ subsets: ['latin'] })
const { publicRuntimeConfig } = getConfig();

export const metadata: Metadata = {
  title: `Maski's Portfolio`,
  description: 'Portfolio of Maski',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Use basePath to correctly load manifest.json */}
        <link rel="manifest" href={`${publicRuntimeConfig.basePath}/manifest.json`} />
        <body className={inter.className}>{children}</body>
      </head>
    </html>
  )
}

