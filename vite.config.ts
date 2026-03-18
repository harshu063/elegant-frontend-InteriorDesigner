import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

/**
 * Copies & renames images from assets/imagess/ → public/images/img-XX.jpeg
 * Works for both `vite dev` and `vite build`.
 */
function copyImagesPlugin(): Plugin {
  const sourceDir = path.resolve(__dirname, 'assets/imagess')
  const destDir = path.resolve(__dirname, 'public/images')

  function copyImages() {
    if (!fs.existsSync(sourceDir)) return
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })

    const files = fs.readdirSync(sourceDir)
      .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
      .sort()

    files.forEach((file, i) => {
      const num = String(i + 1).padStart(2, '0')
      fs.copyFileSync(
        path.join(sourceDir, file),
        path.join(destDir, `img-${num}.jpeg`)
      )
    })
  }

  return {
    name: 'copy-images',
    buildStart() { copyImages() },
    configureServer() { copyImages() },
  }
}

export default defineConfig({
  plugins: [react(), copyImagesPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    historyApiFallback: true,
  },
})
