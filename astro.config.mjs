// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // Importa el adaptador de Vercel

// https://astro.build/config
export default defineConfig({
  output: "static", // Exportar archivos estáticos
  trailingSlash: "always", // Asegura que las rutas terminan en "/"
  adapter: vercel({}), // Usa el adaptador de Vercel para evitar 404
});
