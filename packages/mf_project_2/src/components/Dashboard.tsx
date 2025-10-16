import React, { useState, useEffect } from 'react'
import Button from 'provider/Button'
import Tab from 'provider/Tab'
import ShoppingCart from 'provider/ShoppingCart'
import CircularDemo from './CircularDemo'
import './Dashboard.css'

interface DashboardStats {
  totalSales: number
  activeUsers: number
  conversionRate: number
  revenue: number
}

const Dashboard: React.FC = () => {
  const [stats, setStats] = useState<DashboardStats>({
    totalSales: 1234,
    activeUsers: 567,
    conversionRate: 3.2,
    revenue: 89012,
  })

  const [cartTotal, setCartTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // 模拟实时数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        totalSales: prev.totalSales + Math.floor(Math.random() * 5),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1,
        conversionRate: +(
          prev.conversionRate +
          (Math.random() - 0.5) * 0.1
        ).toFixed(1),
        revenue: prev.revenue + Math.floor(Math.random() * 100),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleRefreshData = async () => {
    setIsLoading(true)
    // 模拟 API 调用
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStats({
      totalSales: Math.floor(Math.random() * 2000) + 1000,
      activeUsers: Math.floor(Math.random() * 800) + 200,
      conversionRate: +(Math.random() * 5 + 1).toFixed(1),
      revenue: Math.floor(Math.random() * 100000) + 50000,
    })
    setIsLoading(false)
  }

  const tabItems = [
    {
      id: 'overview',
      label: '概览',
      content: (
        <div className="tab-content">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-info">
                <h3>{stats.totalSales.toLocaleString()}</h3>
                <p>总销售额</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <h3>{stats.activeUsers.toLocaleString()}</h3>
                <p>活跃用户</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <div className="stat-info">
                <h3>{stats.conversionRate}%</h3>
                <p>转化率</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-info">
                <h3>${stats.revenue.toLocaleString()}</h3>
                <p>总收入</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'sales',
      label: '销售',
      badge: 5,
      content: (
        <div className="tab-content">
          <div className="sales-chart">
            <h4>📈 销售趋势</h4>
            <div className="chart-placeholder">
              <div className="chart-bars">
                {[65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                  <div
                    key={index}
                    className="chart-bar"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <p>过去7天的销售数据 (来自 MF2 组件)</p>
          </div>
        </div>
      ),
    },
    {
      id: 'cart',
      label: '购物车',
      content: (
        <div className="tab-content">
          <ShoppingCart onCartUpdate={(items, total) => setCartTotal(total)} />
        </div>
      ),
    },
    {
      id: 'circular',
      label: '循环依赖',
      badge: 1,
      content: (
        <div className="tab-content">
          <CircularDemo />
        </div>
      ),
    },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="dashboard__title">
          <h1>
            🚀 微前端电商仪表板{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '4px 12px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 'bold',
                marginLeft: '12px',
              }}
            >
              MF2
            </span>
          </h1>
          <p>展示 Module Federation 跨应用组件协作</p>
        </div>
        <div className="dashboard__actions">
          <Button
            variant="secondary"
            size="medium"
            onClick={handleRefreshData}
            loading={isLoading}
          >
            刷新数据
          </Button>
          <Button variant="primary" size="medium">
            导出报告
          </Button>
        </div>
      </div>

      <div className="dashboard__content">
        <div className="dashboard__main">
          <Tab
            items={tabItems}
            defaultActiveId="overview"
            onTabChange={(tabId) => console.log('切换到标签:', tabId)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <h3
              style={{ margin: '0 0 16px 0', color: '#333', fontSize: '16px' }}
            >
              🔴 实时信息
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <span style={{ color: '#666', fontSize: '14px' }}>
                购物车总额:
              </span>
              <strong style={{ color: '#333', fontWeight: '600' }}>
                ${cartTotal.toLocaleString()}
              </strong>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
              }}
            >
              <span style={{ color: '#666', fontSize: '14px' }}>在线用户:</span>
              <strong style={{ color: '#333', fontWeight: '600' }}>
                {stats.activeUsers}
              </strong>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
              }}
            >
              <span style={{ color: '#666', fontSize: '14px' }}>今日收入:</span>
              <strong style={{ color: '#333', fontWeight: '600' }}>
                ${stats.revenue.toLocaleString()}
              </strong>
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <h4
              style={{ margin: '0 0 16px 0', color: '#333', fontSize: '14px' }}
            >
              🧩 模块来源
            </h4>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px',
              }}
            >
              <span
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white',
                  background:
                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                MF2
              </span>
              <span style={{ color: '#333', fontSize: '14px' }}>
                仪表板、图表
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span
                style={{
                  padding: '4px 8px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: 'white',
                  background:
                    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                }}
              >
                MF3
              </span>
              <span style={{ color: '#333', fontSize: '14px' }}>
                按钮、标签、购物车
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
