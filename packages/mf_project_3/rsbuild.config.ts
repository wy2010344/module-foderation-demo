import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'
import moduleFederationConfig from './module-federation.config'

export default defineConfig({
  output: {
    assetPrefix: 'https://mf3-6sa.pages.dev/',
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
})
