'use client'

import { useState, useEffect, useRef } from 'react'
import { useUGFModal } from '@tychilabs/react-ugf'

const CONTRACT_ADDRESS = '0x7f4e739d40e58bbd59dad388171d80e6c2039b62'

export type Campaign = {
  id: string
  name: string
  description: string
  category: 'Environment' | 'Education' | 'Humanitarian'
  emoji: string
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Environment: {
    bg: 'rgba(0, 229, 190, 0.1)',
    text: '#00E5BE',
    border: 'rgba(0, 229, 190, 0.3)',
  },
  Education: {
    bg: 'rgba(99, 102, 241, 0.1)',
    text: '#a5b4fc',
    border: 'rgba(99, 102, 241, 0.3)',
  },
  Humanitarian: {
    bg: 'rgba(251, 191, 36, 0.1)',
    text: '#fbbf24',
    border: 'rgba(251, 191, 36, 0.3)',
  },
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const [donated, setDonated] = useState(false)
  const [loading, setLoading] = useState(false)
  const { openUGF, result } = useUGFModal()
  const prevResultRef = useRef<string | null>(null)

  // Detect success when a new txHash appears
  useEffect(() => {
    if (result?.txHash && result.txHash !== prevResultRef.current) {
      prevResultRef.current = result.txHash
      setDonated(true)
      setLoading(false)
    }
  }, [result])

  const colors = categoryColors[campaign.category]

  async function handleDonate() {
    const win = window as any
    if (!win.ethereum) {
      alert('MetaMask not found! Please install MetaMask to donate.')
      return
    }

    setLoading(true)
    try {
      const { BrowserProvider } = await import('ethers')
      const provider = new BrowserProvider(win.ethereum)
      const signer = await provider.getSigner()

      await (openUGF as any)({
        signer,
        tx: {
          to: CONTRACT_ADDRESS as `0x${string}`,
          data: '0x1249c58b',
          value: BigInt(0),
        },
        destChainId: '84532',
      })
    } catch (err: any) {
      console.error('Donation error:', err)
      alert(err?.message || 'Transaction failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div
      id={`campaign-card-${campaign.id}`}
      className="glass-card"
      style={{
        padding: '28px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          '0 20px 60px rgba(99, 102, 241, 0.2)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Glow spot */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.06)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'rgba(30, 38, 64, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
            }}
          >
            {campaign.emoji}
          </div>
          <div>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#E4EAF6', lineHeight: 1.3 }}>
              {campaign.name}
            </h3>
          </div>
        </div>

        {/* Category badge */}
        <span
          style={{
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}`,
            borderRadius: 99,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {campaign.category}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: 14, color: '#6B7A99', lineHeight: 1.6 }}>
        {campaign.description}
      </p>



      {/* Donate button */}
      {donated ? (
        <div
          style={{
            background: 'rgba(0, 229, 190, 0.1)',
            border: '1px solid rgba(0, 229, 190, 0.4)',
            borderRadius: 12,
            padding: '14px',
            textAlign: 'center',
            color: '#00E5BE',
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          ✅ Donation Successful! Badge Earned!
        </div>
      ) : (
        <button
          id={`donate-btn-${campaign.id}`}
          onClick={handleDonate}
          disabled={loading}
          className="btn-primary"
          style={{
            width: '100%',
            fontSize: 15,
            padding: '14px',
            opacity: loading ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}
        >
          {loading ? (
            <>
              <span
                style={{
                  width: 16,
                  height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }}
              />
              Processing…
            </>
          ) : (
            <>💳 Donate with Mock USD</>
          )}
        </button>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
