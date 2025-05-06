import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // on a custom domain, assets are served from the root
  base: '/',
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true, // set to false to disable the error overlay
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // both @/ and ~/ point to src/
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
    // optionally customize assets directory
    // assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
