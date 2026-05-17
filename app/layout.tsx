import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GiveChain — Donate to Good Causes. Zero Gas Needed.',
  description:
    'GiveChain is a decentralized donation platform on Base Sepolia using the Universal Gas Framework. Donate to impactful causes and earn NFT badges — gas paid entirely in Mock USD.',
  keywords: ['web3', 'donation', 'blockchain', 'NFT', 'Base Sepolia', 'UGF', 'gasless'],
  openGraph: {
    title: 'GiveChain — Donate to Good Causes. Zero Gas Needed.',
    description: 'Decentralized giving powered by Universal Gas Framework. No ETH needed for gas.',
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
