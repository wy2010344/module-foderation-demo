# 🚀 Module Federation 循环依赖演示项目

[![Deploy Status](https://github.com/your-username/mf-circular-demo/workflows/Deploy%20Module%20Federation%20Projects/badge.svg)](https://github.com/your-username/mf-circular-demo/actions)
[![MF2 Live Demo](https://img.shields.io/badge/MF2-Live%20Demo-blue)](https://mf2-8nl.pages.dev/)
[![MF3 Live Demo](https://img.shields.io/badge/MF3-Live%20Demo-pink)](https://mf3-6sa.pages.dev/)

> 一个展示 **Module Federation 真正循环依赖** 的实际项目，包含两个相互消费组件的独立应用，完美演示微前端架构的强大能力。

## 🎯 项目亮点

### ✨ 核心特性

- 🔄 **真正的循环依赖**: 两个应用相互消费对方的组件
- ⚡ **运行时动态加载**: 使用 React.lazy 和 Suspense
- 🎨 **现代化 UI**: 渐变背景、动画效果、响应式设计
- 🏷️ **清晰的组件标识**: 每个组件都有来源 badge
- 📊 **实时状态管理**: 跨应用的购物车状态同步
- 🚀 **生产级 CI/CD**: 按需部署，自动化流程

### 🏗️ 架构设计

```
┌─────────────────────────┐    ┌─────────────────────────┐
│      MF2 (Host)         │◄──►│     MF3 (Remote)        │
│                         │    │                         │
│ ✅ Dashboard            │    │ ✅ Button               │
│ ✅ CircularDemo         │    │ ✅ Tab                  │
│ ✅ 数据可视化           │    │ ✅ ShoppingCart         │
│ ✅ 实时统计             │    │ ✅ RemoteComponentShow  │
│                         │    │                         │
│ 🔄 消费: Button, Tab,   │    │ 🔄 消费: Dashboard,     │
│    ShoppingCart         │    │    CircularDemo         │
└─────────────────────────┘    └─────────────────────────┘
```

## 🎪 在线演示

### 🔵 MF2 主应用

**🔗 [https://mf2-8nl.pages.dev/](https://mf2-8nl.pages.dev/)**

- 完整的电商仪表板
- 集成 MF3 的按钮、标签页、购物车组件
- 实时数据更新和图表展示
- 循环依赖演示组件

### 🔴 MF3 应用

**🔗 [https://mf3-6sa.pages.dev/](https://mf3-6sa.pages.dev/)**

- 远程组件展示和动态加载
- 可以加载 MF2 的完整仪表板
- 本地组件库展示
- 循环依赖验证

## 🛠️ 技术栈

- **构建工具**: [Rsbuild](https://rsbuild.dev/) (基于 Rspack)
- **微前端**: [Module Federation](https://module-federation.io/)
- **前端框架**: React 18 + TypeScript
- **部署平台**: Cloudflare Pages
- **CI/CD**: GitHub Actions
- **包管理**: pnpm

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 8+

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/mf-circular-demo.git
cd mf-circular-demo

# 安装依赖
pnpm install
```

### 本地开发

```bash
# 启动 MF3 (端口 3000)
cd packages/mf_project_3
pnpm dev

# 新终端启动 MF2 (端口 3001)
cd packages/mf_project_2
pnpm dev
```

访问:

- MF2: http://localhost:3001
- MF3: http://localhost:3000

### 构建部署

```bash
# 构建所有项目
pnpm build

# 部署到 Cloudflare Pages
pnpm deploy
```

## 📁 项目结构

```
mf-circular-demo/
├── packages/
│   ├── mf_project_2/          # MF2 应用 (主机应用)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Dashboard.tsx      # 📊 仪表板组件
│   │   │   │   └── CircularDemo.tsx   # 🔄 循环依赖演示
│   │   │   └── App.tsx
│   │   ├── module-federation.config.ts
│   │   └── rsbuild.config.ts
│   └── mf_project_3/          # MF3 应用 (远程应用)
│       ├── src/
│       │   ├── components/
│       │   │   ├── Button.tsx         # 🔘 按钮组件
│       │   │   ├── Tab.tsx           # 📑 标签页组件
│       │   │   ├── ShoppingCart.tsx  # 🛒 购物车组件
│       │   │   └── RemoteComponentShowcase.tsx # 🎯 远程组件展示
│       │   └── App.tsx
│       ├── module-federation.config.ts
│       └── rsbuild.config.ts
├── .github/
│   ├── workflows/
│   │   └── deploy-all.yml     # 🚀 CI/CD 配置
│   └── project-config.json    # 📋 项目配置
└── README.md
```

## 🔄 循环依赖演示

### 依赖路径

```
MF2.Dashboard
  ↓ 使用
MF3.Button, MF3.Tab, MF3.ShoppingCart
  ↓ MF3 应用中
MF3.RemoteComponentShowcase
  ↓ 动态加载
MF2.CircularDemo
  ↓ 又使用
MF3.Button, MF3.Tab
```

### 组件标识系统

- 🔵 **MF2 组件**: 蓝色渐变 badge
- 🔴 **MF3 组件**: 红色 badge
- 🏷️ **应用标识**: 主页面显示当前应用名称

## 🎯 演示脚本

### 1. MF2 主应用演示 (40 秒)

1. 指出页面标题的 `MF2` 标识
2. 展示各组件的 `MF3` badge 标识
3. 点击"循环依赖"标签页
4. 演示 MF2 组件使用 MF3 组件

### 2. MF3 应用演示 (40 秒)

1. 指出页面标题的 `MF3` 标识
2. 点击"远程组件展示"标签页
3. 动态加载 MF2 的循环依赖组件
4. 验证完整的循环依赖

### 3. 技术深度展示 (40 秒)

- 开发者工具网络请求
- Module Federation 配置
- 动态导入代码

## 🚀 CI/CD 特性

### 智能部署

- ✅ **按需部署**: 只部署变化的项目
- ✅ **并行构建**: 多项目同时构建
- ✅ **配置驱动**: 添加新项目只需修改配置文件
- ✅ **自动检测**: Git 变更自动触发部署

### 部署配置

```json
{
  "projects": [
    {
      "name": "mf_project_2",
      "path": "packages/mf_project_2",
      "cloudflare_project": "mf2",
      "url": "https://mf2-8nl.pages.dev/"
    },
    {
      "name": "mf_project_3",
      "path": "packages/mf_project_3",
      "cloudflare_project": "mf3",
      "url": "https://mf3-6sa.pages.dev/"
    }
  ]
}
```

## 🔧 配置说明

### Module Federation 配置

**MF2 配置** (`packages/mf_project_2/module-federation.config.ts`):

```typescript
export default createModuleFederationConfig({
  name: 'mf_project_2',
  exposes: {
    './Dashboard': './src/components/Dashboard.tsx',
    './CircularDemo': './src/components/CircularDemo.tsx',
  },
  remotes: {
    provider:
      process.env.NODE_ENV === 'development'
        ? 'mf_project_3@http://localhost:3000/mf-manifest.json'
        : 'mf_project_3@https://mf3-6sa.pages.dev/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

**MF3 配置** (`packages/mf_project_3/module-federation.config.ts`):

```typescript
export default createModuleFederationConfig({
  name: 'mf_project_3',
  exposes: {
    './Button': './src/components/Button.tsx',
    './Tab': './src/components/Tab.tsx',
    './ShoppingCart': './src/components/ShoppingCart.tsx',
    './RemoteComponentShowcase': './src/components/RemoteComponentShowcase.tsx',
  },
  remotes: {
    provider:
      process.env.NODE_ENV === 'development'
        ? 'mf_project_2@http://localhost:3001/mf-manifest.json'
        : 'mf_project_2@https://mf2-8nl.pages.dev/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
```

## 🤔 常见问题

### Q: 如何添加新的微前端应用？

A: 只需要在 `.github/project-config.json` 中添加新项目配置，CI/CD 会自动处理。

### Q: 如何处理版本兼容性？

A: 使用 `shared` 配置共享核心依赖，通过接口约定和渐进式升级处理业务组件。

### Q: 性能如何优化？

A: 可以通过预加载、CDN、组件懒加载等方式优化。项目已实现按需加载和缓存。

### Q: 如何调试远程组件？

A: 每个应用可以独立开发调试，集成环境通过 source map 调试远程组件。

## 📚 相关文档

- [演示指南](./SIMPLE_DEMO_GUIDE.md) - 详细的演示流程
- [面试脚本](./INTERVIEW_DEMO_SCRIPT.md) - 完整的面试演示脚本
- [技术深度](./DEMO_SHOWCASE.md) - 技术实现细节

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

**这个项目完美展示了 Module Federation 不仅仅是技术概念，而是可以解决实际业务问题的成熟方案。** 🎉

[![Star this repo](https://img.shields.io/github/stars/your-username/mf-circular-demo?style=social)](https://github.com/your-username/mf-circular-demo)
