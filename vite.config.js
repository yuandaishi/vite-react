import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactJsx from 'vite-react-jsx'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
