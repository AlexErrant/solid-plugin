import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false,
    }),
  ],
  build: {
    rollupOptions: {
      external: [
        "solid-js",
        "solid-js/web"
      ]
    },
    minify: false,
    target: "esnext",
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["es"],
    },
  },
})
