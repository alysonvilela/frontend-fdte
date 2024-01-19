// __mocks__/vitest-env.d.ts
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["vitest-setup"],
    css: true,
    clearMocks: true,
    restoreMocks: true,
  },
});
