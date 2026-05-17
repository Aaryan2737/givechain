'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { injected } from 'wagmi/connectors'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const { address, isConnected } = useAccount()
  const { connect } = useConnect()
  const { disconnect } = useDisconnect()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : ''

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(8, 11, 20, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1E2640' : '1px solid transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #7C3AED, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
              }}
            >
              ⛓
            </div>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #E4EAF6, #a5b4fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              GiveChain
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
          className="desktop-nav"
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/campaigns">Campaigns</NavLink>
        </div>

        {/* Wallet */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {isConnected ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  background: 'rgba(19, 24, 40, 0.9)',
                  border: '1px solid #1E2640',
                  borderRadius: 10,
                  padding: '8px 14px',
                  fontSize: 13,
                  color: '#E4EAF6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#00E5BE',
                    display: 'inline-block',
                    boxShadow: '0 0 8px #00E5BE',
                  }}
                />
                {shortAddress}
              </div>
              <button
                onClick={() => disconnect()}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 10,
                  padding: '8px 14px',
                  fontSize: 13,
                  color: '#f87171',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              id="connect-wallet-btn"
              onClick={() => connect({ connector: injected() })}
              className="btn-primary"
              style={{ fontSize: 14, padding: '10px 20px' }}
            >
              Connect Wallet
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#E4EAF6',
              fontSize: 24,
              cursor: 'pointer',
              padding: '4px 8px',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(8, 11, 20, 0.98)',
            borderTop: '1px solid #1E2640',
            padding: '16px 24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Link
              href="/"
              style={{ color: '#E4EAF6', textDecoration: 'none', fontSize: 16 }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/campaigns"
              style={{ color: '#E4EAF6', textDecoration: 'none', fontSize: 16 }}
              onClick={() => setMenuOpen(false)}
            >
              Campaigns
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        color: '#6B7A99',
        textDecoration: 'none',
        fontSize: 15,
        fontWeight: 500,
        transition: 'color 0.2s ease',
        position: 'relative',
      }}
      onMouseEnter={(e) => {
        ;(e.target as HTMLElement).style.color = '#E4EAF6'
      }}
      onMouseLeave={(e) => {
        ;(e.target as HTMLElement).style.color = '#6B7A99'
      }}
    >
      {children}
    </Link>
  )
}
