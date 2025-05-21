import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tsconfigPaths(),
    ViteImageOptimizer(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customChunk: (args) => {
        let { file } = args
        if (file.startsWith('src/pages/')) {
          file = file.substring(4)
          file = file.replace(/\.[^.$]/, '')
          return false
        }
        return null
      }
    })
  ],
  preview: {
    port: 4173,
    open: true,
    strictPort: true,
    historyApiFallback: {
      rewrites: [
        { from: /\/.*/, to: '/index.html' }
      ]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  assetsInclude: ['**/*.glb'],
  optimizeDeps: {
    force: true,
    include: ['three'],
    esbuildOptions: {
      loader: {
        '.ts': 'tsx'
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'dist',
    minify: 'terser',
    manifest: true,
    sourcemap: false,
    reportCompressedSize: true,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code == 'EVAL') return
        warn(warning)
      },
      output: {
        manualChunks(id) {
          if (id.indexOf('node_modules') !== -1) {
            const basic = id.toString().split('node_modules/')[1]
            const sub1 = basic.split('/')[0]
            if (sub1 !== '.pnpm') {
              return sub1.toString()
            }
            const name2 = basic.split('/')[1]
            return name2.split('@')[name2[0] === '@' ? 1: 0].toString()
          }
        }
      }
    }
  }
})
