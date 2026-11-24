import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: ['index.html', 'watch-listen.html', 'about-us.html', 'bible-stories/index.html', 'activities/index.html', 'contact/index.html'],
    },
  },
})
