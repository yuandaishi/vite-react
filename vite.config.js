import { defineConfig } from "vite";
import reactJsx from 'vite-react-jsx'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react17不需要在每个文件中引用react，但是vite不支持，使用插件改造
    reactJsx(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
});
