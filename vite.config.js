import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://keiran0.github.io/frontendMentor_rest-countries-api/",
  plugins: [react()]
})
