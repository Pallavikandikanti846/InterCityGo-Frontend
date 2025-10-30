import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://intercitygo-1.onrender.com/api",
        changeOrigin: true,
      },
    },
  },
});
