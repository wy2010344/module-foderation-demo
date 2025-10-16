import React, { useState } from 'react'
import Button from 'provider/Button'
import Tab from 'provider/Tab'

const CircularDemo: React.FC = () => {
  const [clickCount, setClickCount] = useState(0)
  const [message, setMessage] = useState('点击按钮开始演示')

  const handleButtonClick = () => {
    setClickCount((prev) => prev + 1)
    setMessage(`来自 MF3 的按钮被点击了 ${clickCount + 1} 次！`)
  }

  const tabItems = [
    {
      id: 'demo',
      label: '循环依赖演示',
      content: (
        <div
          style={{
            padding: '20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: '12px',
            margin: '10px 0',
          }}
        >
          <h3 style={{ color: '#333', marginBottom: '16px' }}>
            🔄 这是 MF2 的组件
          </h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>{message}</p>
          <div style={{ marginBottom: '20px' }}>
            <Button variant="primary" onClick={handleButtonClick}>
              MF3 按钮 (点击次数: {clickCount})
            </Button>
          </div>
          <div
            style={{
              background: 'rgba(102, 126, 234, 0.1)',
              padding: '16px',
              borderRadius: '8px',
              border: '2px dashed #667eea',
            }}
          >
            <p style={{ color: '#667eea', margin: 0, fontSize: '14px' }}>
              💡 这个组件来自 MF2，但使用了 MF3 的按钮组件
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'explanation',
      label: '技术说明',
      content: (
        <div style={{ padding: '20px' }}>
          <h4 style={{ color: '#333', marginBottom: '16px' }}>
            🏗️ 循环依赖架构
          </h4>
          <div
            style={{
              display: 'grid',
              gap: '16px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '16px',
                borderRadius: '8px',
              }}
            >
              <h5 style={{ margin: '0 0 8px 0' }}>MF2 应用</h5>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                <li>提供: Dashboard, CircularDemo</li>
                <li>消费: Button, Tab, ShoppingCart</li>
              </ul>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '16px',
                borderRadius: '8px',
              }}
            >
              <h5 style={{ margin: '0 0 8px 0' }}>MF3 应用</h5>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                <li>提供: Button, Tab, ShoppingCart</li>
                <li>消费: Dashboard, CircularDemo</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        margin: '20px 0',
      }}
    >
      {/* MF2 Badge */}
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
        MF2
      </span>
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ margin: '0 0 8px 0' }}>🔄 循环依赖演示组件</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>
          来自 MF2，使用 MF3 的组件，而 MF3 又可以使用这个组件
        </p>
      </div>

      <Tab items={tabItems} defaultActiveId="demo" />
    </div>
  )
}

export default CircularDemo
