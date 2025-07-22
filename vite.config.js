import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/July-code-jam",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
