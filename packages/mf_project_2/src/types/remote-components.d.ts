declare module 'provider/Button' {
  import React from 'react'

  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger'
    size?: 'small' | 'medium' | 'large'
    onClick?: () => void
    children: React.ReactNode
    loading?: boolean
    disabled?: boolean
  }

  const Button: React.FC<ButtonProps>
  export default Button
}

declare module 'provider/Tab' {
  import React from 'react'

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

  const Tab: React.FC<TabProps>
  export default Tab
}

declare module 'provider/ShoppingCart' {
  import React from 'react'

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

  const ShoppingCart: React.FC<ShoppingCartProps>
  export default ShoppingCart
}
