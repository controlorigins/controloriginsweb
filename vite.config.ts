import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// NOTE: Use a relative base so assets work on GitHub Pages project sites (served under /<repo>/)
// and also on custom domains. Relative base avoids 404s for /assets/* when hosted under a subpath.
const PROD_BASE = "./";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? PROD_BASE : "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-toast", "@radix-ui/react-tooltip"],
        },
      },
    },
    // Optimize for static deployment
    assetsDir: "assets",
    sourcemap: false,
    minify: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port: 4173,
    host: true,
  },
});
