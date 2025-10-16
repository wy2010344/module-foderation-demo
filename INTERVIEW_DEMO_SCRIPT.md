# 🎯 Module Federation 面试演示脚本

## 🚀 开场白 (30 秒)

"我想展示一个真实的 Module Federation 项目，它不仅仅是简单的组件共享，而是实现了**真正的循环依赖**和**动态组件加载**。这个项目展示了两个独立应用如何相互消费对方的组件，形成完整的微前端生态。"

## 🎪 核心演示 (3-4 分钟)

### 第一步：MF2 主应用演示

**打开**: https://mf2-8nl.pages.dev/

**演示要点**:

1. **指出组件来源标识**

   - "注意右上角的 MF2/MF3 标识，这些按钮和标签页实际来自另一个独立应用"
   - "这不是构建时的依赖，而是运行时动态加载"

2. **操作购物车展示状态管理**

   - 点击购物车标签页
   - 添加/删除商品
   - "购物车状态会实时同步到右侧的统计面板"

3. **展示循环依赖**
   - 点击"循环依赖"标签页
   - "这个组件来自 MF2，但使用了 MF3 的按钮和标签组件"
   - 点击按钮演示交互
   - "关键是：MF3 也可以反过来使用这个 MF2 组件"

### 第二步：MF3 应用演示循环依赖

**打开**: https://mf3-6sa.pages.dev/

**演示要点**:

1. **展示反向消费**

   - "这是 MF3 应用，现在我们来验证循环依赖"
   - 点击"加载循环依赖组件"按钮
   - "注意加载状态，这是真正的运行时动态加载"

2. **验证完整循环**

   - 加载完成后，指出组件结构
   - "MF3 加载了 MF2 的组件，而 MF2 的组件又使用了 MF3 的组件"
   - "这形成了完整的循环：MF2 → MF3 → MF2"

3. **展示完整仪表板加载**
   - 点击"加载完整仪表板"
   - "整个仪表板都是从 MF2 动态加载的，包含所有交互功能"

### 第三步：开发者工具验证

**打开浏览器开发者工具 → Network 标签页**

**演示要点**:

1. **刷新页面观察网络请求**

   - "可以看到 mf-manifest.json 的请求"
   - "这是 Module Federation 的清单文件"

2. **动态加载验证**
   - 在 MF3 中点击加载按钮
   - "观察新的 JavaScript 模块被动态加载"
   - "这些模块来自不同的域名，证明了真正的分布式架构"

## 🔧 技术深度讲解 (2-3 分钟)

### 配置展示

**如果有代码编辑器可用**:

1. **Module Federation 配置**

```typescript
// MF2 配置
exposes: {
  './Dashboard': './src/components/Dashboard.tsx',
  './CircularDemo': './src/components/CircularDemo.tsx',
}
remotes: {
  provider: 'mf_project_3@https://mf3-6sa.pages.dev/mf-manifest.json'
}

// MF3 配置
exposes: {
  './Button': './src/components/Button.tsx',
  './RemoteComponentShowcase': './src/components/RemoteComponentShowcase.tsx',
}
remotes: {
  provider: 'mf_project_2@https://mf2-8nl.pages.dev/mf-manifest.json'
}
```

2. **动态导入代码**

```typescript
// 在 MF3 中动态加载 MF2 组件
const RemoteCircularDemo = React.lazy(() => import('provider/CircularDemo'))

// 使用 Suspense 处理加载状态
<Suspense fallback={<LoadingSpinner />}>
  <RemoteCircularDemo />
</Suspense>
```

### CI/CD 展示

**如果可以访问 GitHub**:

1. **展示 GitHub Actions**

   - "我们的 CI/CD 系统会自动检测变化的项目"
   - "只部署修改的应用，提高效率"

2. **配置驱动的部署**
   - 展示 project-config.json
   - "添加新项目只需要修改配置文件"

## 🎯 关键卖点总结 (1 分钟)

### 技术亮点

1. **真正的循环依赖**: 不是简单的单向消费
2. **运行时动态加载**: 不是构建时依赖
3. **类型安全**: 完整的 TypeScript 支持
4. **生产级 CI/CD**: 按需部署，自动化流程

### 业务价值

1. **团队独立性**: 两个团队可以独立开发和部署
2. **技术栈灵活性**: 可以使用不同版本的依赖
3. **渐进式升级**: 可以逐步迁移和升级组件
4. **故障隔离**: 一个应用的问题不会影响另一个

## 🤔 预期问题和回答

### Q: "如何处理版本兼容性？"

A: "我们使用 shared 配置来共享 React 等核心依赖，确保单例模式。对于业务组件，通过接口约定和渐进式升级来处理。"

### Q: "性能如何？"

A: "初始加载时会有额外的网络请求，但后续的组件加载会被缓存。我们可以通过预加载和 CDN 来优化。"

### Q: "如何调试？"

A: "每个应用都可以独立开发和调试。在集成环境中，可以通过 source map 和开发者工具来调试远程组件。"

### Q: "团队协作如何管理？"

A: "我们通过接口约定、类型定义和版本管理来协调。每个团队负责自己的组件，通过 API 契约来保证兼容性。"

---

**总结**: "这个演示展示了 Module Federation 不仅仅是技术概念，而是可以解决实际业务问题的成熟方案。它让我们能够构建真正的微前端架构，实现团队独立、技术栈灵活、渐进式升级的目标。"
