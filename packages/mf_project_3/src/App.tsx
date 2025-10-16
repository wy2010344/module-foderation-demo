import './App.css'
import React, { useState } from 'react'
import Button from './components/Button'
import Tab from './components/Tab'
import RemoteComponentShowcase from './components/RemoteComponentShowcase'

const App = () => {
  const [activeTab, setActiveTab] = useState('showcase')

  const tabItems = [
    {
      id: 'showcase',
      label: '远程组件展示',
      content: <RemoteComponentShowcase />,
    },
    {
      id: 'local',
      label: '本地组件',
      content: (
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ color: '#333', marginBottom: '20px' }}>
            🧩 MF3 本地组件展示
          </h3>
          <p style={{ color: '#666', marginBottom: '30px' }}>
            这些是 MF3 应用自己的组件，同时也暴露给其他应用使用
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '30px',
            }}
          >
            <Button variant="primary">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="danger">危险按钮</Button>
          </div>
          <div
            style={{
              background: 'rgba(240, 147, 251, 0.1)',
              border: '2px dashed #f093fb',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <p style={{ color: '#f093fb', margin: 0, fontSize: '14px' }}>
              💡 这些组件被 MF2 应用消费，同时 MF3 也消费 MF2 的组件
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="content">
      <div
        style={{
          padding: '20px',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            padding: '20px',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <h1
            style={{
              color: 'white',
              margin: '0 0 10px 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            🎯 MF3 应用 - 循环依赖演示
            <span
              style={{
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                marginLeft: '12px',
              }}
            >
              MF3
            </span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', margin: 0 }}>
            展示 Module Federation 的双向依赖和动态组件加载
          </p>
        </div>

        <Tab
          items={tabItems}
          defaultActiveId="showcase"
          onTabChange={(tabId) => setActiveTab(tabId)}
        />
      </div>
    </div>
  )
}

export default App
