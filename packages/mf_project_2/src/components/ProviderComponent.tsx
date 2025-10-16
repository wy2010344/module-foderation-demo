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
      <h1 className="title">这是向外露出的组件 更新 ++</h1>
    </div>
  )
}

export default Provider
