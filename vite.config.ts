
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Using relative path for GitHub Pages deployment
  base: mode === 'production' ? '/medlink-project/' : '/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true,
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    minify: "terser",
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
