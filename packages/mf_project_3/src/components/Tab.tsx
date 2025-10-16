import React, { useState } from 'react'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
  badge?: number
}

interface TabProps {
  items: TabItem[]
  defaultActiveId?: string
  onTabChange?: (tabId: string) => void
}

const Tab: React.FC<TabProps> = ({ items, defaultActiveId, onTabChange }) => {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id)

  const handleTabClick = (tabId: string) => {
    setActiveId(tabId)
    onTabChange?.(tabId)
  }

  const activeItem = items.find((item) => item.id === activeId)

  const containerStyle: React.CSSProperties = {
    width: '100%',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  }

  const headerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    borderBottom: '1px solid #dee2e6',
    padding: '4px',
  }

  const getButtonStyle = (isActive: boolean): React.CSSProperties => ({
    position: 'relative',
    flex: 1,
    padding: '12px 20px',
    border: 'none',
    background: isActive ? 'white' : 'transparent',
    color: isActive ? '#007bff' : '#6c757d',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
  })

  const badgeStyle: React.CSSProperties = {
    background: '#dc3545',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '2px 6px',
    borderRadius: '10px',
    minWidth: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const sourceStyle: React.CSSProperties = {
    position: 'absolute',
    top: '4px',
    right: '8px',
    fontSize: '10px',
    color: '#6c757d',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'bold',
  }

  const contentStyle: React.CSSProperties = {
    padding: '24px',
    minHeight: '200px',
    background: 'white',
  }

  return (
    <div style={containerStyle}>
      {/* MF3 Badge */}
      <span
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: '#ff4757',
          color: 'white',
          fontSize: '10px',
          fontWeight: 'bold',
          padding: '2px 6px',
          borderRadius: '10px',
          zIndex: 10,
        }}
      >
        MF3
      </span>
      <div style={headerStyle}>
        {items.map((item) => (
          <button
            key={item.id}
            style={getButtonStyle(activeId === item.id)}
            onClick={() => handleTabClick(item.id)}
            onMouseEnter={(e) => {
              if (activeId !== item.id) {
                e.currentTarget.style.color = '#495057'
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)'
              }
            }}
            onMouseLeave={(e) => {
              if (activeId !== item.id) {
                e.currentTarget.style.color = '#6c757d'
                e.currentTarget.style.background = 'transparent'
              }
            }}
          >
            {item.label}
            {item.badge && <span style={badgeStyle}>{item.badge}</span>}
          </button>
        ))}
      </div>
      <div style={contentStyle}>{activeItem?.content}</div>
    </div>
  )
}

export default Tab
