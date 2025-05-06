
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import componentTagger from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/medlink-project/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },
    outDir: 'dist'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
}));
