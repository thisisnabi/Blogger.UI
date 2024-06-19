import react from '@vitejs/plugin-react'
// import tailwindcss from 'tailwindcss'
import {defineConfig} from 'vite'
import svgrPlugin from 'vite-plugin-svgr'
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgrPlugin()],

  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',
  },
  // css: {
  //   postcss: {
  //     plugins: [tailwindcss],
  //   },
  // },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
})
