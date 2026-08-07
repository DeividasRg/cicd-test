import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom', // simulate a browser DOM so React components can render in tests
    globals: true,        // makes RTL auto-clean the DOM after each test (prevents cross-test leakage)
  },
})
