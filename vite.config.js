import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'deepesh-verse' with your EXACT GitHub repository name
  base: '/deepesh-verse/', 
})