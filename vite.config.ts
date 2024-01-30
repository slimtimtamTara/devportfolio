import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    Unfonts({
      google: {
        families: ['Homemade Apple', 
        'Nanum Myeongjo', 
        'Material+Icons', 
        'Noto Sans Display',
        'Raleway',
        'Noto Sans'],
        
      },
      custom: {
        display: 'swap',
        families: {
          'Bluekendy': {
            src: '/assets/fonts/Bluekendy.ttf',
          },
        },
      },
  })
  ,],
  base: "/devportfolio/",
})

