import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Maski's Portfolio`,
  description: 'Portfolio of Maski',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""; // Read from env
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Use basePath to correctly load manifest.json */}
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <body className={inter.className}>{children}</body>
      </head>
    </html>
  )
}

