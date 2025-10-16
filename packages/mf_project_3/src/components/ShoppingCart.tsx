import React, { useState, useEffect } from 'react'
import Button from './Button'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface ShoppingCartProps {
  onCartUpdate?: (items: CartItem[], total: number) => void
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ onCartUpdate }) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'MacBook Pro M3',
      price: 1999,
      quantity: 1,
      image: '💻',
    },
    {
      id: '2',
      name: 'iPhone 15 Pro',
      price: 999,
      quantity: 2,
      image: '📱',
    },
  ])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    onCartUpdate?.(items, total)
  }, [items, total, onCartUpdate])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setItems(items.filter((item) => item.id !== id))
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const addRandomItem = () => {
    const products = [
      { name: 'AirPods Pro', price: 249, image: '🎧' },
      { name: 'iPad Air', price: 599, image: '📱' },
      { name: 'Apple Watch', price: 399, image: '⌚' },
      { name: 'Magic Mouse', price: 79, image: '🖱️' },
    ]

    const randomProduct = products[Math.floor(Math.random() * products.length)]
    const newItem: CartItem = {
      id: Date.now().toString(),
      ...randomProduct,
      quantity: 1,
    }

    setItems([...items, newItem])
  }

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
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

      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '18px' }}>🛒 购物车</h3>
        <span
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {items.length} 件商品
        </span>
      </div>

      {/* Items */}
      <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '16px 20px',
              borderBottom: '1px solid #f0f0f0',
            }}
          >
            <span style={{ fontSize: '32px', marginRight: '16px' }}>
              {item.image}
            </span>
            <div style={{ flex: 1 }}>
              <h4
                style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#333' }}
              >
                {item.name}
              </h4>
              <p style={{ margin: 0, color: '#666', fontWeight: 'bold' }}>
                ${item.price}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                style={{
                  width: '28px',
                  height: '28px',
                  border: '1px solid #ddd',
                  background: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span
                style={{
                  minWidth: '24px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: '16px',
                }}
              >
                {item.quantity}
              </span>
              <button
                style={{
                  width: '28px',
                  height: '28px',
                  border: '1px solid #ddd',
                  background: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#333',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: '20px',
          background: '#f8f9fa',
          borderTop: '1px solid #e9ecef',
        }}
      >
        <div
          style={{
            fontSize: '18px',
            marginBottom: '16px',
            textAlign: 'center',
            color: '#333',
          }}
        >
          总计: <strong>${total.toLocaleString()}</strong>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
          <Button variant="secondary" size="small" onClick={addRandomItem}>
            添加随机商品
          </Button>
          <Button variant="primary">结算 (${total.toLocaleString()})</Button>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
