import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    publicDir: "publico",

    server: {
      port: 5173,
      strictPort: true,
      proxy: {
        "/api": {
          target: process.env.API_KEY,
          changeOrigin: true,
        },
      },
    },
  };
});