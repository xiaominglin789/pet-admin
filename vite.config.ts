import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";

const servePort = Number(process.env.VUE_APP_SERVE_PORT) || 3001;
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
      "@api": path.resolve(__dirname, "src/api"),
    }
  },
  plugins: [vue(), styleImport({
    libs: [{
      libraryName: 'element-plus',
      esModule: true,
      ensureStyleFile: true,
      resolveStyle: (name) => {
        name = name.slice(3)
        return `element-plus/packages/theme-chalk/src/${name}.scss`;
      },
      resolveComponent: (name) => {
        return `element-plus/lib/${name}`;
      },
    }]
  })],
  server: {
    port: servePort,
    proxy: {
      "/api": {
        target: "http://localhost:10086",
        ws: true,
        rewrite: (path) => path.replace("/api", "")
      }
    }
  }
})
