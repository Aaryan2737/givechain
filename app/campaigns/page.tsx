'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import CampaignCard, { type Campaign } from '@/components/CampaignCard'
import BadgeCard, { type Badge } from '@/components/BadgeCard'

const allCampaigns: Campaign[] = [
  {
    id: 'amazon',
    name: 'Reforest the Amazon',
    description:
      'Plant trees and restore biodiversity in the Amazon rainforest, combating deforestation and climate change one tree at a time.',
    category: 'Environment',
    goal: 500,
    raised: 235,
    donors: 641,
    emoji: '🌳',
  },
  {
    id: 'uganda',
    name: 'Education for Uganda',
    description:
      'Build schools and provide educational materials to underprivileged children in rural Uganda, opening doors to a brighter future.',
    category: 'Education',
    goal: 250,
    raised: 188,
    donors: 412,
    emoji: '📚',
  },
  {
    id: 'water',
    name: 'Clean Water Initiative',
    description:
      'Bring safe drinking water to communities lacking basic sanitation, reducing waterborne diseases across Sub-Saharan Africa.',
    category: 'Humanitarian',
    goal: 350,
    raised: 81,
    donors: 198,
    emoji: '💧',
  },
  {
    id: 'ocean',
    name: 'Ocean Cleanup Project',
    description:
      'Deploy advanced cleanup systems to remove plastic waste from ocean gyres, protecting marine ecosystems for generations.',
    category: 'Environment',
    goal: 400,
    raised: 240,
    donors: 320,
    emoji: '🌊',
  },
  {
    id: 'solar',
    name: 'Solar Energy for Villages',
    description:
      'Install solar panels in off-grid villages, providing clean, reliable electricity to families who have never had power.',
    category: 'Humanitarian',
    goal: 600,
    raised: 210,
    donors: 280,
    emoji: '☀️',
  },
  {
    id: 'girls',
    name: 'Girls Education Fund',
    description:
      'Empower young girls through education programs, scholarships, and safe learning environments across South Asia and Africa.',
    category: 'Education',
    goal: 300,
    raised: 246,
    donors: 510,
    emoji: '👩‍🎓',
  },
]

const badges: Badge[] = [
  {
    id: 'bronze',
    name: 'Bronze Donor',
    emoji: '🥉',
    description: 'First donation on GiveChain',
    tier: 'bronze',
    earned: true,
  },
  {
    id: 'silver',
    name: 'Silver Donor',
    emoji: '🥈',
    description: '5+ donations made',
    tier: 'silver',
    earned: true,
  },
  {
    id: 'gold',
    name: 'Gold Donor',
    emoji: '🥇',
    description: '20+ donations — Legend',
    tier: 'gold',
    earned: true,
  },
  {
    id: 'empty',
    name: 'Next Badge',
    emoji: '🔒',
    description: 'Donate to earn',
    tier: 'empty',
    earned: false,
  },
]

const categoryOptions = ['All', 'Environment', 'Education', 'Humanitarian'] as const
type CategoryFilter = (typeof categoryOptions)[number]

export default function CampaignsPage() {
  const [mounted, setMounted] = useState(false)
  const [filter, setFilter] = useState<CategoryFilter>('All')

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const filtered =
    filter === 'All' ? allCampaigns : allCampaigns.filter((c) => c.category === filter)

  const filterColors: Record<CategoryFilter, string> = {
    All: '#6366f1',
    Environment: '#00E5BE',
    Education: '#a5b4fc',
    Humanitarian: '#fbbf24',
  }

  return (
    <div
      className="mesh-bg"
      style={{ minHeight: '100vh' }}
    >
      <Navbar />

      {/* Page Header */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '64px 24px 48px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            borderRadius: 99,
            padding: '6px 16px',
            fontSize: 13,
            color: '#06b6d4',
            fontWeight: 600,
            marginBottom: 24,
          }}
        >
          🌍 6 Active Campaigns · Gasless Donations
        </div>

        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 900,
            color: '#E4EAF6',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          Browse{' '}
          <span className="gradient-text">Campaigns</span>
        </h1>

        <p
          style={{
            fontSize: 17,
            color: '#6B7A99',
            maxWidth: 560,
            margin: '0 auto 40px',
            lineHeight: 1.7,
          }}
        >
          Every donation mints an NFT badge on Base Sepolia. Gas is paid in Mock USD —
          no ETH needed.
        </p>

        {/* Filter tabs */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {categoryOptions.map((cat) => {
            const active = filter === cat
            const color = filterColors[cat]
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setFilter(cat)}
                style={{
                  background: active ? `${color}20` : 'rgba(19, 24, 40, 0.8)',
                  border: `1px solid ${active ? color : '#1E2640'}`,
                  borderRadius: 99,
                  padding: '8px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  color: active ? color : '#6B7A99',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </section>

      {/* Campaign Grid */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: 24,
          }}
        >
          {filtered.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#6B7A99' }}>
            No campaigns found.
          </div>
        )}
      </section>

      {/* NFT Badges Section */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px 80px',
        }}
      >
        <div
          style={{
            background: 'rgba(19, 24, 40, 0.5)',
            border: '1px solid #1E2640',
            borderRadius: 24,
            padding: '48px 40px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 800,
                color: '#E4EAF6',
                marginBottom: 10,
              }}
            >
              Your{' '}
              <span className="gradient-text">NFT Badges</span>
            </h2>
            <p style={{ color: '#6B7A99', fontSize: 15 }}>
              Donate and earn on-chain proof of your generosity. Each badge is a unique NFT
              minted on Base Sepolia.
            </p>
          </div>

          {/* Badge grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 20,
            }}
          >
            {badges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>

          {/* Badge tiers info */}
          <div
            style={{
              marginTop: 36,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            {[
              { tier: '🥉 Bronze', req: '1st donation', color: '#d97706' },
              { tier: '🥈 Silver', req: '5+ donations', color: '#9ca3af' },
              { tier: '🥇 Gold', req: '20+ donations', color: '#f59e0b' },
            ].map((t) => (
              <div
                key={t.tier}
                style={{
                  background: 'rgba(8, 11, 20, 0.5)',
                  border: '1px solid #1E2640',
                  borderRadius: 12,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <span style={{ fontSize: 22 }}>{t.tier.split(' ')[0]}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.color }}>
                    {t.tier.split(' ').slice(1).join(' ')}
                  </div>
                  <div style={{ fontSize: 12, color: '#6B7A99' }}>{t.req}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #1E2640',
          background: 'rgba(8, 11, 20, 0.8)',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: 13, color: '#6B7A99' }}>
          © 2025 GiveChain · Built on Base Sepolia ·{' '}
          <span style={{ color: '#6366f1' }}>Powered by Tychi Labs UGF</span>
        </p>
      </footer>
    </div>
  )
}
