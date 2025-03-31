import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fed24d-arbetsmetodik-inl-1-axandranathalie/',
  build: {
    cssCodeSplit: true, // Gör att CSS delas upp om du har flera CSS-filer
    minify: 'esbuild', // Minifierar CSS och JS med esbuild
  },
});
