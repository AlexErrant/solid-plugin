import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    minify: false,
    target: "esnext",
    lib: {
      entry: "src/Comp.tsx",
      fileName: "index",
      formats: ["es"],
    },
  },
});
