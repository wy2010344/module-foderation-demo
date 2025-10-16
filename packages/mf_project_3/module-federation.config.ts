import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin'
/**
 * consumer
 */
export default createModuleFederationConfig({
  name: 'mf_project_3',
  exposes: {
    './Button': './src/components/Button.tsx',
    './Tab': './src/components/Tab.tsx',
  },
  remotes: {
    provider:
      process.env.NODE_ENV === 'development'
        ? 'rslib_provider@http://localhost:3001/mf-manifest.json'
        : 'rslib_provider@https://mf2-8nl.pages.dev/mf-manifest.json',
    //'rslib_provider@https://unpkg.com/module-federation-rslib-provider@latest/dist/mf/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
})
