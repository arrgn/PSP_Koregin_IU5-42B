import { resolve } from "node:path";

export default {
  build: {
    outDir: "./build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calculator: resolve(__dirname, "calculator.html"),
      },
    },
  },
};
