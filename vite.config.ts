import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/", // Remplace "portfolio" par le nom de ton dépôt GitHub
  plugins: [react()],
});
