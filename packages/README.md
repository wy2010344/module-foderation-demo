这只是 packages 目录下的 demo packages 用于演示 Vite + Module Federation（@originjs/vite-plugin-federation）。

两个示例：

- mf_demo_remote: 在 5001 端口提供 remoteEntry.js，并暴露 ./Button
- mf_demo_host: 在 3000 端口运行，会从 http://localhost:5001/remoteEntry.js 加载远端 Button

运行步骤（在 monorepo 根目录执行）：

1. 安装依赖（使用 pnpm）：
   pnpm install

2. 在两个包分别启动 dev：
   pnpm --filter mf_demo_remote dev
   pnpm --filter mf_demo_host dev

3. 打开浏览器访问 host: http://localhost:3000

注意：如果你使用 macOS 并在不同网络或容器中测试，请确保端口 5001 对 host 可访问，并处理 CORS/headers。
