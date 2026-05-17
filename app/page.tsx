'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import StatsBar from '@/components/StatsBar'
import CampaignCard, { type Campaign } from '@/components/CampaignCard'

const featuredCampaigns: Campaign[] = [
  {
    id: 'amazon',
    name: 'Reforest the Amazon',
    description:
      'Plant trees and restore biodiversity in the Amazon rainforest, combating deforestation and climate change.',
    category: 'Environment',
    emoji: '🌳',
  },
  {
    id: 'uganda',
    name: 'Education for Uganda',
    description:
      'Build schools and provide educational materials to underprivileged children in rural Uganda.',
    category: 'Education',
    emoji: '📚',
  },
  {
    id: 'girls',
    name: 'Girls Education Fund',
    description:
      'Empower young girls through education programs, scholarships, and safe learning environments.',
    category: 'Education',
    emoji: '👩‍🎓',
  },
]

const steps = [
  {
    number: '01',
    icon: '🦊',
    title: 'Connect Wallet',
    description:
      'Link your MetaMask wallet in seconds. No ETH balance required — GiveChain handles everything.',
    color: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.2)',
  },
  {
    number: '02',
    icon: '💵',
    title: 'Pay in Mock USD',
    description:
      'UGF modal quotes gas in TYI_MOCK_USD. No real money — just testnet tokens. Fully gasless experience.',
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.2)',
  },
  {
    number: '03',
    icon: '🏅',
    title: 'Earn NFT Badge',
    description:
      'Every donation mints a Bronze, Silver, or Gold badge on-chain. Proof of your generosity, forever.',
    color: '#00E5BE',
    glow: 'rgba(0, 229, 190, 0.2)',
  },
]

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [ugfModalOpen, setUgfModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="mesh-bg" style={{ minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '80px 24px 72px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative orbs */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            top: 40,
            left: '10%',
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            top: 80,
            right: '10%',
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
            animationDelay: '1.5s',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(99, 102, 241, 0.1)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            borderRadius: 99,
            padding: '6px 16px',
            fontSize: 13,
            color: '#a5b4fc',
            fontWeight: 600,
            marginBottom: 32,
            letterSpacing: '0.03em',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#6366f1',
              boxShadow: '0 0 8px #6366f1',
            }}
          />
          Powered by Universal Gas Framework · Base Sepolia
        </div>

        <h1
          style={{
            fontSize: 'clamp(38px, 6vw, 72px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="gradient-text">Donate to Good Causes.</span>
          <br />
          <span style={{ color: '#E4EAF6' }}>Zero Gas Needed.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#6B7A99',
            maxWidth: 620,
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          GiveChain uses the Universal Gas Framework (UGF) by Tychi Labs to let you
          donate to impactful causes on Base Sepolia — gas fees paid entirely in{' '}
          <span style={{ color: '#06b6d4', fontWeight: 600 }}>Mock USD (TYI_MOCK_USD)</span>.
          No ETH required. Ever.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/campaigns" style={{ textDecoration: 'none' }}>
            <button id="browse-campaigns-btn" className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
              Browse Campaigns →
            </button>
          </Link>
          <button
            id="what-is-ugf-btn"
            className="btn-secondary"
            style={{ fontSize: 16, padding: '14px 32px' }}
            onClick={() =>
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            What is UGF?
          </button>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* How It Works */}
      <section
        id="how-it-works"
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '64px 24px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#E4EAF6',
              marginBottom: 16,
            }}
          >
            How{' '}
            <span className="gradient-text">GiveChain Works</span>
          </h2>
          <p style={{ color: '#6B7A99', fontSize: 17 }}>
            Three simple steps to make an impact — entirely gasless.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              id={`step-${i + 1}`}
              className="glass-card"
              style={{
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              {/* Background step number */}
              <div
                style={{
                  position: 'absolute',
                  top: -10,
                  right: 16,
                  fontSize: 80,
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.03)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: 16,
                  background: step.glow,
                  border: `1px solid ${step.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  marginBottom: 20,
                  boxShadow: `0 0 24px ${step.glow}`,
                }}
              >
                {step.icon}
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: step.color,
                  letterSpacing: '0.1em',
                  marginBottom: 8,
                }}
              >
                STEP {step.number}
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#E4EAF6',
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>

              <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.7 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* UGF explainer */}
        <div
          className="gradient-border"
          style={{
            marginTop: 48,
            padding: '32px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              flexShrink: 0,
            }}
          >
            ⚡
          </div>
          <div>
            <h4 style={{ fontSize: 17, fontWeight: 700, color: '#E4EAF6', marginBottom: 8 }}>
              What is the Universal Gas Framework (UGF)?
            </h4>
            <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.7, maxWidth: 700 }}>
              UGF by Tychi Labs is a groundbreaking protocol that abstracts away gas fees from
              end-users. Instead of paying ETH for every transaction, the gas is settled in a
              stable token called <strong style={{ color: '#06b6d4' }}>TYI_MOCK_USD</strong>.
              This enables true mass adoption of Web3 — no crypto knowledge needed to participate.
              GiveChain leverages UGF so donors only focus on what matters: making an impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '32px 24px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 800,
                color: '#E4EAF6',
                marginBottom: 6,
              }}
            >
              Featured{' '}
              <span className="gradient-text">Campaigns</span>
            </h2>
            <p style={{ color: '#6B7A99', fontSize: 15 }}>
              Make an impact today — gas is on us.
            </p>
          </div>
          <Link href="/campaigns" style={{ textDecoration: 'none' }}>
            <button className="btn-secondary" style={{ fontSize: 14 }}>
              View All Campaigns →
            </button>
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
          }}
        >
          {featuredCampaigns.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #1E2640',
          background: 'rgba(8, 11, 20, 0.8)',
          padding: '48px 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 8,
              }}
            >
              <span style={{ fontSize: 20 }}>⛓</span>
              <span
                style={{
                  fontSize: 18,
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
            <p style={{ fontSize: 13, color: '#6B7A99', maxWidth: 280, lineHeight: 1.6 }}>
              Decentralized giving powered by Universal Gas Framework on Base Sepolia.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 12, color: '#6B7A99', marginBottom: 12, fontWeight: 700, letterSpacing: '0.08em' }}>
                PLATFORM
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href="/" style={{ fontSize: 14, color: '#E4EAF6', textDecoration: 'none' }}>
                  Home
                </Link>
                <Link href="/campaigns" style={{ fontSize: 14, color: '#E4EAF6', textDecoration: 'none' }}>
                  Campaigns
                </Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: '#6B7A99', marginBottom: 12, fontWeight: 700, letterSpacing: '0.08em' }}>
                POWERED BY
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a
                  href="https://base.org"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 14, color: '#E4EAF6', textDecoration: 'none' }}
                >
                  Base Sepolia
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: 14, color: '#E4EAF6', textDecoration: 'none' }}
                >
                  Tychi Labs UGF
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1100,
            margin: '32px auto 0',
            paddingTop: 24,
            borderTop: '1px solid #1E2640',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: '#6B7A99' }}>
            © 2025 GiveChain. Built on Base Sepolia Testnet.
          </p>
          <p style={{ fontSize: 12, color: '#6B7A99' }}>
            Contract:{' '}
            <a
              href="https://sepolia.basescan.org/address/0x7f4e739d40e58bbd59dad388171d80e6c2039b62"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#6366f1', textDecoration: 'none', fontFamily: 'monospace', fontSize: 11 }}
            >
              0x7f4e739d...39b62
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
