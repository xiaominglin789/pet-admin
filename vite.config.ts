import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


const serve_port = Number(process.env.VUE_APP_SERVE_PORT) || 3001;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/views": path.resolve(__dirname, "src/views"),
      "@/api": path.resolve(__dirname, "src/api"),
    }
  },
  server: {
    port: serve_port
  }
})
