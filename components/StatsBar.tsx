'use client'

const stats = [
  {
    id: 'stat-total-raised',
    icon: '💰',
    value: '$1,000+',
    label: 'Total Raised',
    color: '#00E5BE',
    glow: 'rgba(0, 229, 190, 0.2)',
  },
  {
    id: 'stat-total-donors',
    icon: '👥',
    value: '3,305',
    label: 'Total Donors',
    color: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.2)',
  },
  {
    id: 'stat-active-causes',
    icon: '🌍',
    value: '6',
    label: 'Active Causes',
    color: '#06b6d4',
    glow: 'rgba(6, 182, 212, 0.2)',
  },
  {
    id: 'stat-gas-cost',
    icon: '⛽',
    value: '$0',
    label: 'Gas Cost to You',
    color: '#a78bfa',
    glow: 'rgba(167, 139, 250, 0.2)',
  },
]

export default function StatsBar() {
  return (
    <section style={{ padding: '0 24px 64px' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            id={stat.id}
            className="glass-card"
            style={{
              padding: '28px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              animationDelay: `${i * 0.1}s`,
              boxShadow: `0 4px 24px ${stat.glow}`,
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${stat.glow}`
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${stat.glow}`
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: `${stat.glow}`,
                border: `1px solid ${stat.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                flexShrink: 0,
              }}
            >
              {stat.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 13, color: '#6B7A99', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
