import React, { Suspense, useState } from 'react'
import Button from './Button'

// 动态导入 MF2 的组件
const RemoteCircularDemo = React.lazy(() => import('provider/CircularDemo'))
const RemoteDashboard = React.lazy(() => import('provider/Dashboard'))

const RemoteComponentShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<'circular' | 'dashboard'>(
    'circular'
  )
  const [showDemo, setShowDemo] = useState(false)

  const containerStyle: React.CSSProperties = {
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  }

  const headerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  }

  const contentStyle: React.CSSProperties = {
    padding: '20px',
  }

  const buttonGroupStyle: React.CSSProperties = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
  }

  const loadingStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    borderRadius: '12px',
    color: '#666',
    fontSize: '16px',
  }

  const infoBoxStyle: React.CSSProperties = {
    background: 'rgba(240, 147, 251, 0.1)',
    border: '2px dashed #f093fb',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '20px',
    textAlign: 'center',
  }

  return (
    <div style={{ ...containerStyle, position: 'relative' }}>
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
        <h2 style={{ margin: '0 0 8px 0' }}>🎯 MF3 远程组件展示</h2>
        <p style={{ margin: 0, opacity: 0.9 }}>
          这里展示 MF3 如何动态加载和使用 MF2 的组件
        </p>
      </div>

      <div style={contentStyle}>
        <div style={infoBoxStyle}>
          <p style={{ color: '#f093fb', margin: 0, fontSize: '14px' }}>
            💡 这个组件来自 MF3，但可以动态加载 MF2 的组件，形成真正的循环依赖
          </p>
        </div>

        <div style={buttonGroupStyle}>
          <Button
            variant={activeDemo === 'circular' ? 'primary' : 'secondary'}
            onClick={() => {
              setActiveDemo('circular')
              setShowDemo(true)
            }}
          >
            加载循环依赖组件
          </Button>
          <Button
            variant={activeDemo === 'dashboard' ? 'primary' : 'secondary'}
            onClick={() => {
              setActiveDemo('dashboard')
              setShowDemo(true)
            }}
          >
            加载完整仪表板
          </Button>
          <Button variant="danger" onClick={() => setShowDemo(false)}>
            隐藏组件
          </Button>
        </div>

        {showDemo && (
          <div
            style={{
              border: '2px solid #e9ecef',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#f8f9fa',
                padding: '12px',
                borderBottom: '1px solid #e9ecef',
                fontSize: '14px',
                color: '#666',
                textAlign: 'center',
              }}
            >
              🔄 正在展示来自 MF2 的{' '}
              {activeDemo === 'circular' ? '循环依赖组件' : '仪表板组件'}
            </div>

            <Suspense
              fallback={
                <div style={loadingStyle}>
                  <div>
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        border: '4px solid #f3f3f3',
                        borderTop: '4px solid #f093fb',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 16px',
                      }}
                    ></div>
                    <style>
                      {`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}
                    </style>
                    正在从 MF2 加载组件...
                  </div>
                </div>
              }
            >
              {activeDemo === 'circular' ? (
                <RemoteCircularDemo />
              ) : (
                <RemoteDashboard />
              )}
            </Suspense>
          </div>
        )}

        <div
          style={{
            marginTop: '20px',
            padding: '16px',
            background: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#666',
          }}
        >
          <h4 style={{ margin: '0 0 12px 0', color: '#333' }}>🏗️ 架构说明</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>MF3 的这个组件可以动态加载 MF2 的组件</li>
            <li>MF2 的组件又使用了 MF3 的 Button 和 Tab 组件</li>
            <li>形成了真正的循环依赖：MF2 ↔ MF3</li>
            <li>所有组件都是运行时动态加载，不是构建时依赖</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RemoteComponentShowcase
