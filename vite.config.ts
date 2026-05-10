import { defineConfig } from "vite";

export default defineConfig({
  base: "/repaso-juego-ppt/", // 👈 clave
  build: {
    outDir: "docs", // 👈 carpeta que va a leer GitHub Pages
  },
});
