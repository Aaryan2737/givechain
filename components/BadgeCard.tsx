'use client'

export type Badge = {
  id: string
  name: string
  emoji: string
  description: string
  tier: 'bronze' | 'silver' | 'gold' | 'empty'
  earned?: boolean
}

const tierStyles = {
  bronze: {
    bg: 'linear-gradient(135deg, #92400e, #b45309)',
    border: '#d97706',
    glow: 'rgba(180, 83, 9, 0.35)',
    text: '#fef3c7',
  },
  silver: {
    bg: 'linear-gradient(135deg, #374151, #6b7280)',
    border: '#9ca3af',
    glow: 'rgba(156, 163, 175, 0.3)',
    text: '#f3f4f6',
  },
  gold: {
    bg: 'linear-gradient(135deg, #78350f, #d97706)',
    border: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.4)',
    text: '#fef3c7',
  },
  empty: {
    bg: 'rgba(19, 24, 40, 0.6)',
    border: '#1E2640',
    glow: 'transparent',
    text: '#6B7A99',
  },
}

export default function BadgeCard({ badge }: { badge: Badge }) {
  const styles = tierStyles[badge.tier]

  if (badge.tier === 'empty') {
    return (
      <div
        id={`badge-${badge.id}`}
        style={{
          background: 'rgba(19, 24, 40, 0.4)',
          border: '2px dashed #1E2640',
          borderRadius: 16,
          padding: '28px 20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          transition: 'border-color 0.3s ease',
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = '#6366f1')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.borderColor = '#1E2640')
        }
      >
        <div style={{ fontSize: 40, opacity: 0.3 }}>{badge.emoji}</div>
        <div style={{ fontSize: 13, color: '#6B7A99', fontWeight: 500 }}>
          {badge.description}
        </div>
      </div>
    )
  }

  return (
    <div
      id={`badge-${badge.id}`}
      className="badge-shine"
      style={{
        background: styles.bg,
        border: `1px solid ${styles.border}`,
        borderRadius: 16,
        padding: '28px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        boxShadow: `0 8px 32px ${styles.glow}`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${styles.glow}`
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${styles.glow}`
      }}
    >
      <div
        style={{
          fontSize: 48,
          filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))',
          lineHeight: 1,
        }}
      >
        {badge.emoji}
      </div>
      <div
        style={{
          fontSize: 15,
          fontWeight: 800,
          color: styles.text,
          letterSpacing: '0.02em',
        }}
      >
        {badge.name}
      </div>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
        {badge.description}
      </div>
      <div
        style={{
          marginTop: 4,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 99,
          padding: '4px 12px',
          fontSize: 11,
          color: styles.text,
          fontWeight: 700,
          letterSpacing: '0.08em',
        }}
      >
        ✓ ON-CHAIN
      </div>
    </div>
  )
}
