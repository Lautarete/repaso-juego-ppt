import { defineConfig } from "vite";

export default defineConfig({
  base: "/NOMBRE-DEL-REPO/", // 👈 clave
  build: {
    outDir: "docs", // 👈 carpeta que va a leer GitHub Pages
  },
});
