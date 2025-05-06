import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // set base for Github Pages
  base: mode === "production" ? "/medlink-project/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: true, // you can set to false to disable the error overlay
    },
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      // both @/ and ~/ will point at src/
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
