import React from 'react'
import './ProviderComponent.css'
import Button from 'provider/Button'
import Tab from 'provider/Tab'

const Provider: React.FC = () => {
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
        <Button />
        <Tab />
      </div>
      <h1 className="title">来自mf2-8nl的组件</h1>
    </div>
  )
}

export default Provider
