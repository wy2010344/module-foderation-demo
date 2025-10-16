# Module Federation 使用 demo

[![Deploy Status](https://github.com/wy2010344/module-federation-demo/actions/workflows/deploy-all.yml/badge.svg)](https://github.com/wy2010344/mf-circular-demo/actions)
[![MF2 Demo](https://img.shields.io/badge/MF2-Live%20Demo-blue)](https://mf2-8nl.pages.dev/)
[![MF3 Demo](https://img.shields.io/badge/MF3-Live%20Demo-pink)](https://mf3-6sa.pages.dev/)

一个展示 Module Federation 循环依赖的实际项目，包含两个相互消费组件的独立应用，部署在 Cloudflare Pages 上。

## 在线演示

- **MF2 应用**: https://mf2-8nl.pages.dev/
- **MF3 应用**: https://mf3-6sa.pages.dev/

## 项目特点

- 🔄 **循环依赖**: 两个应用相互消费对方的组件
- ⚡ **动态加载**: 运行时动态加载远程组件
- 🏷️ **组件标识**: 每个组件都有来源标识
- 🚀 **自动部署**: GitHub Actions + Cloudflare Pages

## 技术栈

- **Module Federation**: 微前端架构
- **Rsbuild**: 构建工具 (基于 Rspack)
- **React 18**: 前端框架
- **TypeScript**: 类型安全
- **Cloudflare Pages**: 部署平台

## 快速开始

### 安装依赖

```bash
git clone https://github.com/wy2010344/mf-circular-demo.git
cd mf-circular-demo
pnpm install
```

### 本地开发

```bash
# 启动 MF3 (端口 3000)
cd packages/mf_project_3
pnpm dev

# 启动 MF2 (端口 3001)
cd packages/mf_project_2
pnpm dev
```

### 构建部署

```bash
# 构建所有项目
pnpm build

# 部署到 Cloudflare Pages
pnpm deploy
```

## 项目结构

```
├── packages/
│   ├── mf_project_2/          # MF2 应用
│   │   ├── src/components/
│   │   │   ├── Dashboard.tsx      # 仪表板组件
│   │   │   └── CircularDemo.tsx   # 循环依赖演示
│   │   └── module-federation.config.ts
│   └── mf_project_3/          # MF3 应用
│       ├── src/components/
│       │   ├── Button.tsx         # 按钮组件
│       │   ├── Tab.tsx           # 标签页组件
│       │   ├── ShoppingCart.tsx  # 购物车组件
│       │   └── RemoteComponentShowcase.tsx
│       └── module-federation.config.ts
└── .github/workflows/deploy-all.yml
```

## Module Federation 配置

### MF2 配置

```typescript
export default createModuleFederationConfig({
  name: 'mf_project_2',
  exposes: {
    './Dashboard': './src/components/Dashboard.tsx',
    './CircularDemo': './src/components/CircularDemo.tsx',
  },
  remotes: {
    provider: 'mf_project_3@https://mf3-6sa.pages.dev/mf-manifest.json',
  },
})
```

### MF3 配置

```typescript
export default createModuleFederationConfig({
  name: 'mf_project_3',
  exposes: {
    './Button': './src/components/Button.tsx',
    './Tab': './src/components/Tab.tsx',
    './ShoppingCart': './src/components/ShoppingCart.tsx',
  },
  remotes: {
    provider: 'mf_project_2@https://mf2-8nl.pages.dev/mf-manifest.json',
  },
})
```

## 循环依赖演示

1. **MF2** 使用 MF3 的 Button、Tab、ShoppingCart 组件
2. **MF3** 可以动态加载 MF2 的 Dashboard、CircularDemo 组件
3. 形成完整的循环：MF2 → MF3 → MF2

## 自动部署

项目使用 GitHub Actions 自动部署到 Cloudflare Pages：

- 检测变化的项目
- 只构建和部署修改的应用
- 支持并行部署
- 配置驱动，易于扩展

## 环境要求

- Node.js 18+
- pnpm 8+

## 许可证

MIT
