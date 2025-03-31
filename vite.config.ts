import { defineConfig } from 'vite';

export default defineConfig({
  base: '/arbetsmetodik-inl-1/', // Byt till ditt nya repo-namn här
  build: {
    cssCodeSplit: true, // Gör att CSS delas upp om du har flera CSS-filer
    minify: 'esbuild', // Minifierar CSS och JS med esbuild
  },
});
