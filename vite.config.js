import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createMpaPlugin } from "vite-plugin-virtual-mpa";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    createMpaPlugin({
      pages: [
        {
          name: "test-index",
          template: "./templates/test/index/index.html",
          entry: resolve(__dirname, "./src/pages/test/index/index.js"),
          filename: "test/index/index.html"
        },
        {
          name: "test-main",
          template: "./templates/test/main/index.html",
          entry: resolve(__dirname, "./src/pages/test/main/index.js"),
          filename: "test/main/index.html"
        }
      ]
    }),
    splitVendorChunkPlugin()
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/js/[name].[hash].js",
        assetFileNames: "assets/css/[name].[hash][extname]",
        chunkFileNames: ({ name }) => {
          // console.log('chunkFileNames', name)
          const filename = name === "vendor" ? "vendor" : "shared"
          return `assets/js/${filename}.[hash].js`
        },
      }
    }
  }
})
